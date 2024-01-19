import { Marcellus } from "next/font/google";
import Image from "next/image";

const Marcell = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Introduction() {
  return (
    <div className="w-screen h-[auto] p-10 bg-[#595959] space-y-16 flex flex-col justify-center items-center text-center">
      <div className="grid lg:grid-cols-2 gap-1 items-center">
        <div className="col-auto lg:p-32 w-auto justify-self-center">
          <Image
            src="/dorcasOne.png"
            alt="Dorcas Charles"
            width={207}
            height={351}
            priority
          />
        </div>
        <div className="col-auto text-left w-auto text-wrap lg:p-32 text-xl text-white">
          <div className="text-white uppercase mt-6 flex items-center text-[36] mb-5">
            <span className="bg-white h-0.5 w-5 mr-1"></span> Hi, i’m dorcas{" "}
            <span className="bg-white h-0.5 w-5 ml-1"></span>
          </div>
          <p className={`${Marcell.style.fontFamily}`}>
            I delve into designing due to my long desire in solving design
            related problems, which i encountered as a user of some
            applications.
          </p>
          <p className={`mt-2 normal-case ${Marcell.style.fontFamily}`}>
            With the use of proper research and design process, the inculcated
            problems can be resolved.
          </p>
          <button className="bg-[#B464A3] text-white px-4 py-2 rounded-[8px] hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-700 mt-5">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
