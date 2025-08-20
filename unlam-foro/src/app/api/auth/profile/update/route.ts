import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import bcrypt from "bcrypt";

interface UpdateUserData {
  name?: string;
  password?: string;
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const { name, password, currentPassword } = await request.json();
    const userId = parseInt(session.user.id);

    // Verificar que el usuario existe
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Si se está cambiando la contraseña, verificar la contraseña actual
    if (password && currentPassword) {
      const isCurrentPasswordCorrect = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isCurrentPasswordCorrect) {
        return NextResponse.json(
          { error: "Contraseña actual incorrecta" },
          { status: 400 }
        );
      }
    }

    // Preparar los datos a actualizar
    const updateData: UpdateUserData = {};
    
    if (name && name !== user.name) {
      // Verificar que el nombre no esté en uso
      const existingUser = await db.user.findUnique({
        where: { name },
      });
      
      if (existingUser && existingUser.id !== userId) {
        return NextResponse.json(
          { error: "El nombre de usuario ya está en uso" },
          { status: 400 }
        );
      }
      
      updateData.name = name;
    }

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Actualizar el usuario
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      message: "Perfil actualizado correctamente",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
