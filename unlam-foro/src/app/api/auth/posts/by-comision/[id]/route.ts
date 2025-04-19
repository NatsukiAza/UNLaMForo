import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string | string[] }}){
  const id  = Array.isArray(params.id) ? params.id[0] : params.id;
  const idNum = parseInt(id);
  if (isNaN(idNum)) return NextResponse.json({ message: "ID invalido" }, { status: 400});

  const posts = await db.posteo.findMany({
    where: { comisionId: idNum },
    include: {
      usuario: true,
      votos: true,
    },
    orderBy: {fecha: "desc"},
  });

  return NextResponse.json(posts);
}