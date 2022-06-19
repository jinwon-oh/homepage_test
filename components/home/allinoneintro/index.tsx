import React, { useState } from "react";
import Modal from "react-modal";
import Applyinfo from "./applyinfo";
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
    overlay: { zIndex: 1000 },
  },
};

const Index = () => {
  const [contentModal, setContentModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  function afterOpenModal() {}

  const closeModal = () => {
    setContentModal(false);
  };
  const closeCompleteModal = () => {
    setContentModal(false);
    setModalStep(1);
  };

  return (
    <div className="w-full h-full mx-5">
      <div className="relative w-full h-full">
        <div className="absolute left-0 bottom-0 block md:w-3/5 max-w-xl items-end">
          <img
            src={"asset/img/portrait.png"}
            className={"w-full object-contain"}
          />
        </div>
        <div className="absolute right-0 w-full md:w-auto h-full flex justify-end bg-white bg-opacity-95">
          <div className="md:ml-2 md:mr-5 xl:mr-24 w-full h-[calc(100%-100px)] mt-[100px] flex flex-col justify-center items-center md:items-start text-center md:text-left ">
            <div className="text-[40px] md:text-[60px] leading-[1.32] whitespace-nowrap">
              <p className="font-bold">당신을 위한</p>
              <p className="font-medium">ALL-IN-ONE</p>
              <p className="font-medium">NFT SOLUTION</p>
            </div>
            <div className="mt-5 mb-10 md:mt-0 text-[24px] md:text-[30px] md:leading-[1.92]">
              <p className="font-notoSansKR">
                NFT 민팅부터{" "}
                <span className="inline-flex whitespace-nowrap">
                  P2P 플랫폼까지
                </span>{" "}
                <span className="inline-flex whitespace-nowrap">한 번에</span>
              </p>
            </div>
            <div
              className="w-[220px] h-[61px] bg-black flex justify-center items-center cursor-pointer"
              onClick={() => setContentModal(true)}
            >
              <p className="text-center font-notoSansKR text-white text-[24px] font-bold">
                Contact Us
                <span className={"inline-flex ml-[24px]"}>
                  <img
                    src="asset/img/rightArrow.png"
                    className="h-[16px] object-contain"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>

        {modalStep === 1 && (
          <Modal
            isOpen={contentModal}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <Applyinfo setModalStep={setModalStep} />
          </Modal>
        )}
        {modalStep === 2 && (
          <Modal
            isOpen={contentModal}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeCompleteModal}
            style={customCompleteStyles}
            contentLabel="Example Modal"
          >
            <Complete
              setModalStep={setModalStep}
              setContentModal={setContentModal}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Index;
