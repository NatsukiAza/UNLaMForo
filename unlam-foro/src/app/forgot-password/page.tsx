"use client";

import { useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["100", "200", "400", "600", "800", "900"],
  subsets: ["latin"],
});

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          "Se ha enviado un correo con las instrucciones para restablecer tu contraseña."
        );
      } else {
        setMessage(
          data.error || "Error al enviar el correo. Intenta nuevamente."
        );
      }
    } catch {
      setMessage("Error de conexión. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col h-screen bg-[#009674] text-white ${roboto.className}`}
    >
      <header className="bg-[rgba(0,0,0,0.75)] h-20 flex px-4 items-center">
        <div>
          <Image
            src="/logo-unlam-light-40.png"
            alt="UNLaM"
            width="129"
            height="129"
          ></Image>
        </div>
      </header>
      <section className="size-full bg-gradient-to-br from-[#009674] to-[#63cb5f] flex flex-col-reverse md:flex-row justify-center items-center gap-9 max-md:px-5">
        <div className="hidden md:flex flex-col">
          <h1 className="text-5xl/14 lg:text-6xl/17 font-bold w-90 lg:w-120 tracking-wider">
            Recuperar Contraseña
          </h1>
          <h3 className="text-2xl lg:text-3xl font-thin w-90 lg:w-120 xl:w-150 tracking-wider">
            Ingresa tu correo electrónico para recibir instrucciones de
            recuperación
          </h3>
        </div>
        <div className="p-7 bg-[rgba(0,0,0,0.08)] rounded-lg max-md:w-full">
          <h2 className="text-3xl mb-5 text-center font-thin tracking-wider">
            ¿Olvidaste tu contraseña?
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <label>Correo electrónico:</label>
              <input
                type="email"
                className="trans border-1 w-full md:w-75 lg:w-100 p-2 border-[rgba(255,255,255,0.5)] bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.2)] rounded-sm backdrop-blur-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {message && (
              <p
                className={`text-sm ${
                  message.includes("Error") ? "text-red-300" : "text-green-300"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="bg-white text-[#009674] rounded-sm p-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar instrucciones"}
            </button>
          </form>
          <div className="flex mt-5 pt-5 border-t-1 border-[rgba(255,255,255,0.3)]">
            <Link
              href="/sign_in"
              className="bg-[rgba(255,255,255,0.2)] rounded-sm p-2 w-full text-center"
            >
              Volver al login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
