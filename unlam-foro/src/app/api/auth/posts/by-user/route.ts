import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const userId = parseInt(session.user.id);

    const posteos = await db.posteo.findMany({
      where: {
        usuarioId: userId,
      },
      include: {
        usuario: {
          select: {
            name: true,
          },
        },
        comision: {
          select: {
            codigo: true,
            profes: true,
            materia: {
              select: {
                name: true,
                codigo: true,
              },
            },
          },
        },
        votos: {
          select: {
            value: true,
            id: true,
          },
        },
      },
      orderBy: {
        fecha: "desc",
      },
    });

    return NextResponse.json({ posteos });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
