export default function Offer() {
  return (
    <div className="lg:p-10 w-screen">
      <div className="text-black uppercase text-center mt-6 flex justify-center items-center">
        <span className="bg-black h-0.5 w-5 mr-1"></span> What i Offer{" "}
        <span className="bg-black h-0.5 w-5 ml-1"></span>
      </div>
      <div className="h-auto py-5 bg-[#fff] flex justify-center items-center text-center">
        <div className="grid lg:grid-cols-6 lg:gap-20 gap-5">
          <div className="col-auto relative">
            <div className="text-[#000] uppercase absolute top-1/2 transform -translate-y-1/2 -left-20">
              web|app designs
            </div>
            <div className="text-[#B464A34D] text-7xl">01</div>
          </div>
          <div className="col-auto relative">
            <div className="text-[#000] uppercase absolute top-1/2 transform -translate-y-1/2 -left-10">
              prototype
            </div>
            <div className="text-[#B464A34D] text-7xl">02</div>
          </div>
          <div className="col-auto relative">
            <div className="text-[#000] uppercase absolute top-1/2 transform -translate-y-1/2 -left-10">
              wireframe
            </div>
            <div className="text-[#B464A34D] text-7xl">03</div>
          </div>
          <div className="col-auto relative">
            <div className="text-[#000] uppercase absolute top-1/2 transform -translate-y-1/2 -left-16">
              user research
            </div>
            <div className="text-[#B464A34D] text-7xl">04</div>
          </div>
          <div className="col-auto relative">
            <div className="text-[#000] uppercase absolute top-1/2 transform -translate-y-1/2 -left-16">
              Design system
            </div>
            <div className="text-[#B464A34D] text-7xl">05</div>
          </div>
          <div className="col-auto relative">
            <div className="text-[#000] uppercase absolute top-1/2 transform -translate-y-1/2 -left-20">
              Digital designs
            </div>
            <div className="text-[#B464A34D] text-7xl">06</div>
          </div>
        </div>
      </div>
    </div>
  );
}
