"use client";

import { signOut } from "next-auth/react";

export default function CerrarSesion() {
  return (
    <button className="cursor-pointer" onClick={() => signOut()}>
      Cerrar Sesion
    </button>
  );
}
