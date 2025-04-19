import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params : Promise<{ id: string }>}){
  const { id }  = await params;
  const idNum = parseInt(id, 10);
  if (isNaN(idNum)) return NextResponse.json({ message: "ID invalido" }, { status: 400});


try{
  const posteos = await db.posteo.findMany({
    where: { comisionId: idNum },
    include: {
      usuario: { select: { name: true} },
      votos: true,
    },
    orderBy: {fecha: "desc"},
  });
  return NextResponse.json(posteos);
} catch (error) {
  console.error("Error fetching posts by comision:", error); // Loguea el error en el servidor
  return NextResponse.json(
      { message: "Error interno del servidor al buscar posteos" },
      { status: 500 }
  );
}
}