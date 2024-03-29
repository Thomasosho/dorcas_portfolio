import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const projects = [
  {
    title: "Corpchat",
    description:
      "Corpchat is a chat and conferencing platform, suitable for business meetings, educational purpose, organizations and any group. It is user friendly and cost effective, thereby creating a great user experience.",
    imageUrl: "/CorpChat.png",
    link: "https://www.behance.net/gallery/187839615/Chat-and-conferencing",
  },
  {
    title: "Crystalhome",
    description:
      "Crystalhome is a multipurpose app built to support individuals and households with different essential service needs. It consists of services like cleaning, plumbing, laundry, transporttation and medics.",
    imageUrl: "/crystalHome.png",
    link: "https://www.behance.net/gallery/146523405/All-in-one-App",
  },
  {
    title: "E-fashion",
    description:
      "E-fashion is an e-commerce website that specializes in Trendy and stylish wears, it’s a deal breaker for fashion enthusiast. All outfits are of good quality, they have special offers like free delivery and discounts.",
    imageUrl: "/eFashion.png",
    link: "https://www.behance.net/gallery/146769791/E-commerce-Fashion",
  },
  {
    title: "Balancesport fitness",
    description:
      "Balance-sport fitness is an online platform designed to aid a healthy lifestyle. Our health is important, oral intakes plays a huge role to how our body evolves. This application provides online fitness class, consultation with a health practitioner, each user gets assigned a personal doctor that gives and observes their diet plan.",
    imageUrl: "/fitness.png",
    link: "https://www.behance.net/gallery/146189089/Balancespot-fitness-app",
  },
];

export default function Portfolio() {

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
    <div className="lg:p-10 w-screen">
      <div className="text-black marcellus-heading text-[32px] text-center my-14 flex justify-center items-center">
        <span className="bg-black h-0.5 w-5 mr-1"></span> Portfolio{" "}
        <span className="bg-black h-0.5 w-5 ml-1"></span>
      </div>
      <div className="h-auto lg:px-36 p-10 mt-10 bg-[#fff] flex justify-center items-center">
        <div className="grid lg:grid-cols-2 lg:gap-28 gap-2">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="col-auto gap-4 self-center reveal fade-bottom">
                <h3 className="marcellus-heading text-[32px]">{project.title}</h3>
                <p className="text-[18px]">{project.description}</p>
                <button 
                // onClick={() => router.push('/about')} 
                onClick={() => window.location.href = project.link}
                className="bg-[#B464A3] text-white px-4 py-2 rounded-[8px] focus:outline-none focus:ring mt-5">
                  View Case Study
                </button>
                {/* <Link
                  target="_blank"
                  href={project.link}
                  className="flex items-center mt-10 underline"
                >
                  View Case study
                  <Image
                    src="/arrow.png"
                    alt="Dorcas Charles"
                    className="w-[56] h-3"
                    width={30}
                    height={10}
                    priority
                  />
                </Link> */}
              </div>
              <div className="col-auto reveal fade-bottom">
                <Image
                  src={project.imageUrl}
                  alt="Dorcas Charles"
                  width={840}
                  height={522.26}
                  priority
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
