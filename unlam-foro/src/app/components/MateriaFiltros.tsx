"use client";

import { useState } from "react";
import Link from "next/link";

type Materia = {
  codigo: number;
  name: string;
  anio: number;
};

const etiquetasAnios: Record<number, string> = {
  1: "Primer Año",
  2: "Segundo Año",
  3: "Tercer Año",
  4: "Cuarto Año",
  5: "Quinto Año",
};

export default function MateriaListaConFiltros({
  materias,
}: {
  materias: Materia[];
}) {
  const [filtros, setFiltros] = useState<number[]>([]);

  const toggleFiltro = (anio: number) => {
    setFiltros((prev) =>
      prev.includes(anio) ? prev.filter((a) => a !== anio) : [...prev, anio]
    );
  };

  const materiasFiltradas =
    filtros.length === 0
      ? materias
      : materias.filter((m) => filtros.includes(m.anio));

  const añosDisponibles = [...new Set(materias.map((m) => m.anio))].sort();

  return (
    <section className="flex flex-row">
      <div className="border-r-1 border-[#E2E7E7] hidden md:flex flex-col p-5 gap-5">
        <h3 className="text-3xl font-extralight w-[190px]">Filtros</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <i
              className="material-icons text-[#aaa]!"
              aria-label="Filtro de año"
            >
              calendar_today
            </i>
            <p className="text-md font-base">Año:</p>
          </div>

          <div className="flex flex-col whitespace-nowrap text-md font-bold pl-0.5">
            {añosDisponibles.map((anio) => (
              <label key={anio} className="flex gap-2 items-center">
                <input
                  className="accent-[#009674] size-4"
                  type="checkbox"
                  value={anio}
                  checked={filtros.includes(anio)}
                  onChange={() => toggleFiltro(anio)}
                />
                {etiquetasAnios[anio]}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 w-full">
        <h2 className="text-3xl font-extralight">Materias</h2>
        <ul className="flex flex-col gap-4 mt-6 w-full">
          {materiasFiltradas.map((materia) => (
            <li
              key={materia.codigo}
              className="bgcont flex flex-col sm:flex-row"
            >
              <div className="flex flex-col py-2 pl-5">
                <h3 className="font-semibold text-base w-[350px]">
                  {materia.name}
                </h3>
                <p className="text-xs font-semibold">
                  {materia.codigo} - {etiquetasAnios[materia.anio]}
                </p>
              </div>

              <Link
                href={`/materias/${materia.codigo}`}
                className="w-[86px] flex flex-col items-center py-2 hover:bg-[#c4bfbf]"
              >
                <i
                  className="material-icons text-4xl! text-[#555]!"
                  aria-label={`foro ${materia.name}`}
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
  );
}
