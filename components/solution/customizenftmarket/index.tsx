import React, { useState } from "react";
import Applyinfo from "../../home/allinoneintro/applyinfo";
import Modal from "react-modal";

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
              src={"asset/img/customizenftmarket.png"}
              className={"w-full object-contain"}
            />
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className="mb-5 text-white hidden md:flex text-[14px] md:text-[20px] leading-[1.2] font-semibold">
            Customized NFT Marketplace
          </div>
          <div className="font-notoSansKR font-normal text-[12px] md:text-[18px] leading-[1.5] text-white">
            <p>NFT Marketplace가 필요하신가요?</p>
            <br />
            <p>우리는 고객의 요청에 딱 맞는 Marketplace를 제작합니다.</p>
            <p>필요한 기능, 원하는 디자인만 고르시면 끝!</p>
            <br />
            <p>
              이제 당신의 브랜드에 딱 맞는, 맞춤형 NFT Marketplace를 만나보세요.
            </p>
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
  );
};

export default Index;
