import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params : Promise<{ id: string }>}){
  const { id }  = await params;
  const idNum = parseInt(id, 10);
  if (isNaN(idNum)) return NextResponse.json({ message: "ID invalido" }, { status: 400});

  // Obtener parámetros de paginación
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const skip = (page - 1) * limit;

  try{
    // Consulta optimizada con paginación y selección específica de campos
    const [posteos, totalCount] = await Promise.all([
      db.posteo.findMany({
        where: { comisionId: idNum },
        select: {
          id: true,
          titulo: true,
          contenido: true,
          fecha: true,
          anonymousId: true,
          usuario: { 
            select: { 
              name: true 
            } 
          },
          votos: {
            select: {
              value: true
            }
          }
        },
        orderBy: { fecha: "desc" },
        skip,
        take: limit,
      }),
      db.posteo.count({
        where: { comisionId: idNum }
      })
    ]);

    return NextResponse.json({
      posteos,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching posts by comision:", error);
    return NextResponse.json(
        { message: "Error interno del servidor al buscar posteos" },
        { status: 500 }
    );
  }
}