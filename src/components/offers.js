const designItems = [
  { title: 'web|app designs', number: '01', leftOffset: 20 },
  { title: 'prototype', number: '02', leftOffset: 10 },
  { title: 'wireframe', number: '03', leftOffset: 10 },
  { title: 'user research', number: '04', leftOffset: 16 },
  { title: 'Design system', number: '05', leftOffset: 16 },
  { title: 'Digital designs', number: '06', leftOffset: 20 },
];

export default function Offer() {
  return (
    <div className="lg:p-10 w-screen">
      <div className="text-black marcellus-heading text-center mt-6 flex justify-center items-center">
        <span className="bg-black h-0.5 w-5 mr-1"></span> What i Offer{" "}
        <span className="bg-black h-0.5 w-5 ml-1"></span>
      </div>
      <div className="h-auto py-5 bg-[#fff] flex justify-center items-center text-center">
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
