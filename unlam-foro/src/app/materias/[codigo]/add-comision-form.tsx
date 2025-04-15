"use client";

import { useState } from "react";

type Props = {
  materiaId: string;
};

export default function AddComision({ materiaId }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [profes, setProfesores] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/admin/comisiones", {
      method: "POST",
      body: JSON.stringify({
        materiaId: parseInt(materiaId),
        codigo: parseInt(codigo),
        profes,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Comisión creada exitosamente");
      setCodigo("");
      setProfesores("");
    } else {
      setMessage(data.message || "Error al crear comisión");
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancelar" : "Agregar comisión"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">
              Codigo de comisión
            </label>
            <select
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
              className="w-full border p-2 rounded"
            >
              <option value="1300">1300</option>
              <option value="1600">1600</option>
              <option value="1900">1900</option>
              <option value="2300">2300</option>
              <option value="2600">2600</option>
              <option value="2900">2900</option>
              <option value="3300">3300</option>
              <option value="3600">3600</option>
              <option value="3900">3900</option>
              <option value="4300">4300</option>
              <option value="4600">4600</option>
              <option value="4900">4900</option>
              <option value="5300">5300</option>
              <option value="5600">5600</option>
              <option value="5900">5900</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Profesor</label>
            <input
              type="text"
              value={profes}
              onChange={(e) => setProfesores(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Crear comisión
          </button>

          {message && <p className="text-sm mt-2">{message}</p>}
        </form>
      )}
    </div>
  );
}
