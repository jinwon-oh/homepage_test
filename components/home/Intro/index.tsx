import React from "react";

const Index = () => {
  return (
    <div className="w-full h-full mx-5 flex flex-col justify-end items-center bg-[url(/asset/img/bg1.png)] bg-no-repeat bg-center bg-cover">
      <div id="intro-col-1" className="w-full h-1/6 md:h-1/4" />
      <div className="w-full h-5/6 md:h-3/4">
        <div id="intro-col-2" className="w-full h-1/3">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="asset/img/centerlogo.png"
              className="w-20 md:w-28 object-contain"
            />
          </div>
        </div>
        <div id="intro-col-3" className="w-full h-1/3">
          <p className="w-full text-white text-[40px] md:text-[60px] leading-[1.21] font-bold text-center">
            SUPREME BLOCKCHAIN PLATFORM
          </p>
        </div>
        <div id="intro-col-4" className="w-full h-1/3">
          <div
            className="w-full h-full mt-5 flex justify-center items-start cursor-pointer"
            onClick={() => {
              const nav = document?.getElementById("allinoneintro");
              nav?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              className="w-8 object-contain blink"
              src="asset/img/bottomfeature.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
