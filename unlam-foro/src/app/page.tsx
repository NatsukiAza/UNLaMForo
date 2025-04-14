import Header from "./components/Header";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const materias = await db.materia.findMany({
    orderBy: { anio: "desc" },
  });
  return (
    <div>
      <Header></Header>
      <section>
        <div></div>
        <div>
          <h2>Materias</h2>
          <ul>
            {materias.map((materia) => (
              <li key={materia.codigo}>
                <Link href={`/materias/${materia.codigo}`} className="">
                  <h3>{materia.name}</h3>
                  <p>{materia.anio}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
