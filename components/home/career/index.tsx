import React, { Dispatch, SetStateAction, useState } from "react";
import Jobinfo from "./jobinfo";
import Modal from "react-modal";
import Applyjob from "../../applyjob/designer";
import Frontdeveloper from "../../applyjob/frontdeveloper";
import CompleteModal from "../../completemodal";
import Complete from "../../modal/complete";

const customModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "",
    bottom: "",
    marginRight: "",
    width: 640,
    height: 900,
    transform: "translate(-50%, -50%)",
    padding: 0,
    overflow: "auto",
  },
  overlay: { zIndex: 1000 },
};
const customCompleteModal = {
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

const modalTypeRender = (
  param: number,
  setModalIsOpen: Dispatch<SetStateAction<boolean>>,
  setModalStep: Dispatch<SetStateAction<number>>
) => {
  switch (param) {
    case 1:
      return (
        <Applyjob setModalIsOpen={setModalIsOpen} setModalStep={setModalStep} />
      );
    case 2:
      return (
        <Frontdeveloper
          setModalIsOpen={setModalIsOpen}
          setModalStep={setModalStep}
        />
      );
    default:
      return "";
  }
};

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalCompleteOpen, setModalCompleteOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<number>(0);
  const [modalStep, setModalStep] = useState(1);
  const [contentModal, setContentModal] = useState(false);

  const ApplyDesigner = () => {
    setModalIsOpen(true);
    setModalType(1);
  };
  const ApplyFrontend = () => {
    setModalIsOpen(true);
    setModalType(2);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const closeCompleteModal = () => {
    setContentModal(false);
    setModalStep(1);
  };

  return (
    <div className="w-full h-full mx-5 flex flex-col">
      <div className="h-1/5 flex flex-col justify-end">
        <div className="font-bold text-[26px] md:text-[40px] md:leading-[1.92] text-white flex justify-center items-center">
          Careers
        </div>
        <div className="text-[14px] md:text-[20px] md:leading-[1.92] text-[#C4C4C4] text-center flex justify-center">
          NFT 세상의 새로운 미래, BLOCK S와 함께라면 현실이 됩니다.
        </div>
      </div>
      <div className="h-1/5 flex"/>
      <div className="m-5 flex flex-col items-center">
        <div className={"w-full max-w-[900px] mt-[7px]"}>
          <Jobinfo title={"WEB DESIGNER"} ApplyJob={ApplyDesigner} />
        </div>
        <div className={"w-full max-w-[900px] mt-[7px]"}>
          <Jobinfo title={"FRONT-END DEVELOPER"} ApplyJob={ApplyFrontend} />
        </div>
      </div>
      {modalStep === 1 && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customModal}
          contentLabel="Example Modal"
        >
          {modalTypeRender(modalType, setModalIsOpen, setModalStep)}
        </Modal>
      )}
      {modalStep === 2 && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeCompleteModal}
          style={customCompleteStyles}
          contentLabel="Example Modal"
        >
          <Complete
            setModalStep={setModalStep}
            setContentModal={setModalIsOpen}
          />
        </Modal>
      )}

      <Modal
        isOpen={modalCompleteOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customCompleteModal}
        contentLabel="Example Modal"
      >
        <CompleteModal />
      </Modal>
    </div>
    // <div>
    //   <div
    //     className={
    //       "text-white mt-[163px] font-bold text-[40px] flex justify-center leading-[76.67px] items-center"
    //     }
    //   >
    //     Careers
    //   </div>
    //   <div>
    //     <p
    //       className={
    //         "text-[#C4C4C4] text-[20px] font-normal font-notoSansKR mt-[16px] leading-[38.34px] flex justify-center items-center"
    //       }
    //     >
    //       NFT 세상의 새로운 미래, BLOCK S와 함께라면 현실이 됩니다.
    //     </p>
    //   </div>
    //   <div className={"mt-[267px]"}>
    //     <Jobinfo title={"WEB DESIGNER"} ApplyJob={ApplyDesigner} />
    //   </div>
    //   <div className={"mt-[7px]"}>
    //     <Jobinfo title={"FRONT-END DEVELOPER"} ApplyJob={ApplyFrontend} />
    //   </div>
    //   {modalStep === 1 && (
    //     <Modal
    //       isOpen={modalIsOpen}
    //       onAfterOpen={afterOpenModal}
    //       onRequestClose={closeModal}
    //       style={customModal}
    //       contentLabel="Example Modal"
    //     >
    //       {modalTypeRender(modalType, setModalIsOpen, setModalStep)}
    //     </Modal>
    //   )}
    //   {modalStep === 2 && (
    //     <Modal
    //       isOpen={modalIsOpen}
    //       onAfterOpen={afterOpenModal}
    //       onRequestClose={closeCompleteModal}
    //       style={customCompleteStyles}
    //       contentLabel="Example Modal"
    //     >
    //       <Complete
    //         setModalStep={setModalStep}
    //         setContentModal={setModalIsOpen}
    //       />
    //     </Modal>
    //   )}

    //   <Modal
    //     isOpen={modalCompleteOpen}
    //     onAfterOpen={afterOpenModal}
    //     onRequestClose={closeModal}
    //     style={customCompleteModal}
    //     contentLabel="Example Modal"
    //   >
    //     <CompleteModal />
    //   </Modal>
    // </div>
  );
};

export default Index;
