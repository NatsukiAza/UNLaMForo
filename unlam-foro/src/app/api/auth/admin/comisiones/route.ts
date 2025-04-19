import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const session = await getServerSession(authOptions);

  if(!session || session.user.role !== "ADMIN"){
    return NextResponse.json({ message: "No autorizado" }, {status:403});
  }

  const { materiaId, codigo, profes } = await req.json();

  if (!materiaId || !codigo) {
    console.log(materiaId);
    console.log(codigo);
    return NextResponse.json({ message: "Datos incompletos "}, { status: 400});
  }

  try {
    console.log(codigo);
    console.log(profes);
    console.log(materiaId);
    const comision = await db.comision.create({
      data: {
        codigo,
        profes,
        materiaId,
      },
    });

    return NextResponse.json(comision, {status: 201});
  }catch (error){
    console.log(error);
    return NextResponse.json({message: "Error al crar comision"}, {status: 500})
  }
}