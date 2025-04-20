"use client";

import { signOut } from "next-auth/react";

export default function CerrarSesion() {
  return <button onClick={() => signOut()}>Cerrar Sesion</button>;
}
