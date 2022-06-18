import React, { useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import Loader from "../../../util/Loader";

interface Props {
  setModalStep: Dispatch<SetStateAction<number>>;
}
const MyComponent = ({ setModalStep }: Props) => {
  const [nickName, setNickName] = useState<string>("");
  const [contactNum, setContactNum] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [applyInfo, setApplyInfo] = useState<number>(0);
  const [etcInfo, setEtcInfo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = () => {
    if (nickName === "") return alert("닉네임은 필수사항입니다.");
    if (email === "") return alert("이메일은 필수사항입니다.");
    if (applyInfo === 0) return alert("신청 사항을 선택해주세요.");

    let creatorReq: any = {};
    creatorReq.nickName = nickName;
    creatorReq.contactNum = contactNum;
    creatorReq.companyName = companyName;
    creatorReq.email = email;
    creatorReq.applyInfo = applyInfo;
    creatorReq.etcInfo = etcInfo;
    creatorReq.type = 1;

    setLoading(true);
    axios.post("/apply/creator", creatorReq).then((res) => {
      setLoading(false);
      setModalStep(2);
    });
  };
  if (loading) return <Loader type="spin" color="RGB 값" message={""} />;
  return (
    <div className={"ml-[67px]"}>
      <div
        className={
          "mt-[32px] font-bold text-[24px] leading-[24px] font-notoSansKR"
        }
      >
        신청 정보
      </div>
      <div className={"mt-[32px] flex"}>
        <div>
          <div>
            이름 <span className={"text-red-600"}>*</span>
          </div>
          <div className={"mt-[8px]"}>
            <input
              type={"text"}
              placeholder={"이름을 입력해주세요."}
              onChange={(e) => setNickName(e.target.value)}
              className={
                "w-[237px] h-[40px] border border-solid border-[rgba(0, 0, 0, 0.5)] indent-3.5"
              }
            />
          </div>
        </div>
        <div className={"ml-[32px]"}>
          <div>
            연락처 <span className={"text-red-600"}>*</span>
          </div>
          <div className={"mt-[8px]"}>
            <input
              type={"text"}
              placeholder={"이름을 입력해주세요."}
              onChange={(e) => setContactNum(e.target.value)}
              className={
                "w-[237px] h-[40px] border border-solid border-[rgba(0, 0, 0, 0.5)] indent-3.5"
              }
            />
          </div>
        </div>
      </div>
      <div className={"mt-[32px] flex"}>
        <div>
          <div>
            회사 또는 단체명 <span className={"text-red-600"}>*</span>
          </div>
          <div className={"mt-[8px]"}>
            <input
              type={"text"}
              placeholder={"회사 또는 단체명을 입력해주세요."}
              onChange={(e) => setCompanyName(e.target.value)}
              className={
                "w-[237px] h-[40px] border border-solid border-[rgba(0, 0, 0, 0.5)] indent-3.5"
              }
            />
          </div>
        </div>
        <div className={"ml-[32px]"}>
          <div>
            이메일 <span className={"text-red-600"}>*</span>
          </div>
          <div className={"mt-[8px]"}>
            <input
              type={"text"}
              placeholder={"이메일을 입력해주세요."}
              onChange={(e) => setEmail(e.target.value)}
              className={
                "w-[237px] h-[40px] border border-solid border-[rgba(0, 0, 0, 0.5)] indent-3.5"
              }
            />
          </div>
        </div>
      </div>
      <div className={"mt-[32px] flex"}>
        <div className="flex justify-center">
          <div className="mb-3 w-[506px] h-[40px]">
            <select
              onChange={(e) => setApplyInfo(Number(e.target.value))}
              className="form-select
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select"
            >
              <option value="" disabled selected>
                문의 사항을 선택해주세요.
              </option>

              <option value="1">NFT Marketplace 개발 문의</option>
              <option value="2">NFT Minting Solution 문의</option>
              <option value="3">Block Chain Consulting 문의</option>
              <option value="4">기타</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className={"mt-[32px]"}>기타 사항 (선택)</div>
        <textarea
          onChange={(e) => setEtcInfo(e.target.value)}
          className={
            "border border-solid border-[rgba(0, 0, 0, 0.5)] w-[500px] h-[161px] mt-[8px]"
          }
        />
      </div>
      <div className={"ml-[169px]"}>
        <div
          className={
            "flex justify-center items-center bg-[#1A1A1A] w-[168px] h-[61px] text-white mt-[22px] cursor-pointer"
          }
          onClick={() => onSubmit()}
        >
          작성 완료
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
