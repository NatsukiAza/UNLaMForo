import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request){
  const session = await getServerSession(authOptions);
  if (!session){
    return NextResponse.json({message: "No autenticado" }, {status: 401});
  }

  const { postId, value } = await req.json();
  const userId = parseInt(session.user.id);

  console.log("POSTID: ", postId);
  console.log("valor: ", value);

  if(![1, -1].includes(value)){
    return NextResponse.json({ message: "Valor de voto invalido"}, {status: 400});
  }

  try {
    const existingVote = await db.vote.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    if (existingVote) {
      if(existingVote.value === value) {
        await db.vote.delete({
          where: {
            userId_postId: {
              userId,
              postId,
            },
          },
        });
      } else {
        await db.vote.update({
          where: {
            userId_postId: {
              userId,
              postId,
            },
          },
          data: {value},
        });
      }
    } else {
      await db.vote.create({
        data: {
          userId,
          postId,
          value,
        },
      });
    }

    return NextResponse.json({ message: "Voto procesado correctamente" });
  }catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error al votar" }, {status: 500});
} 
}