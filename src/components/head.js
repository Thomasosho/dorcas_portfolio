export default function Head() {
  return (
    <div className="w-screen min-h-screen bg-[url('/bg.png')] bg-cover bg-center h-screen space-y-20 mt-16 flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        DORCAS CHARLES
      </h1>
      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        UI/UX DESIGNER || Digital marketer
      </p>
      <button
        onClick={() => {
          const footerSection = document.getElementById("footer");
          if (footerSection) {
            footerSection.scrollIntoView({ behavior: "smooth" });
          } else {
            return;
          }
        }}
        className="bg-[#B464A3] capitalize text-white px-4 py-2 rounded-[8px] hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-700 mt-4"
      >
        Get in touch
      </button>
    </div>
  );
}
