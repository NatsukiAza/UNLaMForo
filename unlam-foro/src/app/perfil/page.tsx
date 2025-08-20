import Header from "../components/Header";
import PerfilComponent from "../components/Perfil";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function Perfil() {
  const session = auth();
  if (!session) {
    redirect("/");
  }

  return (
    <section>
      <Header />
      <PerfilComponent />
    </section>
  );
}
