import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if(!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ message: "No autorizado" }, { status: 403 });
  }

  const { name, codigo, anio } = await req.json();

  if (!name || !codigo) {
    return NextResponse.json({ message: "Faltan Campos" }, { status: 400 });
  }

  try {
    
    const newMateria = await db.materia.create({
      data: {
        codigo,
        name,
        anio,
      },
    });

    return NextResponse.json(newMateria, { status: 201});
  } catch (error) {
    console.error(error); 
    return NextResponse.json({ message: "Error interno del servidor al crear la materia.", }, { status: 500 });
}
}