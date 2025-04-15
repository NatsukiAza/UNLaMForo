import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AddComision from "./add-comision-form";

type PageParams = {
  params: { codigo: string };
};

export default async function MateriaPage({ params }: PageParams) {
  const { codigo } = await params;

  const codigoNumerico = parseInt(codigo);
  if (isNaN(codigoNumerico)) {
    return notFound();
  }

  const [materia, session] = await Promise.all([
    db.materia.findUnique({
      where: { codigo: codigoNumerico },
      include: { comision: true },
    }),
    getServerSession(authOptions),
  ]);

  if (!materia) return notFound();

  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <div>
      <Header></Header>
      <h1>{materia.name}</h1>
      <div>
        <h2>Comisiones</h2>
        {materia.comision.length === 0 ? (
          <p>Aún no hay comisiones para esta materia.</p>
        ) : (
          <ul>
            {materia.comision.map((c) => (
              <li key={c.id}>
                <h3>{c.codigo}</h3>
                {c.profes && <p>Profesores: {c.profes}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {isAdmin && (
        <div>
          <AddComision materiaId={String(materia.codigo)} />
        </div>
      )}
    </div>
  );
}
