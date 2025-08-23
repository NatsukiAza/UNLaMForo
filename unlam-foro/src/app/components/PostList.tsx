"use client";

import {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useMemo,
  useRef,
} from "react";
import { Post } from "@/app/types/global";
import { OrdenamientoType } from "./OrdenamientoFiltros";
import { useRouter } from "next/navigation";

export interface PostListRef {
  refresh: () => void;
}

const PostList = forwardRef<
  PostListRef,
  {
    comisionId: number;
    initialPosts: Post[];
    ordenamiento: OrdenamientoType;
  }
>(({ comisionId, initialPosts, ordenamiento }, ref) => {
  const [posteos, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const voteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/posts/by-comision/${comisionId}`);
      const data = await res.json();
      setPosts(data.posteos || data); // Compatibilidad con respuesta anterior
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [comisionId]);

  const refresh = useCallback(() => fetchPosts(), [fetchPosts]);

  // Expose refresh function to parent
  useImperativeHandle(
    ref,
    () => ({
      refresh,
    }),
    [refresh]
  );

  const handleVote = useCallback(
    async (postId: number, value: number) => {
      // Debounce para evitar múltiples votos rápidos
      if (voteTimeoutRef.current) {
        clearTimeout(voteTimeoutRef.current);
      }

      voteTimeoutRef.current = setTimeout(async () => {
        try {
          const res = await fetch("/api/auth/posts/vote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ postId, value }),
          });

          if (res.status == 401) {
            router.push("/sign_in");
            return;
          }

          fetchPosts();
        } catch (error) {
          console.error("Error voting:", error);
        }
      }, 300);
    },
    [fetchPosts]
  );

  // Memoizar el cálculo de votos y ordenamiento para evitar recálculos innecesarios
  const postsWithVotes = useMemo(() => {
    const postsWithVotesData = posteos.map((p) => {
      const upvotes = p.votos.filter((v) => v.value === 1).length;
      const downvotes = p.votos.filter((v) => v.value === -1).length;
      const isAnonymous = !p.usuario && p.anonymousId;

      return {
        ...p,
        upvotes,
        downvotes,
        isAnonymous,
        totalVotes: upvotes - downvotes,
      };
    });

    // Aplicar ordenamiento
    return postsWithVotesData.sort((a, b) => {
      switch (ordenamiento) {
        case "recientes":
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
        case "antiguos":
          return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
        case "masVotados":
          return b.totalVotes - a.totalVotes;
        case "menosVotados":
          return a.totalVotes - b.totalVotes;
        default:
          return 0;
      }
    });
  }, [posteos, ordenamiento]);

  if (loading) {
    return <p>Cargando posteos...</p>;
  }

  if (posteos.length === 0) {
    return <p>No hay posteos actualmente</p>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {postsWithVotes.map((p) => (
        <li key={p.id} className="bg-[#eee] flex flex-col gap-2 px-5 py-2">
          <div className="flex gap-5 items-center justify-between">
            <h3 className="font-bold text-xl text-[#009674]">
              {p.isAnonymous ? "Anónimo" : p.usuario?.name || "Usuario"}{" "}
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
          <div className="flex gap-5">
            <button
              className="cursor-pointer hover:scale-105 transition-transform flex items-center gap-2"
              onClick={() => handleVote(p.id, 1)}
            >
              <i className="trans material-icons text-sm text-[#555]! hover:text-[#777]!">
                thumb_up
              </i>
              {p.upvotes}
            </button>
            <button
              className="cursor-pointer hover:scale-105 transition-transform flex items-center gap-2"
              onClick={() => handleVote(p.id, -1)}
            >
              <i className="trans material-icons text-sm text-[#555]! hover:text-[#777]!">
                thumb_down
              </i>
              {p.downvotes}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
});

PostList.displayName = "PostList";

export default PostList;
