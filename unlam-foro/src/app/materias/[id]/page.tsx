import { db } from "@/lib/db";
import { notFound } from "next/navigation";

type Params = {
  params: { codigo: number };
};

export default async function MateriaPage({ params }: Params) {
  const subject = await db.materia.findUnique({
    where: { codigo: params.codigo },
  });

  if (!subject) return notFound();

  return (
    <div>
      <h1>{subject.name}</h1>
    </div>
  );
}
