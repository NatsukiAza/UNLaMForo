"use client";

import { useState, useEffect } from "react";

// Function to get or generate anonymous ID
function getAnonymousId() {
  let id = localStorage.getItem("anonymousId");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("anonymousId", id);
  }
  return id;
}

interface PostData {
  titulo: string;
  contenido: string;
  comisionId: number;
  anonymousId?: string;
}

export default function AddPost({
  comisionId,
  onPostCreated,
  isLoggedIn = false,
}: {
  comisionId: number;
  onPostCreated?: () => void;
  isLoggedIn?: boolean;
}) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [message, setMessage] = useState("");
  const [anonymousId, setAnonymousId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      setAnonymousId(getAnonymousId());
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData: PostData = {
      titulo,
      contenido,
      comisionId,
    };

    // Add anonymousId if user is not logged in
    if (!isLoggedIn && anonymousId) {
      postData.anonymousId = anonymousId;
    }

    const res = await fetch("/api/auth/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Post creado correctamente");
      setTitulo("");
      setContenido("");
      onPostCreated?.();
    } else {
      setMessage(data.message || "Error al crear post");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 md:mx-50  xl:mx-100"
    >
      <h3>Agregar una opinión</h3>
      {!isLoggedIn && (
        <p className="text-sm text-gray-600 mb-2">
          Publicando como usuario anónimo
        </p>
      )}
      <div className="flex flex-col gap-5">
        <input
          className="border-1 border-[#000] rounded-sm p-2"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo"
          maxLength={250}
          required
        />

        <textarea
          className="border-1 border-[#000] rounded-sm p-2"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Escribí tu experiencia..."
          maxLength={4000}
          required
        ></textarea>

        <button
          type="submit"
          className="w-fit px-5 py-2  rounded-sm text-white bg-[#009674] hover:bg-black cursor-pointer trans"
        >
          Publicar
        </button>

        {message && <p>{message}</p>}
      </div>
    </form>
  );
}
