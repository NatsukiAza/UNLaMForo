import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if(!session) {
    return NextResponse.json({ message: "No autenticado "}, { status: 401 });
  }

  const { titulo, contenido, comisionId } = await req.json();

  if(!titulo || !contenido || !comisionId) {
    return NextResponse.json({ message: "Faltan datos" }, {status: 400});
  }

  try {
    const post = await db.posteo.create({
      data:{
        titulo,
        contenido,
        comisionId: Number(comisionId),
        usuarioId: parseInt(session.user.id),
      },
    });

    return NextResponse.json(post, {status:201});
  } catch (error) {
    return NextResponse.json({message: "Error al crear post"}, {status:500});
  }
}