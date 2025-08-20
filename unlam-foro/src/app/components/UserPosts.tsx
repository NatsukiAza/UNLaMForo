"use client";

import { useState, useEffect } from "react";
import { Post } from "@/app/types/global";

interface UserPostsProps {
  userId: string;
}

export default function UserPosts({ userId }: UserPostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserPosts();
  }, [userId]);

  const fetchUserPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/posts/by-user");
      const data = await response.json();

      if (response.ok) {
        setPosts(data.posteos || []);
      } else {
        setError(data.error || "Error al cargar los posts");
      }
    } catch {
      setError("Error al cargar los posts");
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (postId: number, value: number) => {
    try {
      await fetch("/api/auth/posts/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, value }),
      });
      fetchUserPosts(); // Recargar posts para actualizar votos
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  if (loading) {
    return <p className="text-center py-4">Cargando tus posts...</p>;
  }

  if (error) {
    return <p className="text-center py-4 text-red-500">{error}</p>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">
          No has publicado ningún post aún
        </p>
        <p className="text-gray-400 text-sm mt-2">
          ¡Comienza a participar en los foros de tus materias!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#009674] mb-4">
        Mis Posts ({posts.length})
      </h3>
      <div className="max-lg:space-y-4 grid-post lg:gap-5">
        {posts.map((post) => {
          const upvotes = post.votos.filter((v) => v.value === 1).length;
          const downvotes = post.votos.filter((v) => v.value === -1).length;
          const totalVotes = upvotes - downvotes;

          return (
            <div
              key={post.id}
              className="w-[410px] bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3 ">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">
                    {post.titulo}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {new Date(post.fecha).toLocaleString("es-AR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {post.comision?.materia?.name && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {post.comision.materia.name}
                    </span>
                  )}
                  {post.comision?.codigo && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      Comisión {post.comision.codigo}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-3 line-clamp-3">
                {post.contenido}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
                    onClick={() => handleVote(post.id, 1)}
                  >
                    <i className="material-icons text-sm text-[#aaa]! cursor-pointer">
                      thumb_up
                    </i>
                    <span>{upvotes}</span>
                  </button>
                  <button
                    className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors"
                    onClick={() => handleVote(post.id, -1)}
                  >
                    <i className="material-icons text-sm text-[#aaa]! cursor-pointer">
                      thumb_down
                    </i>
                    <span>{downvotes}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
