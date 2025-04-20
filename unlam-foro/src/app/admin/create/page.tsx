import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import FormNuevaMateria from "./form";

export default async function CreatePageAdmin() {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div>
      <h1>Crear nueva materia</h1>
      <FormNuevaMateria />
    </div>
  );
}
