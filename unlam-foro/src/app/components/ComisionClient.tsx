"use client";

import PostList, { PostListRef } from "@/app/components/PostList";
import AddPost from "../materias/[codigo]/comision/[id]/add-post-form";
import { Roboto } from "next/font/google";
import { Post } from "@/app/types/global";
import { useCallback, useRef } from "react";

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
  profes: string;
  codigo: number;
}) {
  const postListRef = useRef<PostListRef>(null);

  const handlePostCreated = useCallback(() => {
    // Call the refresh function directly
    postListRef.current?.refresh();
  }, []);

  return (
    <div className={`p-5 ${roboto.className} flex flex-col gap-5`}>
      <div>
        <h1 className="text-3xl font-extralight">
          Comision {codigo} - {profes}
        </h1>
      </div>
      <PostList
        ref={postListRef}
        comisionId={comisionId}
        initialPosts={initialPosts}
      />
      <AddPost
        comisionId={comisionId}
        isLoggedIn={isLogued}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
}
