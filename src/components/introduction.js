import { Marcellus } from "next/font/google";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect } from "react";

const Marcell = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Introduction() {
  
  const router = useRouter();

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div className="w-screen h-[auto] p-10 bg-[#595959] space-y-16 flex flex-col justify-center items-center text-center">
      <div className="grid lg:grid-cols-2 gap-1 items-center reveal fade-bottom">
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
          <div className="text-white marcellus-heading mt-6 flex items-center text-[36px] mb-5">
            <span className="bg-white h-0.5 w-5 mr-1"></span> Hi, i’m dorcas{" "}
            <span className="bg-white h-0.5 w-5 ml-1"></span>
          </div>
          <p className={`${Marcell.style.fontFamily} text-[20px]`}>
            I delve into designing due to my long desire in solving design
            related problems, which i encountered as a user of some
            applications.
          </p>
          <p className={`mt-2 normal-case ${Marcell.style.fontFamily} text-[20px]`}>
            With the use of proper research and design process, the inculcated
            problems can be resolved.
          </p>
          <button onClick={() => router.push('/about')} className="bg-[#B464A3] text-white px-4 py-2 rounded-[8px] focus:outline-none focus:ring mt-5">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
