import React from "react";

interface Props {
  scrollIndex: number;
}

const Index = ({ scrollIndex }: Props) => {
  return (
    <div
      className={
        "bg-[#1A1A1A] fixed top-0 left-0 w-auto right-0 h-[70px] md:h-[100px] z-30"
      }
    >
      <div className="w-full h-full flex justify-center">
        <div className="max-w-[1280px] flex bg-[#1A1A1A] w-full h-full">
          <div className="mx-5 flex justify-between items-center w-full h-full">
            <div>
              <img
                src={"asset/img/logo.png"}
                className={"w-full h-[47px]"}
              />
            </div>
            <div className={"lg:flex hidden"}>
              <div className={"flex items-center mr-[156px]"}>
                <div
                  className={
                    "text-[white] font-normal mr-[32px] cursor-pointer"
                  }
                  onClick={() => {
                    const nav = document?.getElementById("allinoneintro");
                    nav?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About
                </div>
                <div
                  className={
                    "text-[white] font-normal mr-[32px] cursor-pointer"
                  }
                  onClick={() => {
                    const nav = document?.getElementById("solution");
                    nav?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {/*<a href={"#solution"}>Solution</a>*/}Solution
                </div>
                <div
                  className={
                    "text-[white] font-normal mr-[32px] cursor-pointer"
                  }
                  onClick={() => {
                    const nav = document?.getElementById("creator");
                    nav?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Creator
                </div>
                <div
                  className={
                    "text-[white] font-normal mr-[32px] cursor-pointer"
                  }
                  onClick={() => {
                    const nav = document?.getElementById("careers");
                    nav?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Careers
                </div>
                <div className={"text-[white] font-normal"}>Marketplace</div>
              </div>
              <select
                id="countries"
                className="cursor-pointer bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#1A1A1A] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>KO</option>
                {/*<option value="KO">KO</option>*/}
                <option value="US">US</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
