import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string }}){
  const { id } = await params;
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