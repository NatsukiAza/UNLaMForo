"use client";

import { useState } from "react";

export default function FormNuevaMateria() {
  const [name, setName] = useState("");
  const [codigo, setCodigo] = useState("");
  const [anio, setAnio] = useState<number>(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/admin/subjects/create", {
      method: "POST",
      body: JSON.stringify({ name, codigo: parseInt(codigo), anio }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("¡Pagina creada!");
      setName("");
      setCodigo("0");
    } else {
      setMessage(data.message || "Error al crear");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">
          Nombre de la materia
        </label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Codigo de materia
        </label>
        <input
          className="w-full border p-2 rounded"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Año de materia</label>
        <select
          className="w-full border p-2 rounded"
          value={anio}
          onChange={(e) => setAnio(parseInt(e.target.value))}
          required
        >
          <option value="1">Primer Año</option>
          <option value="2">Segundo Año</option>
          <option value="3">Tercer Año</option>
          <option value="4">Cuarto Año</option>
          <option value="5">Quinto Año</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
