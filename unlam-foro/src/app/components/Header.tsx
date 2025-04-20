import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Roboto } from "next/font/google";
import CerrarSesion from "./signOut";
const roboto = Roboto({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
});

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className={`${roboto.className}`}>
      <section className="flex justify-between px-4 py-1 items-center">
        <div className="flex my-[5px] items-center w-50 justify-between">
          <Image
            src="/logo-unlam-34.png"
            alt="UNLaM"
            width="110"
            height="100"
          ></Image>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-right">
              {session?.user.name
                ? `${session.user.name}`
                : "No has iniciado sesion"}
            </h1>
            {session && (
              <div className="flex gap-4 text-[#009674] text-xs font-semibold whitespace-nowrap">
                <a href="">Mi perfil</a>
                <CerrarSesion></CerrarSesion>
              </div>
            )}
          </div>
          <Image
            className="overflow-hidden rounded-full hidden sm:flex"
            src="/foto_perfil.jpg"
            alt="Usuario"
            width="40"
            height="50"
          ></Image>
        </div>
      </section>
      <section className="bg-[#009674] flex justify-between px-1.5 shadow-[0_2px_4px_0_rgba(0,0,0,0.16),0_2px_10px_0_rgba(0,0,0,0.16)]">
        <div>
          <Link href="/">
            <i
              className="material-icons px-3 py-2 cursor-pointer trans hover:bg-[rgba(0,0,0,0.1)]"
              aria-label="inicio"
            >
              home
            </i>
          </Link>
        </div>
        <button>
          <span
            className="material-icons px-3 py-2 cursor-pointer trans hover:bg-[rgba(0,0,0,0.1)]"
            aria-label="modo oscuro"
          >
            brightness_4
          </span>
        </button>
      </section>
    </header>
  );
}
