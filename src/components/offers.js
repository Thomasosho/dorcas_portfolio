import { useEffect } from "react";

export default function Offer() {

  const designItems = [
    { title: 'web|app designs', number: '01', leftOffset: 16 },
    { title: 'prototype', number: '02', leftOffset: 16 },
    { title: 'wireframe', number: '03', leftOffset: 16 },
    { title: 'user research', number: '04', leftOffset: 16 },
    { title: 'Design system', number: '05', leftOffset: 16 },
    { title: 'Digital designs', number: '06', leftOffset: 16 },
  ];

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
      <div className="text-black marcellus-heading text-center mt-6 flex justify-center items-center">
        <span className="bg-black h-0.5 w-5 mr-1"></span> What i Offer{" "}
        <span className="bg-black h-0.5 w-5 ml-1"></span>
      </div>
      <div className="h-auto py-5 bg-[#fff] flex justify-center items-center text-center reveal fade-right">
        <div className="grid lg:grid-cols-6 lg:gap-20 gap-5">
          {designItems.map((item, index) => (
            <div key={index} className="col-auto relative">
              <div
                className={`text-[#000] text- text-nowrap marcellus-heading absolute top-1/2 transform -translate-y-1/2 -left-${item.leftOffset}`}
              >
                {item.title}
              </div>
              <div className="text-[#B464A34D] arape-button text-[100px]">
                {item.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
