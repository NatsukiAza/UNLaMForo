# UNLaM Foro

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Foro web donde los estudiantes de la **Universidad Nacional de La Matanza** publican y votan opiniones sobre las **comisiones** de cada materia, para poder elegir con qué docentes cursar antes de inscribirse.

Construido con **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Prisma ORM** sobre **MySQL**, **NextAuth.js** y **Tailwind CSS v4**.

```
Materia (1° a 5° año)  →  Comisión (código + docentes)  →  Posteo (opinión)  →  Votos (+1 / −1)
```

---

## Tabla de contenidos

- [Funcionalidades](#funcionalidades)
- [Stack tecnológico](#stack-tecnológico)
- [Conceptos técnicos aplicados](#conceptos-técnicos-aplicados)
- [Modelo de datos](#modelo-de-datos)
- [API](#api)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Puesta en marcha](#puesta-en-marcha)
- [Variables de entorno](#variables-de-entorno)
- [Decisiones de diseño](#decisiones-de-diseño)
- [Roadmap](#roadmap)

---

## Funcionalidades

| Funcionalidad | Descripción |
| --- | --- |
| **Catálogo de materias** | Listado completo con filtro por año de cursada (1° a 5°) y búsqueda por nombre o código, resuelto en cliente sobre datos renderizados en el servidor. |
| **Comisiones por materia** | Cada materia agrupa varias comisiones identificadas por su código (1300, 1600, etc.) y el plantel docente. |
| **Opiniones** | Posteos con título y contenido (hasta 5000 caracteres) asociados a una comisión concreta. |
| **Sistema de votos** | Voto positivo y negativo, un voto por usuario y por posteo. Volver a votar lo mismo retira el voto; votar lo contrario lo invierte. |
| **Posteo anónimo** | Un visitante sin cuenta puede dejar una opinión por comisión, identificado por un UUID persistido en `localStorage`. |
| **Registro institucional** | Solo se admiten cuentas con correo `@alumno.unlam.edu.ar`, para restringir el foro a la comunidad real de la universidad. |
| **Autenticación** | Login con credenciales, sesión JWT y contraseñas hasheadas con bcrypt. |
| **Recuperación de contraseña** | Flujo completo con token de un solo uso, expiración a 1 hora y envío de mail vía SMTP (Nodemailer). |
| **Perfil de usuario** | Edición de nombre y contraseña, y listado de los posteos propios. |
| **Panel de administración** | Los usuarios con rol `ADMIN` pueden crear materias y comisiones nuevas. |
| **Ordenamiento de opiniones** | Más recientes, más antiguas, más votadas y menos votadas. |
| **Rate limiting** | Middleware que limita a 100 requests por minuto por IP y endpoint. |

---

## Stack tecnológico

**Framework y runtime**
- [Next.js 15.2.4](https://nextjs.org/) con **App Router**, Server Components y Route Handlers
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/) en modo `strict`

**Datos**
- [Prisma ORM 6](https://www.prisma.io/) como capa de acceso a datos y sistema de migraciones (13 migraciones versionadas)
- **MySQL** como motor de base de datos

**Autenticación y seguridad**
- [NextAuth.js 4](https://next-auth.js.org/) con *Credentials Provider* y estrategia de sesión **JWT**
- `bcrypt` para el hasheo de contraseñas
- `nodemailer` para el envío de mails transaccionales
- Middleware propio de rate limiting y cabeceras CORS

**Interfaz**
- [Tailwind CSS v4](https://tailwindcss.com/) (configuración con `@theme` en CSS, sin `tailwind.config.js`)
- `next/font` con Geist y Roboto, y Material Icons para la iconografía
- Diseño responsive con panel de filtros deslizable en mobile

**Tooling**
- ESLint 9 (flat config) con `next/core-web-vitals` y `next/typescript`
- Alias de importación `@/*` → `src/*`

---

## Conceptos técnicos aplicados

Esta sección resume las ideas de arquitectura que sostienen el proyecto, más allá de las librerías usadas.

### 1. Server Components vs. Client Components

El proyecto aprovecha la separación del App Router de forma deliberada:

- Las **páginas** (`/`, `/materias/[codigo]`, `/materias/[codigo]/comision/[id]`) son Server Components asíncronos que consultan Prisma **directamente**, sin pasar por HTTP. Esto elimina un salto de red y evita exponer la base de datos en el cliente.
- Los **componentes interactivos** (`PostList`, filtros, formularios, perfil) están marcados con `"use client"` y consumen los Route Handlers vía `fetch`.

El patrón resultante es **SSR para la primera pintura y refetch en cliente para las actualizaciones**: la página de comisión renderiza los posteos en el servidor y los pasa como `initialPosts`, y el cliente vuelve a pedirlos a la API sólo cuando el usuario vota o publica.

`src/app/materias/[codigo]/comision/[id]/page.tsx`

```ts
  const { id } = await params;
  const idNumerico = parseInt(id);

  if (isNaN(idNumerico)) return notFound();

  const [comision, session] = await Promise.all([
    db.comision.findUnique({
      where: { id: idNumerico },
      include: {
        posteos: {
          include: {
            usuario: { select: { name: true } },
            votos: true,
          },
          orderBy: { fecha: "desc" },
        },
      },
    }),
    getServerSession(authOptions),
  ]);
```

La consulta de datos y la de sesión se lanzan en paralelo con `Promise.all` en lugar de en cascada, para no sumar latencias.

### 2. Autenticación basada en JWT con roles

`authOptions` centraliza la configuración de NextAuth. Los callbacks `jwt` y `session` propagan el `id` y el `role` del usuario desde la base de datos hasta el token y luego hasta la sesión, de modo que cualquier Server Component o Route Handler puede autorizar sin volver a consultar la base.

`src/lib/auth.ts`

```ts
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token}) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "USER" | "ADMIN";
      }
      return session;
    },
  },
```

Los tipos de `Session` y `JWT` se extienden mediante *module augmentation* en `src/app/types/next-auth.d.ts`, así el `role` queda tipado en todo el proyecto y no hay `any` sueltos en las verificaciones de permisos.

### 3. Modelado relacional e integridad a nivel de base de datos

En lugar de validar la unicidad del voto en la aplicación, la regla vive en el esquema: la restricción compuesta `@@unique([userId, postId])` garantiza **un voto por usuario y por posteo** incluso ante requests concurrentes. Prisma expone esa clave compuesta como `userId_postId`, lo que permite resolver el voto con una sola operación atómica.

`src/app/api/auth/posts/vote/route.ts`

```ts
    const existingVote = await db.vote.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (existingVote) {
      if(existingVote.value === value) {
        await db.vote.delete({
          where: { userId_postId: { userId, postId } },
        });
      } else {
        await db.vote.update({
          where: { userId_postId: { userId, postId } },
          data: {value},
        });
      }
    } else {
      await db.vote.create({
        data: { userId, postId, value },
      });
    }
```

El esquema también declara **índices compuestos** pensados según los patrones de consulta reales, por ejemplo `@@index([comisionId, fecha])` para el listado paginado y ordenado por fecha de cada comisión.

### 4. Identidad anónima y regla de negocio "una opinión por comisión"

El campo `usuarioId` de `Posteo` es **opcional**, lo que permite que convivan opiniones firmadas y anónimas en la misma tabla. Cuando no hay sesión, el cliente genera un UUID v4 y lo guarda en `localStorage`; el backend lo usa para impedir que la misma persona sature una comisión con opiniones.

`src/app/api/auth/posts/create/route.ts`

```ts
  if(session && session.user) {
    userId = session.user.id;
  } else {
    // If no session, use the anonymousId from the request body, or generate a new one
    anonymousId = bodyAnonymousId || uuidv4();

    // Check if this anonymousId already posted in this comision
    const existingPost = await db.posteo.findFirst({
      where: {
        comisionId: Number(comisionId),
        anonymousId: anonymousId,
      },
    });

    if (existingPost) {
      return NextResponse.json({ message: "Ya has publicado una opinión en esta comisión" }, { status: 403 });
    }
  }
```

### 5. Paginación y proyección de campos

El endpoint de posteos por comisión implementa paginación con `skip`/`take`, devuelve metadata (`page`, `limit`, `total`, `totalPages`) y usa `select` para **traer sólo los campos que la UI necesita**, en vez de la fila completa. El conteo total y la página se resuelven en paralelo:

`src/app/api/auth/posts/by-comision/[id]/route.ts`

```ts
    const [posteos, totalCount] = await Promise.all([
      db.posteo.findMany({
        where: { comisionId: idNum },
        select: {
          id: true,
          titulo: true,
          contenido: true,
          fecha: true,
          anonymousId: true,
          usuario: { select: { name: true } },
          votos: { select: { value: true } },
        },
        orderBy: { fecha: "desc" },
        skip,
        take: limit,
      }),
      db.posteo.count({ where: { comisionId: idNum } }),
    ]);
```

### 6. Singleton de Prisma Client

En desarrollo, el *hot reload* de Next.js reevalúa los módulos y puede abrir una conexión nueva en cada recarga hasta agotar el pool. El cliente se cachea en `globalThis` sólo fuera de producción, que es el patrón recomendado por Prisma:

`src/lib/db.ts`

```ts
import { PrismaClient } from "@/../prisma/generated/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

### 7. Optimización de renders en React

`PostList` concentra varias técnicas de React:

- `useMemo` para derivar el conteo de votos y el orden de la lista, evitando recalcular en cada render.
- `useCallback` para estabilizar los handlers de voto y de refetch.
- `useRef` + `setTimeout` como **debounce de 300 ms** en el voto, para no disparar una request por cada click.
- `forwardRef` + `useImperativeHandle` para exponer un método `refresh()` al componente padre, de modo que el formulario de alta pueda recargar la lista sin duplicar la lógica de fetch ni levantar el estado.

`src/app/components/PostList.tsx`

```tsx
  // Expose refresh function to parent
  useImperativeHandle(
    ref,
    () => ({
      refresh,
    }),
    [refresh]
  );
```

Además, el voto detecta el `401` de la API y redirige a `/sign_in`, resolviendo la autorización en el mismo flujo de interacción.

### 8. Middleware perimetral

`src/middleware.ts` intercepta todo `/api/*` antes de llegar a los handlers y aplica rate limiting con una ventana deslizante de 1 minuto por IP y endpoint, además de las cabeceras CORS. El store es en memoria, con la limitación documentada de que un despliegue multi-instancia requeriría Redis.

### 9. Seguridad

- Contraseñas hasheadas con `bcrypt` (10 rondas); nunca se almacenan ni se devuelven en texto plano.
- Tokens de reseteo generados con `crypto`, de un solo uso y con expiración a una hora.
- Verificación de dominio institucional en el registro.
- Autorización por rol en los endpoints de administración, validada en el servidor y no sólo escondiendo la UI.
- Errores de API con códigos HTTP semánticos (`400`, `401`, `403`, `429`, `500`).

---

## Modelo de datos

```mermaid
erDiagram
    User ||--o{ Posteo : "escribe (opcional)"
    User ||--o{ Vote : "emite"
    Materia ||--o{ Comision : "tiene"
    Comision ||--o{ Posteo : "recibe"
    Posteo ||--o{ Vote : "acumula"

    User {
        Int id PK
        String name UK
        String email UK
        String password
        Role role
        DateTime creadoEn
        String resetToken
        DateTime resetTokenExpiry
    }
    Materia {
        Int codigo PK
        String name
        Int anio
    }
    Comision {
        Int id PK
        Int codigo
        String profes
        Int materiaId FK
    }
    Posteo {
        Int id PK
        String titulo
        String contenido
        DateTime fecha
        String anonymousId
        Int usuarioId FK
        Int comisionId FK
    }
    Vote {
        Int id PK
        Int value
        Int userId FK
        Int postId FK
    }
```

Puntos destacados del esquema:

- `Materia.codigo` es la **clave primaria natural** (el código oficial de la materia en el plan de estudios), no un autoincremental artificial.
- `Posteo.usuarioId` es nullable para soportar autoría anónima.
- `Vote.value` toma únicamente `1` o `-1`, y el puntaje neto se calcula como la suma.
- `enum Role { USER, ADMIN }` modela los permisos a nivel de base de datos.

---

## API

Todo el backend está implementado con **Route Handlers** del App Router, bajo `src/app/api/`.

| Método | Endpoint | Acceso | Descripción |
| --- | --- | --- | --- |
| `GET` `POST` | `/api/auth/[...nextauth]` | Público | Handler de NextAuth: login, sesión y JWT. |
| `POST` | `/api/auth/register` | Público | Registro con validación de correo institucional y hasheo bcrypt. |
| `POST` | `/api/auth/forgot-password` | Público | Genera el token de reseteo y envía el mail. |
| `POST` | `/api/auth/verify-reset-token` | Público | Valida el token antes de mostrar el formulario. |
| `POST` | `/api/auth/reset-password` | Público | Define la nueva contraseña a partir de un token válido. |
| `PUT` | `/api/auth/profile/update` | Sesión | Actualiza nombre y/o contraseña. |
| `POST` | `/api/auth/posts/create` | Público / Sesión | Crea una opinión, firmada o anónima. |
| `POST` | `/api/auth/posts/vote` | Sesión | Aplica, retira o invierte un voto. |
| `GET` | `/api/auth/posts/by-user` | Sesión | Posteos del usuario autenticado. |
| `GET` | `/api/auth/posts/by-comision/[id]` | Público | Posteos de una comisión, paginados (`?page=&limit=`). |
| `POST` | `/api/auth/admin/comisiones` | `ADMIN` | Crea una comisión para una materia. |
| `POST` | `/api/auth/admin/subjects/create` | `ADMIN` | Crea una materia. |

### Rutas de la aplicación

| Ruta | Renderizado | Descripción |
| --- | --- | --- |
| `/` | Server | Catálogo de materias con filtros por año y búsqueda. |
| `/materias/[codigo]` | Server | Comisiones de una materia; alta de comisión para administradores. |
| `/materias/[codigo]/comision/[id]` | Server + Client | Foro de la comisión: opiniones, ordenamiento, votos y publicación. |
| `/sign_in` · `/sign_up` | Client | Ingreso y registro. |
| `/forgot-password` · `/reset-password` | Client | Recuperación de contraseña. |
| `/perfil` | Server + Client | Datos de la cuenta y posteos propios. |
| `/admin/create` | Server | Alta de materias (sólo `ADMIN`). |

---

## Estructura del proyecto

```
unlam-foro/
├── prisma/
│   ├── schema.prisma          # Modelos, enums y datasource MySQL
│   └── migrations/            # 13 migraciones versionadas
├── public/                    # Logos e imágenes estáticas
└── src/
    ├── middleware.ts          # Rate limiting y CORS sobre /api/*
    ├── lib/
    │   ├── auth.ts            # authOptions de NextAuth + helper auth()
    │   └── db.ts              # Singleton de Prisma Client
    └── app/
        ├── layout.tsx         # Layout raíz con SessionProvider
        ├── page.tsx           # Home (Server Component)
        ├── globals.css        # Tailwind v4 y utilidades propias
        ├── api/               # Route Handlers (auth, posts, admin)
        ├── components/        # Componentes de UI reutilizables
        ├── types/             # Tipos globales y augmentation de NextAuth
        ├── materias/[codigo]/ # Rutas dinámicas anidadas
        ├── perfil/
        ├── admin/create/
        ├── sign_in/  sign_up/
        └── forgot-password/  reset-password/
```

---

## Puesta en marcha

**Requisitos:** Node.js 18 o superior y una instancia de MySQL.

```bash
git clone https://github.com/NatsukiAza/UNLaMForo.git
cd UNLaMForo/unlam-foro

npm install

# Crear el archivo .env con las variables de la sección siguiente
npx prisma migrate dev     # Aplica las migraciones y genera el client
npm run dev                # http://localhost:3000
```

Scripts disponibles:

| Script | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Build de producción. |
| `npm run start` | Sirve el build de producción. |
| `npm run lint` | ESLint. |

Para habilitar un administrador, se actualiza el rol del usuario en la base de datos:

```sql
UPDATE User SET role = 'ADMIN' WHERE email = 'tu.mail@alumno.unlam.edu.ar';
```

---

## Variables de entorno

Crear `unlam-foro/.env`:

```env
# Base de datos
DATABASE_URL="mysql://usuario:password@localhost:3306/unlam_foro"

# NextAuth
NEXTAUTH_SECRET="cadena-aleatoria-larga"   # openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# SMTP para la recuperación de contraseña
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="tu.cuenta@gmail.com"
SMTP_PASS="app-password"
```

---

## Decisiones de diseño

**Por qué comisiones y no materias como unidad de opinión.** La experiencia de cursada depende del plantel docente, no de la materia en abstracto. Por eso la opinión se ancla a la comisión, y `Materia` funciona como agrupador navegable.

**Por qué se permite postear sin cuenta.** El valor del foro depende del volumen de opiniones, y exigir registro para la primera contribución reduce la participación. El límite de una opinión por comisión mediante `anonymousId` mantiene un equilibrio razonable entre apertura y calidad, mientras que el voto sí exige cuenta para que sea trazable y único.

**Por qué se restringe el correo institucional.** Acota el foro a estudiantes reales de la universidad y limita el registro masivo automatizado.

**Por qué sesiones JWT en lugar de sesiones en base.** Evita una consulta a la base por cada request autenticado, y como el `role` viaja en el token, la autorización se resuelve sin I/O.

**Por qué el ordenamiento se hace en el cliente.** El volumen de opiniones por comisión es acotado y ya viene paginado, así que reordenar en memoria es instantáneo y ahorra un round-trip. Con más volumen, correspondería moverlo a la consulta SQL.

---

## Roadmap

- [ ] Respuestas y comentarios anidados sobre las opiniones
- [ ] Moderación: reportes y baja de contenido por parte de administradores
- [ ] Migrar el rate limiting a Redis para soportar despliegues multi-instancia
- [ ] Validación de esquemas con Zod en los Route Handlers
- [ ] Modo oscuro (el componente existe y está pendiente de integrar)
- [ ] Baja de cuenta
- [ ] Tests unitarios y de integración, y pipeline de CI

---

## Autor

Desarrollado por [NatsukiAza](https://github.com/NatsukiAza).
