import { Arapey } from "next/font/google";
import { useEffect } from "react";

const Arap = Arapey({
    weight: ["400"],
    subsets: ["latin"],
  });

const process = [
    {
      title: "01",
      description: "Discover",
    },
    {
      title: "02",
      description: "Define",
    },
    {
      title: "03",
      description: "Ideate",
    },
    {
      title: "04",
      description: "Design",
    },
    {
      title: "05",
      description: "Testing",
    },
  ];

export default function Count() {

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
    <div className="bg-[#4B4B4B] p-10">
      <div className="text-white uppercase text-center flex justify-center items-center">
        <span className="bg-white h-0.5 w-5 mr-1"></span> My design process{" "}
        <span className="bg-white h-0.5 w-5 ml-1"></span>
      </div>
      <div className="grid lg:grid-cols-5 flex gap-28 px-20">
        {process.map((software, index) => (
          <div key={index} className={"mt-2"}>
            <div
              className={`col-auto arape-button text-[#B464A3] text-[100px] reveal fade-bottom ${Arap.style.fontFamily}`}
            >
              {software.title}
            </div>
            <span className="text-xs marcellus-heading text-white text-[20px] reveal fade-bottom">
              {software.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
