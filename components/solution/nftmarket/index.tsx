import React from "react";

const Index = () => {
  return (
    <div className="h-full mx-5 flex justify-center">
      <div className="w-full h-full max-w-[750px] lg:max-w-[970px] flex flex-col justify-start md:justify-between items-center md:flex-row ">
        <div className={"w-[100px] md:w-[155px] h-[100px] md:h-[155px] my-[10px] flex flex-col justify-center"}>
          <div className={"flex justify-center"}>
            <img
              src={"asset/img/soon.png"}
              className={"w-full object-contain"}
            />
          </div>
          <div className={"flex justify-center"}>
            <img
              src={"asset/img/soongraph.png"}
              className={"w-full object-contain"}
            />
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className="mb-5 text-white hidden md:flex text-[14px] md:text-[20px] leading-[1.2] font-semibold">
            NFT Marketplace
          </div>
          <div className="font-notoSansKR font-normal text-[12px] md:text-[18px] leading-[1.5] text-white">
            <p>NFT 거래의 새로운 기준.</p>
            <p>BLOCK S 거래소에서 당신의 NFT를 마음껏 거래하세요.</p>
            <p>
              최저 거래 수수료(1%)와 다양한 판매 방식.{" "}
              <span className="inline-flex whitespace-nowrap">
                게다가 판매 등록은 무료!
              </span>
            </p>
            <br />
            <p>이제 쉽고 간편하게, 거기다 강력하기까지한!</p>
            <p>BLOCK S 거래소를 경험해보세요. (2022년 6월 출시 예정)</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
