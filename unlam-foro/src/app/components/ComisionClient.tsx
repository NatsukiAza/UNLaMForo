"use client";

import PostList, { PostListRef } from "@/app/components/PostList";
import AddPost from "../materias/[codigo]/comision/[id]/add-post-form";
import OrdenamientoFiltros, { OrdenamientoType } from "./OrdenamientoFiltros";
import { Roboto } from "next/font/google";
import { Post } from "@/app/types/global";
import { useCallback, useRef, useState } from "react";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

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
  profes: string | null;
  codigo: number;
}) {
  const postListRef = useRef<PostListRef>(null);
  const [ordenamiento, setOrdenamiento] =
    useState<OrdenamientoType>("recientes");

  const handlePostCreated = useCallback(() => {
    // Call the refresh function directly
    postListRef.current?.refresh();
  }, []);

  const handleOrdenamientoChange = useCallback(
    (nuevoOrdenamiento: OrdenamientoType) => {
      setOrdenamiento(nuevoOrdenamiento);
    },
    []
  );

  return (
    <div className={`flex ${roboto.className}`}>
      <div
        className="size-full absolute bg-[#fff0] z-2 trans hidden"
        id="filterfondo"
      ></div>
      {/* Filtro de ordenamiento */}
      <div
        className="border-r-1 border-[#E2E7E7] bg-[#fff] absolute flex flex-col p-5 gap-3 h-full md:h-auto -ml-61 md:ml-0 md:static trans z-3"
        id="filter"
      >
        <h3 className="text-3xl font-extralight! w-[190px]">Filtros</h3>
        <OrdenamientoFiltros
          onOrdenamientoChangeAction={handleOrdenamientoChange}
        />
      </div>
      <div className={`p-5  flex flex-col gap-5`}>
        <div>
          <h1 className="text-3xl font-extralight">
            Comision {codigo} - {profes}
          </h1>
        </div>

        <PostList
          ref={postListRef}
          comisionId={comisionId}
          initialPosts={initialPosts}
          ordenamiento={ordenamiento}
        />
        <AddPost
          comisionId={comisionId}
          isLoggedIn={isLogued}
          onPostCreated={handlePostCreated}
        />
      </div>
    </div>
  );
}
