import Header from "./components/Header";
import { db } from "@/lib/db";
import MateriaListaConFiltros from "./components/MateriaFiltros";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["200", "300", "600"],
  subsets: ["latin"],
});

export default async function Home() {
  const materias = await db.materia.findMany({
    orderBy: { anio: "asc" },
  });

  return (
    <div>
      <Header></Header>
      <section className={`${roboto.className}`}>
        <MateriaListaConFiltros materias={materias} />
      </section>
    </div>
  );
}
