"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";
import PasswordInput from "../components/PasswordInput";

const roboto = Roboto({
  weight: ["100", "200", "400", "600", "800", "900"],
  subsets: ["latin"],
});

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    if (!token) {
      setMessage("Token de reset inválido");
      return;
    }

    // Verificar si el token es válido
    const verifyToken = async () => {
      try {
        const res = await fetch("/api/auth/verify-reset-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (res.ok) {
          setIsValidToken(true);
        } else {
          setMessage("El enlace de reset ha expirado o es inválido");
        }
      } catch {
        setMessage("Error al verificar el token");
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          "Contraseña actualizada exitosamente. Redirigiendo al login..."
        );
        setTimeout(() => {
          router.push("/sign_in");
        }, 2000);
      } else {
        setMessage(data.error || "Error al actualizar la contraseña");
      }
    } catch {
      setMessage("Error de conexión. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div
        className={`flex flex-col h-screen bg-[#009674] text-white ${roboto.className}`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-2xl mb-4">Enlace inválido</h1>
            <p className="mb-4">
              El enlace de recuperación de contraseña es inválido.
            </p>
            <Link
              href="/sign_in"
              className="bg-white text-[#009674] px-4 py-2 rounded"
            >
              Volver al login
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            Nueva Contraseña
          </h1>
          <h3 className="text-2xl lg:text-3xl font-thin w-90 lg:w-120 xl:w-150 tracking-wider">
            Ingresa tu nueva contraseña para completar el proceso
          </h3>
        </div>
        <div className="p-7 bg-[rgba(0,0,0,0.08)] rounded-lg max-md:w-full">
          <h2 className="text-3xl mb-5 text-center font-thin tracking-wider">
            Restablecer contraseña
          </h2>
          {!isValidToken ? (
            <div className="text-center">
              <p className="text-red-300">{message}</p>
              <Link
                href="/sign_in"
                className="bg-[rgba(255,255,255,0.2)] rounded-sm p-2 w-full text-center mt-4 inline-block"
              >
                Volver al login
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col">
                <label>Nueva contraseña:</label>
                <PasswordInput
                  value={password}
                  onChangeAction={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={6}
                />
              </div>
              <div className="flex flex-col">
                <label>Confirmar contraseña:</label>
                <PasswordInput
                  value={confirmPassword}
                  onChangeAction={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={6}
                />
              </div>

              {message && (
                <p
                  className={`text-sm ${
                    message.includes("Error") ||
                    message.includes("no coinciden")
                      ? "text-red-300"
                      : "text-green-300"
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
                {isLoading ? "Actualizando..." : "Actualizar contraseña"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className={`flex flex-col h-screen bg-[#009674] text-white ${roboto.className}`}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-2xl mb-4">Cargando...</h1>
            </div>
          </div>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
