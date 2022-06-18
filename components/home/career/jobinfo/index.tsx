import React from "react";

interface Props {
  title: string;
  ApplyJob: () => void;
}

const Index = ({ title, ApplyJob }: Props) => {
  return (
    <div>
      <div
        className={
          "flex flex-col md:flex-row items-center justify-between mx-[10px] "
        }
      >
        <div className="w-full flex md:flex-[2_2_0%] justify-center md:justify-start font-bold text-white text-[20px] md:text-[32px] leading-[1.92]">
          {title}
        </div>
        {/* <div className={"w-full flex flex-1 justify-between items-end"}> */}
        <div className="flex flex-row md:flex-1 justify-center items-center align-middle">
          <img
            src={"asset/img/place.png"}
            className={"w-[20px] md:w-[30px] object-contain"}
          />
          <div
            className={
              "font-bold text-white text-[14px] md:text-[20px] leading-[1.92]"
            }
          >
            판교,대한민국
          </div>
        </div>
        <div
          className={
            "max-w-[74px] h-[32px] bg-[#3BBA9C] flex md:flex-1 justify-center items-center text-white text-[14px] cursor-pointer"
          }
          onClick={ApplyJob}
        >
          <p className="mx-4">Apply</p>
        </div>
        {/* </div> */}
      </div>
      <div className={"mt-[9px]"}>
        <hr className={"bg-[#E5E5E5] w-full"} />
      </div>
    </div>
  );
};

export default Index;
