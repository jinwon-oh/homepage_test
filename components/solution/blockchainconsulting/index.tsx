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
      <div className="w-full h-full max-w-[750px] lg:max-w-[970px] flex flex-col md:flex-row justify-start md:justify-between items-center">
        <div
          className={
            "w-[100px] md:w-[155px] h-[100px] md:h-[155px] my-[10px] flex flex-col"
          }
        >
          <div className={"flex justify-center"}>
            <img
              src={"asset/img/blockchainconsulting.png"}
              className={"w-full object-contain"}
            />
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className="mb-5 text-white hidden md:flex text-[14px] md:text-[20px] leading-[1.2] font-semibold">
            Blockchain Consulting
          </div>
          <div className="font-notoSansKR font-normal text-[12px] md:text-[18px] leading-[1.5] text-white">
            <p>NFT와 더불어, 블록체인에는 수 많은 기술과 기회가 있습니다.</p>
            <br />
            <p> 블록체인과 함께 하는 새로운 비즈니스 기회.</p>
            <p> BLOCK S가 함께 하겠습니다.</p>
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
              <img src={"asset/img/rightArrow.png"} className={"h-[12px] object-contain"} />
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
    // <div className={"w-[958px] h-[235px] mt-[112px] flex ml-[70px]"}>
    //   <div className={"pl-[0px]"}>
    //     <div className={"pt-[40px] flex justify-center"}>
    //       <img
    //         src={"asset/img/blockchainconsulting.png"}
    //         className={"w-[152px] h-[152px]"}
    //       />
    //     </div>
    //   </div>
    //   <div className={"pl-[226px] "}>
    //     <div className={"text-white text-[20px] leading-[24px] font-semibold"}>
    //       Blockchain Consulting
    //     </div>
    //     <div
    //       className={
    //         "font-notoSansKR font-normal text-[20px] leading-[30px] text-white pt-[24px]"
    //       }
    //     >
    //       <p>NFT와 더불어, 블록체인에는 수 많은 기술과 기회가 있습니다.</p>
    //       <br />
    //       <p> 블록체인과 함께 하는 새로운 비즈니스 기회.</p>
    //       <p> BLOCK S가 함께 하겠습니다.</p>
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
