import Image from "next/image";
import Link from "next/link";
import Count from "./aboutCount";

const software = ["Figma", "Adobe xd", "Framer", "Trello", "Miro", "Whimsical"];

const skill = [
  "Website & mobile designs",
  "User Research",
  "Wire-framing",
  "Prototypes",
  "Design system",
  "Digital marketer",
  "Creative designs",
];

const education = [
  {
    title: "Digital Marketing",
    description: "digital marketing skill institute",
  },
  {
    title: "Business Administration MSC",
    description: "Bingham University",
  },
  {
    title: "Business Administration BSC",
    description: "University of Abuja",
  },
  {
    title: "UI/UX Design",
    description: "Ovalay Academy",
  },
];

const experience = [
  {
    title: "Ui designer",
    description: "Galpin Suite",
  },
  {
    title: "Ui/Ux designer",
    description: "Garden Academy",
  },
  {
    title: "Ui/Ux designer",
    description: "Corpchat (contract)",
  },
  {
    title: "Ui/Ux designer",
    description: "Wavex cab (contract)",
  },
];

const contact = [
  {
    title: "charlesdorcas01@gmail.com",
    imageUrl: "/blackEV.png",
    link: "mailto:charlesdorcas01@gmail.com",
  },
  {
    title: "www.behance.net/charlesdorcas",
    imageUrl: "/blackBE.png",
    link: "www.behance.net/charlesdorcas",
  },
  {
    title: "www.linkedin.com/in/dorcas-charles",
    imageUrl: "/blackIN.png",
    link: "www.linkedin.com/in/dorcas-charles",
  },
  {
    title: "www.dribble.com/charlesdorcas01",
    imageUrl: "/blackDR.png",
    link: "www.dribble.com/charlesdorcas01",
  },
];

export default function About() {
  return (
    <div className="w-screen min-h-screen bg-[#f3efef] space-y-28 flex flex-col justify-center items-center text-center pb-28">
      <div className="text-black uppercase text-center lg:mt-32 mt-40 flex justify-center items-center">
        <span className="bg-black h-0.5 w-5 mr-1"></span> About Me{" "}
        <span className="bg-black h-0.5 w-5 ml-1"></span>
      </div>
      <div className="h-auto lg:px-36 p-10 flex justify-center items-center">
        <div className="grid lg:grid-cols-4 gap-28">
          <div className="col-auto">
            <Image
              src="/whiteBG.png"
              alt="Dorcas Charles"
              width={840}
              height={522.26}
              priority
            />
            <h2 className="text-[#ECC3AD] text-left uppercase mt-9 text-xl first-letter:text-2xl">
              Hi there!
            </h2>
            <p className="text-left mt-2 text-xs">
              I’m Dorcas Charles, a ui/ux designer and a digital Marketer
              currently based in England. Turning wire frames to interactive
              prototype, i have two years plus of experience. Specializing on
              visual appealing designs and interactions to satisfy the users
              experience.
            </p>
          </div>
          <div className="col-auto text-left mx-[25px]">
            <h3 className="uppercase first-letter:text-xl mb-5">Software</h3>
            <div>
              {software.map((software, index) => (
                <p
                  key={index}
                  className={index !== 0 ? "mt-2 text-[16px]" : "text-[16px]"}
                >
                  {software}
                </p>
              ))}
            </div>

            <h3 className="uppercase first-letter:text-xl mb-5 mt-24">
              Experience
            </h3>
            <div>
              {experience.map((software, index) => (
                <div key={index} className={index !== 0 ? "mt-2" : ""}>
                  <p className="text-[16px]">{software.title}</p>
                  <span className="text-xs text-gray-600">
                    {software.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-auto text-left mx-[25px]">
            <h3 className="first-letter:text-xl uppercase mb-5">Skills</h3>
            <div>
              {skill.map((software, index) => (
                <p
                  key={index}
                  className={index !== 0 ? "mt-2 text-[16px]" : " text-[16px]"}
                >
                  {software}
                </p>
              ))}
            </div>

            <h3 className="uppercase first-letter:text-xl mb-5 mt-10">
              Contact
            </h3>
            <div>
              {contact.map((software, index) => (
                <Link
                  target="_blank"
                  href={software.link}
                  key={index}
                  className={
                    index !== 0
                      ? "mt-2 flex items-center whitespace-nowrap space-x-2"
                      : "flex items-center whitespace-nowrap space-x-2"
                  }
                >
                  <Image
                    src={software.imageUrl}
                    alt="Dorcas Charles"
                    className="w-5 h-5"
                    width={22.79}
                    height={25.55}
                    priority
                  />
                  <span className="text-sm">{software.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-auto text-left justify-self-center">
            <h3 className="uppercase first-letter:text-xl mb-5">Education</h3>
            <div>
              {education.map((software, index) => (
                <div key={index} className={index !== 0 ? "mt-2" : ""}>
                  <p className="text-[16px]">{software.title}</p>
                  <span className="text-xs text-gray-600">
                    {software.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Count />
    </div>
  );
}
