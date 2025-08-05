import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) { 
  const session = await getServerSession(authOptions);
  const { titulo, contenido, comisionId, anonymousId: bodyAnonymousId } = await req.json();

  let userId = null;
  let anonymousId = null;

  if(session && session.user) {
    userId = session.user.id;
  } else {
    // If no session, use the anonymousId from the request body, or generate a new one
    anonymousId = bodyAnonymousId || uuidv4();
    
    // Check if this anonymousId already posted in this comision
    const existingPost = await db.posteo.findFirst({
      where: {
        comisionId: Number(comisionId),
        anonymousId: anonymousId,
      },
    });
    
    if (existingPost) {
      return NextResponse.json({ message: "Ya has publicado una opinión en esta comisión" }, { status: 403 });
    }
  }

  if(!titulo || !contenido || !comisionId) {
    return NextResponse.json({ message: "Faltan datos" }, {status: 400});
  }

  try {
    const post = await db.posteo.create({
      data:{
        titulo,
        contenido,
        comisionId: Number(comisionId),
        usuarioId: userId ? parseInt(userId) : undefined,
        anonymousId: anonymousId,
      },
    });
    console.log( "ANASHEI " + anonymousId);
    return NextResponse.json(post, {status:201});
  } catch {
    return NextResponse.json({message: "Error al crear post"}, {status:500});
  }
}