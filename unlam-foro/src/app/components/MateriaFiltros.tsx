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
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFiltro = (anio: number) => {
    setFiltros((prev) =>
      prev.includes(anio) ? prev.filter((a) => a !== anio) : [...prev, anio]
    );
  };

  const materiasFiltradas = materias.filter((materia) => {
    // Filter by year
    const passesYearFilter =
      filtros.length === 0 || filtros.includes(materia.anio);

    // Filter by search term
    const passesSearchFilter =
      searchTerm === "" ||
      materia.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      materia.codigo.toString().includes(searchTerm);

    return passesYearFilter && passesSearchFilter;
  });

  const añosDisponibles = [...new Set(materias.map((m) => m.anio))].sort();

  return (
    <section className="flex flex-row">
      <div
        className="size-full absolute bg-[#fff0] z-2 trans hidden"
        id="filterfondo"
      ></div>
      <div
        className="border-r-1 border-[#E2E7E7] bg-[#fff] absolute flex-col p-5 gap-5 h-full -ml-58 md:ml-0 md:static trans z-3"
        id="filter"
      >
        <h3 className="text-3xl font-extralight w-[190px]">Filtros</h3>

        {/* Search Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <i
              className="material-icons text-[#aaa]!"
              aria-label="Buscar materia"
            >
              search
            </i>
            <p className="text-md font-base">Buscar:</p>
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre o código..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-[#E2E7E7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#009674] focus:border-transparent"
          />
        </div>

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
        {materiasFiltradas.length === 0 ? (
          <p className="text-gray-500 mt-6">
            No se encontraron materias que coincidan con los filtros.
          </p>
        ) : (
          <ul className="flex flex-col gap-4 mt-6 w-full">
            {materiasFiltradas.map((materia) => (
              <li
                key={materia.codigo}
                className="bgcont flex flex-col sm:flex-row"
              >
                <div className="flex flex-col py-2 pl-5">
                  <h3 className="font-semibold text-base w-[300px] sm:w-[350px]">
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
        )}
      </div>
    </section>
  );
}
