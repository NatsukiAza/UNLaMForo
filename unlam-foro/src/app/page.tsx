import Header from "./components/Header";
import { db } from "@/lib/db";
import Link from "next/link";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["100", "200", "300", "400", "600", "800", "900"],
  subsets: ["latin"],
});

export default async function Home() {
  const materias = await db.materia.findMany({
    orderBy: { anio: "asc" },
  });

  const cambiarAnio = (anio: number) => {
    switch (anio) {
      case 1:
        return "Primer Año";
        break;
      case 2:
        return "Segundo Año";
        break;
      case 3:
        return "Tercer Año";
        break;
      case 4:
        return "Cuarto Año";
        break;
      case 5:
        return "Quinto Año";
        break;
    }
  };

  return (
    <div>
      <Header></Header>
      <section className={`flex ${roboto.className}`}>
        <div className="border-r-1 border-[] hidden"></div>
        <div className="p-4 w-full">
          <h2 className="text-3xl font-extralight mt-2">Materias</h2>
          <ul className="flex flex-col gap-4 mt-6 w-full">
            {materias.map((materia) => (
              <li
                key={materia.codigo}
                className="bg-[#eee] flex flex-col sm:flex-row"
              >
                <div className="flex flex-col py-2 pl-5">
                  <h3 className="font-semibold text-base w-[308px]">
                    {materia.name}
                  </h3>
                  <p className="text-xs font-semibold">
                    {materia.codigo} - {cambiarAnio(materia.anio)}
                  </p>
                </div>

                <Link
                  href={`/materias/${materia.codigo}`}
                  className="w-[86px] flex flex-col items-center py-2 hover:bg-[#c4bfbf]"
                >
                  <i
                    className="material-icons text-4xl! text-[#555]!"
                    aria-hidden="true"
                  >
                    forum
                  </i>
                  <p className="font-light text-xs text-center">Foro</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
