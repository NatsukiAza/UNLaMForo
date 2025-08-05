import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "No se ha proporcionado un email" },
        { status: 400 }
      );
    }

    // Verificar que las variables de entorno estén configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "Configuración de email no disponible" },
        { status: 500 }
      );
    }

    // Buscar el usuario
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Por seguridad, no revelamos si el email existe o no
      return NextResponse.json(
        { message: "Si el email existe, se enviará un correo con las instrucciones" },
        { status: 200 }
      );
    }

    // Generar token único
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hora

    // Guardar el token en la base de datos
    await db.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
        resetTokenCreatedAt: new Date(),
      },
    });

    // Verificar que NEXTAUTH_URL esté configurado
    if (!process.env.NEXTAUTH_URL) {
      return NextResponse.json(
        { error: "Configuración de URL no disponible" },
        { status: 500 }
      );
    }

    // Crear el enlace de reset
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

    // Configurar el transporter de email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Enviar el email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Recuperación de contraseña - Foro Opiniones",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #009674;">Recuperación de contraseña</h2>
          <p>Hola ${user.name},</p>
          <p>Has solicitado restablecer tu contraseña en Foro Opiniones.</p>
          <p>Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
          <a href="${resetUrl}" style="display: inline-block; background-color: #009674; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 20px 0;">
            Restablecer contraseña
          </a>
          <p>Este enlace expirará en 1 hora.</p>
          <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
          <p>Saludos,<br>Equipo UNLaM Foro</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Si el email existe, se enviará un correo con las instrucciones" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 