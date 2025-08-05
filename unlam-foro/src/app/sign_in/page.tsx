"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";
import PasswordInput from "../components/PasswordInput";

const roboto = Roboto({
  weight: ["100", "200", "400", "600", "800", "900"],
  subsets: ["latin"],
});

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div
      className={`flex flex-col h-screen  bg-[#009674] text-white ${roboto.className}`}
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
            Opiniones de Alumnos sobre Comisiones
          </h1>
          <h3 className="text-2xl lg:text-3xl font-thin w-90 lg:w-120 xl:w-150 tracking-wider">
            Plataforma para alumnos de opiniones sobre comisiones que ofrecen en
            la Universidad Nacional de La Matanza
          </h3>
        </div>
        <div className="p-7 bg-[rgba(0,0,0,0.08)] rounded-lg max-md:w-full">
          <h2 className="text-3xl mb-5 text-center font-thin tracking-wider">
            ¡Buenos días!
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <label>Correo:</label>
              <input
                type="email"
                className="trans border-1 w-full md:w-75 lg:w-100 p-2 border-[rgba(255,255,255,0.5)] bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.2)] rounded-sm backdrop-blur-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Contraseña:</label>
              <PasswordInput
                value={password}
                onChangeAction={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-300 text-sm">{error}</p>}

            <button
              type="submit"
              className="bg-white text-[#009674] rounded-sm p-2 cursor-pointer"
            >
              Ingresar
            </button>
          </form>

          <div className="flex flex-col gap-3 mt-5 pt-5 border-t-1 border-[rgba(255,255,255,0.3)]">
            <Link
              href="/forgot-password"
              className="text-center text-sm hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <Link
              href="../sign_up"
              className="bg-[rgba(255,255,255,0.2)] rounded-sm p-2 w-full text-center"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
