import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json(); 

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    // Ejecutar validaciones en paralelo para mejor rendimiento
    const [existingEmail, existingUsername] = await Promise.all([
      db.user.findUnique({ where: { email } }),
      db.user.findUnique({ where: { name } })
    ]);

    if (existingUsername) {
      return NextResponse.json({ error: "El nombre de usuario ya esta en uso"}, {status: 400});
    } else if(existingEmail){
      return NextResponse.json({ error: "El correo ya esta en uso", status: 400});
    }

    if (!email.includes("@alumno.unlam.edu.ar")){
      return NextResponse.json({ error: "Por medidas de seguridad, solo se permite el registro de usuarios con correo institucional"}, {status: 400});
    }
    // Verificar que no haya ningún usuario con el mismo nombre o correo
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: { name, email, password: hashedPassword, role: "USER",},
    });

    return NextResponse.json({ message: "Usuario registrado con éxito", user: newUser }, {status: 201});
  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error en el servidor"}, {status: 500});
  }
}