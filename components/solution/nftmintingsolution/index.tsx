import React, { useState } from "react";
import Modal from "react-modal";
import Applyinfo from "../../home/allinoneintro/applyinfo";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "",
    bottom: "",
    marginRight: "",
    width: 640,
    height: 700,
    transform: "translate(-50%, -50%)",
    padding: 0,
    overflow: "auto",
  },
};
const Index = () => {
  const [contentModal, setContentModal] = useState(false);
  const [modalStep, setModalStep] = useState<number>(1);
  function afterOpenModal() {}

  function closeModal() {
    setContentModal(false);
  }
  return (
    <div className="h-full mx-5 flex justify-center">
      <div className="w-full h-full max-w-[750px] lg:max-w-[970px] flex flex-col justify-start md:justify-between items-center md:flex-row ">
        <div
          className={
            "w-[100px] md:w-[155px] h-[100px] md:h-[155px] my-[10px] flex flex-col"
          }
        >
          <div className={"flex justify-center"}>
            <img
              src={"asset/img/nftmintingsolution.png"}
              className={"w-full object-contain"}
            />
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className="mb-5 text-white hidden md:flex text-[14px] md:text-[20px] leading-[1.2] font-semibold">
            NFT Minting Solution
          </div>
          <div className="font-notoSansKR font-normal text-[12px] md:text-[18px] leading-[1.5] text-white">
            <p>“NFT. 요즘 난리던데, 우리 회사도 한 번 해보고 싶은데...”</p>

            <p> “김 대리. NFT 마케팅이 유행이라는데 우리도 한 번 해보지.”</p>
            <br />
            <p>누구나 NFT를 만들 수 있습니다.</p>

            <p>하지만 아무에게나 우리 NFT를 맡길 수는 없겠죠?</p>
            <br />
            <p>기획부터 실제 발행까지. NFT 민팅의 모든 과정을 함께 합니다.</p>
            <p>믿을 수 있는 기업, BLOCK S와 상의하세요!</p>
            <br />
          </div>
          <div
            className={
              "bg-[#3BBA9C] w-[156px] flex items-center justify-center cursor-pointer"
            }
            onClick={() => setContentModal(true)}
          >
            <span className="text-white text-[12px] md:text-[16px] leading-[2] font-semibold mx-5">
              Contact Us
            </span>
            <div className={""}>
              <img src={"asset/img/rightArrow.png"} className={"h-[12px]"} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={contentModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Applyinfo setModalStep={setModalStep} />
      </Modal>
    </div>
    // <div className={"w-[958px] h-[335px] mt-[112px] flex "}>
    //   <div className={"pl-[28px]"}>
    //     <div className={"pt-[86px] flex justify-center"}>
    //       <img
    //         src={"asset/img/nftmintingsolution.png"}
    //         className={"w-[152px] h-[152px]"}
    //       />
    //     </div>
    //   </div>
    //   <div className={"pl-[256px]"}>
    //     <div className={"text-white text-[20px] leading-[24px] font-semibold"}>
    //       NFT Minting Solution
    //     </div>
    //     <div
    //       className={
    //         "font-notoSansKR font-normal text-[18px] leading-[27px] text-white pt-[24px]"
    //       }
    //     >
    //       <p>“NFT. 요즘 난리던데, 우리 회사도 한 번 해보고 싶은데...”</p>

    //       <p> “김 대리. NFT 마케팅이 유행이라는데 우리도 한 번 해보지.”</p>
    //       <br />
    //       <p>누구나 NFT를 만들 수 있습니다.</p>

    //       <p>하지만 아무에게나 우리 NFT를 맡길 수는 없겠죠?</p>
    //       <br />
    //       <p>기획부터 실제 발행까지. NFT 민팅의 모든 과정을 함께 하는</p>
    //       <p> BLOCK S와 상의하세요!</p>
    //     </div>
    //     <div
    //       className={
    //         "mt-[24px] bg-[#3BBA9C] w-[156px] h-[43px] flex items-center cursor-pointer"
    //       }
    //       onClick={() => setContentModal(true)}
    //     >
    //       <span
    //         className={"text-white text-[16px] ml-[21.5px] font-bold mt-[4px]"}
    //       >
    //         Contact Us
    //       </span>
    //       <div className={"ml-[16px]"}>
    //         <img
    //           src={"asset/img/rightArrow.png"}
    //           className={"w-[6px] h-[12px]"}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <Modal
    //     isOpen={contentModal}
    //     onAfterOpen={afterOpenModal}
    //     onRequestClose={closeModal}
    //     style={customStyles}
    //     contentLabel="Example Modal"
    //   >
    //     <Applyinfo setModalStep={setModalStep} />
    //   </Modal>
    // </div>
  );
};

export default Index;
