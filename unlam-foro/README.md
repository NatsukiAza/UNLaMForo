# UNLaM Foro — aplicación Next.js

Este directorio contiene la aplicación. La documentación completa del proyecto (arquitectura, modelo de datos, API y conceptos aplicados) está en el [README de la raíz del repositorio](../README.md).

## Desarrollo local

```bash
npm install
npx prisma migrate dev
npm run dev
```

La app queda disponible en [http://localhost:3000](http://localhost:3000).

Requiere un archivo `.env` con `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL` y las variables `SMTP_*`. El detalle está documentado en el [README principal](../README.md#variables-de-entorno).

## Scripts

| Script | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Build de producción. |
| `npm run start` | Sirve el build de producción. |
| `npm run lint` | ESLint. |

## Prisma

```bash
npx prisma migrate dev --name <nombre>   # Crear y aplicar una migración
npx prisma generate                      # Regenerar el client
npx prisma studio                        # Explorar la base de datos
```
