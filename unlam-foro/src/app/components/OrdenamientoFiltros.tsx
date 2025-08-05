"use client";

import { useState } from "react";

export type OrdenamientoType =
  | "recientes"
  | "antiguos"
  | "masVotados"
  | "menosVotados";

interface OrdenamientoFiltrosProps {
  onOrdenamientoChangeAction: (ordenamiento: OrdenamientoType) => void;
}

const opcionesOrdenamiento = [
  {
    value: "recientes" as OrdenamientoType,
    label: "Más recientes",
    icon: "schedule",
  },
  {
    value: "antiguos" as OrdenamientoType,
    label: "Más antiguos",
    icon: "history",
  },
  {
    value: "masVotados" as OrdenamientoType,
    label: "Más votados",
    icon: "thumb_up",
  },
  {
    value: "menosVotados" as OrdenamientoType,
    label: "Menos votados",
    icon: "thumb_down",
  },
];

export default function OrdenamientoFiltros({
  onOrdenamientoChangeAction,
}: OrdenamientoFiltrosProps) {
  const [ordenamientoSeleccionado, setOrdenamientoSeleccionado] =
    useState<OrdenamientoType>("recientes");

  const handleOrdenamientoChange = (value: OrdenamientoType) => {
    setOrdenamientoSeleccionado(value);
    onOrdenamientoChangeAction(value);
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-2">
        <i
          className="material-icons text-[#aaa]!"
          aria-label="Ordenamiento de posteos"
        >
          sort
        </i>
        <p className="text-md font-base">Ordenar por:</p>
      </div>

      <div className="flex flex-col whitespace-nowrap text-md font-bold pl-0.5">
        {opcionesOrdenamiento.map((opcion) => (
          <label key={opcion.value} className="flex gap-2 items-center">
            <input
              className="accent-[#009674] size-4"
              type="radio"
              name="ordenamiento"
              value={opcion.value}
              checked={ordenamientoSeleccionado === opcion.value}
              onChange={() => handleOrdenamientoChange(opcion.value)}
            />
            <i className="material-icons text-sm text-[#555]!">{opcion.icon}</i>
            {opcion.label}
          </label>
        ))}
      </div>
    </section>
  );
}
