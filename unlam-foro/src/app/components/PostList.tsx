"use client";

import { useEffect, useState } from "react";

type Posteo = {
  id: number;
  titulo: string;
  contenido: string;
  fecha: Date;
  votos: { value: number }[];
  usuario: {
    name: string;
  };
};

export default function PostList({
  comisionId,
  initialPosts,
}: {
  comisionId: number;
  initialPosts: Posteo[];
}) {
  const [posteos, setPosts] = useState(initialPosts);

  const fetchPosts = async () => {
    const res = await fetch(`/api/auth/posts/by-comision/${comisionId}`);
    const data = await res.json();
    setPosts(data);
  };

  const refresh = () => fetchPosts();

  useEffect(() => {
    window.__refreshPostList = refresh;
  }, []);

  const handleVote = async (postId: number, value: number) => {
    await fetch("/api/auth/posts/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, value }),
    });

    fetchPosts();
  };

  if (posteos.length === 0) {
    return <p>No hay posteos actualmente</p>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {posteos.map((p) => {
        const upvotes = p.votos.filter((v) => v.value === 1).length;
        const downvotes = p.votos.filter((v) => v.value === -1).length;
        return (
          <li key={p.id} className="bg-[#eee] flex flex-col gap-2 px-5 py-2">
            <div className="flex gap-5 items-center justify-between">
              <h3 className="font-bold text-xl text-[#009674]">
                {p.usuario.name || "Usuario"}{" "}
              </h3>
              <p className="text-sm">
                {new Date(p.fecha).toLocaleString("es-AR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="">
              <h4 className="font-semibold text-lg">{p.titulo}</h4>
              <p>{p.contenido}</p>
            </div>
            <div className="flex gap-4">
              <button
                className="cursor-pointer"
                onClick={() => handleVote(p.id, 1)}
              >
                👍{upvotes}
              </button>
              <button
                className="cursor-pointer"
                onClick={() => handleVote(p.id, -1)}
              >
                👎{downvotes}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
