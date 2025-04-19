import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import Header from "@/app/components/Header";
import { authOptions } from "@/lib/auth";
import ComisionClient from "@/app/components/ComisionClient";

type PageParams = {
  params: { id: string };
};

export default async function ComisionPage({ params }: PageParams) {
  const { id } = await params;
  const idNumerico = parseInt(id);

  if (isNaN(idNumerico)) return notFound();

  const [comision, session] = await Promise.all([
    db.comision.findUnique({
      where: { id: idNumerico },
      include: {
        posteos: {
          include: {
            usuario: { select: { name: true } },
            votos: true,
          },
        },
      },
    }),
    getServerSession(authOptions),
  ]);

  if (!comision) return notFound();

  const isLogued =
    !!session &&
    (session.user.role === "ADMIN" || session.user.role === "USER");

  return (
    <section>
      <Header></Header>
      <ComisionClient
        comisionId={idNumerico}
        initialPosts={comision.posteos}
        isLogued={isLogued}
        profes={comision.profes}
        codigo={comision.codigo}
      />
    </section>
  );
}
