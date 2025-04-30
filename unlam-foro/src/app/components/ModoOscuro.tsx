"use client";

export default function ModoOscuro() {
  const handleButton = () => {
    const body = document.querySelector("body");
    const cont = document.querySelectorAll(".bgcont");
    body?.classList.toggle("text-[#fff]!");
    body?.classList.toggle("bg-[#000]!");
    cont.forEach((c) => c.classList.toggle("bg-[#eeeeee28]!"));
  };
  return (
    <button onClick={handleButton}>
      <span
        className="material-icons px-3 py-2 cursor-pointer trans hover:bg-[rgba(0,0,0,0.1)]"
        aria-label="modo oscuro"
      >
        brightness_4
      </span>
    </button>
  );
}
