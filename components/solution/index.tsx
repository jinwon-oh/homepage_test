import React, { useState } from "react";
import Applyjob from "../applyjob/designer";
import Frontdeveloper from "../applyjob/frontdeveloper";
import Nftmarket from "./nftmarket";
import Customizenftmarket from "./customizenftmarket";
import Nftmintingsolution from "./nftmintingsolution";
import BlockChainConsulting from "./blockchainconsulting";

const menuList = [
  {
    title1: "NFT",
    title2: "MARKETPLACE",
  },
  {
    title1: "CUSTOMIZED",
    title2: "NFT MARKETPLACE",
  },
  {
    title1: "NFT",
    title2: "MINTING SOLUTION",
  },
  {
    title1: "BLOCKCHAIN",
    title2: "CONSULTING",
  },
];
const menuRender = (param: number) => {
  switch (param) {
    case 1:
      return <Nftmarket />;
    case 2:
      return <Customizenftmarket />;
    case 3:
      return <Nftmintingsolution />;
    case 4:
      return <BlockChainConsulting />;
    default:
      return "";
  }
};
const Index = () => {
  const [menuNum, setMenuNum] = useState<number>(1);

  const menuClick = (idx: number) => {
    setMenuNum(idx + 1);
  };

  return (
    <div className="w-full h-full mx-5 flex flex-col">
      <div className="h-1/5 flex flex-col justify-end">
        <div className="font-bold text-[26px] md:text-[40px] md:leading-[1.92] text-white flex justify-center items-center">
          Solution
        </div>
        <div className="font-normal text-[14px] md:text-[20px] md:leading-[1.92] text-[#C4C4C4] text-center flex justify-center">
          NFT 민팅, 커뮤니티, P2P 플랫폼까지 NFT에 필요한 모든 것을 실현해
          드립니다.
        </div>
      </div>
      <div className="w-full h-1/5 grid grid-cols-2 justify-items-center lg:flex lg:justify-between content-center items-center ">
        {menuList.map((menu, idx: number) => (
          <div className="flex items-center" key={idx}>
            <div
              className={"flex flex-col cursor-pointer"}
              onClick={() => menuClick(idx)}
            >
              <div
                className={
                  "font-semibold text-[16px] md:text-[24px] leading-[1.2] text-center text-white whitespace-pre-wrap flex justify-center items-center"
                }
              >
                {menu.title1}
              </div>
              <div
                className={
                  "font-semibold text-[16px] md:text-[24px] leading-[1.2] text-center text-white whitespace-pre-wrap flex justify-center items-center"
                }
              >
                {menu.title2}
              </div>
              <hr
                className={`${
                  menuNum === idx + 1
                    ? "border-[#3BBA9C]"
                    : "border-transparent"
                } border-t-[5px] border-solid`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-3/5">{menuRender(menuNum)}</div>
    </div>
  );
};

export default Index;
