import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AddComision from "./add-comision-form";
import { Roboto } from "next/font/google";
import Link from "next/link";
const roboto = Roboto({
  weight: ["200", "600"],
  subsets: ["latin"],
});

export default async function MateriaPage({
  params,
}: {
  params: Promise<{ codigo: string }>;
}) {
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
      <section className={`p-5 ${roboto.className} flex flex-col gap-5`}>
        <h1 className="text-3xl font-extralight">{materia.name}</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Comisiones</h2>
          {materia.comision.length === 0 ? (
            <p>Aún no hay comisiones para esta materia.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {materia.comision.map((c) => (
                <li key={c.id} className="bg-[#eee] flex flex-col sm:flex-row">
                  <div className="pl-5 py-2">
                    <h3 className="w-[308px]  text-base font-semibold">
                      {c.codigo}
                    </h3>
                    {c.profes && (
                      <p className="max-w-[308px] text-xs font-semibold">
                        Profesores: {c.profes}
                      </p>
                    )}
                  </div>
                  <Link
                    href={`${materia.codigo}/comision/${c.id}`}
                    className="w-[86px] flex flex-col items-center py-2 hover:bg-[#c4bfbf]"
                  >
                    <i className="material-icons text-4xl! text-[#555]!">
                      star_half
                    </i>
                    <p className="font-light text-xs text-center">Opiniones</p>
                  </Link>
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
      </section>
    </div>
  );
}
