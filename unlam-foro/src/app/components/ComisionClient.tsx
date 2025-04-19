"use client";

import PostList from "@/app/components/PostList";
import AddPost from "../materias/[codigo]/comision/[id]/add-post-form";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

type Post = {
  id: number;
  titulo: string;
  contenido: string;
  fecha: string;
  usuario: {
    name: string;
  };
  votos: { value: number }[];
};

export default function ComisionClient({
  comisionId,
  initialPosts,
  isLogued,
  profes,
  codigo,
}: {
  comisionId: number;
  initialPosts: Post[];
  isLogued: boolean;
  profes: string;
  codigo: number;
}) {
  return (
    <div className={`p-5 ${roboto.className} flex flex-col gap-5`}>
      <div>
        <h1 className="text-3xl font-extralight">
          Comision {codigo} - {profes}
        </h1>
      </div>
      <PostList comisionId={comisionId} initialPosts={initialPosts} />
      {isLogued && (
        <AddPost
          comisionId={comisionId}
          onPostCreated={() => {
            if (typeof window !== "undefined" && window.__refreshPostList) {
              window.__refreshPostList();
            }
          }}
        />
      )}
    </div>
  );
}
