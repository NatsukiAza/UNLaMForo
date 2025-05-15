"use client";

export default function FilterButton() {
  const handler = () => {
    const sliderOptions = document.getElementById("filter");
    const sliderBg = document.getElementById("filterfondo");
    sliderOptions?.classList.toggle("ml-0!");
    sliderBg?.classList.toggle("bg-[#0005]!");
  };
  return (
    <button
      onClick={handler}
      className="cursor-pointer material-icons px-3 py-2 trans hover:bg-[rgba(0,0,0,0.1)] md:hidden!"
    >
      menu
    </button>
  );
}
