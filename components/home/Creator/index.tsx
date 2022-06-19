import React, { useState } from "react";
import Modal from "react-modal";
import Applyinfo from "../allinoneintro/applyinfo";
import CreatorApplyInfo from "./creatorApplyInfo";
import Complete from "../../modal/complete";

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
  overlay: { zIndex: 1000 },
};
const customCompleteStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "",
    bottom: "",
    marginRight: "",
    width: 640,
    height: 473,
    transform: "translate(-50%, -50%)",
    padding: 0,
    overflow: "auto",
  },
  overlay: { zIndex: 1000 },
};
const Index = () => {
  const [creatorApplyModal, setCreatorApplyModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  function afterOpenModal() {}

  function closeModal() {
    setCreatorApplyModal(false);
  }
  const closeCompleteModal = () => {
    setCreatorApplyModal(false);
    setModalStep(1);
  };

  return (
    <div className="w-full h-full mx-5 flex flex-col">
      <div className="h-1/5 flex flex-col justify-end">
        <div className="font-bold text-[26px] md:text-[40px] md:leading-[1.92] text-white flex justify-center items-center">
          Creator
        </div>
        <div className="text-[14px] md:text-[20px] md:leading-[1.92] text-[#C4C4C4] text-center flex justify-center">
          당신의 상상력. 이제 BLOCK S와 함께 펼쳐보세요!
        </div>
      </div>
      <div className={"h-2/5 flex justify-center"}>
        <img
          src={"asset/img/lamp.png"}
          className={"w-full h-full object-contain"}
        />
      </div>
      <div className="h-1/5 flex flex-col text-center text-white text-[14px] md:text-[20px] leading-[1.5] font-notoSansKR">
        <p>NFT는 더 이상 꿈이 아닙니다.</p>
        <p>
          자신만의 아이디어를 NFT로 만들어{" "}
          <span className="inline-flex whitespace-nowrap">
            실현하고 싶은 창작자들에게
          </span>
        </p>
        <p>BLOCK S의 문은 항상 열려 있습니다.</p>
      </div>
      <div className={"flex justify-center"}>
        <div
          className={"bg-[#3BBA9C] w-[156px] flex items-center justify-center cursor-pointer"}
          onClick={() => setCreatorApplyModal(true)}
        >
          <span className="text-white text-[12px] md:text-[16px] leading-[2] font-semibold mx-5">
            Apply
          </span>
          <div className={""}>
            <img src={"asset/img/rightArrow.png"} className={"h-[12px] object-contain"} />
          </div>
        </div>
        {/* <div
          className={
            "w-[156px] h-[43px] bg-[#3BBA9C] flex items-center cursor-pointer"
          }
          onClick={() => setCreatorApplyModal(true)}
        >
          <span className={"text-white ml-[43px] font-semibold "}>Apply</span>
          <div className={"ml-[16px]"}>
            <img
              src={"asset/img/rightArrow.png"}
              className={"w-[6px] h-[16px] border-solid"}
            />
          </div>
        </div> */}
      </div>
      {modalStep === 1 && (
        <Modal
          isOpen={creatorApplyModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CreatorApplyInfo setModalStep={setModalStep} />
        </Modal>
      )}
      {modalStep === 2 && (
        <Modal
          isOpen={creatorApplyModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeCompleteModal}
          style={customCompleteStyles}
          contentLabel="Example Modal"
        >
          <Complete
            setModalStep={setModalStep}
            setContentModal={setCreatorApplyModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Index;
