import Image from "next/image";
export default function Header() {
  return (
    <header>
      <section className="flex justify-between px-4 py-1 items-center">
        <div className="flex my-[5px] items-center w-50 justify-between">
          <Image
            src="/logo-unlam-34.png"
            alt="UNLaM"
            width="110"
            height="100"
          ></Image>
        </div>
        <div className="flex">
          <div>
            <h1></h1>
            <div>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
          <Image
            className="overflow-hidden rounded-full"
            src="/foto_perfil.jpg"
            alt="Usuario"
            width="40"
            height="50"
          ></Image>
        </div>
      </section>
      <section className="bg-[#009674] flex justify-between px-1.5">
        <div>
          <span
            className="material-icons px-3 py-2 cursor-pointer trans hover:bg-[rgba(0,0,0,0.1)]"
            aria-hidden="true"
          >
            home
          </span>
          <a href=""></a>
          <a href=""></a>
        </div>
        <button>
          <span
            className="material-icons px-3 py-2 cursor-pointer trans hover:bg-[rgba(0,0,0,0.1)]"
            aria-hidden="true"
          >
            brightness_4
          </span>
        </button>
      </section>
    </header>
  );
}
