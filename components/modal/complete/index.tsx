import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setModalStep: Dispatch<SetStateAction<number>>;
  setContentModal: Dispatch<SetStateAction<boolean>>;
}
const MyComponent = ({ setModalStep, setContentModal }: Props) => {
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <div className={"mt-[75px] "}>
        <img
          src={"asset/img/completemodalcheck.png"}
          className={"w-[128px] h-[128px] object-contain"}
        />
      </div>
      <div
        className={
          "font-notoSansKR text-[24px] font-bold leading-[24px] mt-[32px]"
        }
      >
        문의주셔서 감사합니다.
      </div>
      <div
        className={
          "mt-[24px] font-normal leading-[24px] font-notoSansKR text-[14px]"
        }
      >
        영업일 기준 24시간 이내에 담당자가 연락드리겠습니다.
      </div>
      <div
        className={
          "bg-[#1A1A1A] w-[168px] h-[61px] mt-[32px] text-white flex justify-center items-center text-[24px] font-bold font-notoSansKR cursor-pointer"
        }
        onClick={() => {
          setContentModal(false);
          setModalStep(1);
        }}
      >
        확인
      </div>
    </div>
  );
};

export default MyComponent;
