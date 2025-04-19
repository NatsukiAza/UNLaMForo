import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params : { id: string }}){
  const { id }  = params;
  const idNum = parseInt(id, 10);
  if (isNaN(idNum)) return NextResponse.json({ message: "ID invalido" }, { status: 400});


try{
  const posts = await db.posteo.findMany({
    where: { comisionId: idNum },
    include: {
      usuario: true,
      votos: true,
    },
    orderBy: {fecha: "desc"},
  });
  return NextResponse.json(posts);
} catch (error) {
  console.error("Error fetching posts by comision:", error); // Loguea el error en el servidor
  return NextResponse.json(
      { message: "Error interno del servidor al buscar posteos" },
      { status: 500 }
  );
}
}