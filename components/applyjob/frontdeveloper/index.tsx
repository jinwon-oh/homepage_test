import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import Loader from "../../util/Loader";
interface Props {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setModalStep: Dispatch<SetStateAction<number>>;
}
const Index = ({ setModalIsOpen, setModalStep }: Props) => {
  const [resume, setResume] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [contactnum, setContactnum] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [careerSummary, setCareerSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = () => {
    if (name === "") return alert("이름은 필수사항입니다");
    if (contactnum === "") return alert("연락처는 필수사항입니다");
    if (email === "") return alert("이메일은 필수사항입니다");

    const applyReq: any = {};
    applyReq.name = name;
    applyReq.contactnum = contactnum;
    applyReq.email = email;
    applyReq.careerSummary = careerSummary;
    applyReq.jobType = 2;

    var formData = new FormData();
    // formData.append("applyReq", applyReq, { type: "application/json" });
    formData.append(
      "applyReq",
      new Blob([JSON.stringify(applyReq)], { type: "application/json" })
    );
    // @ts-ignore
    formData.append("file", resume);

    setLoading(true);
    axios.post("/apply", formData).then((res) => {
      setLoading(false);
      setModalStep(2);
    });
  };
  const addFile = (e: ChangeEvent<HTMLInputElement> | any) => {
    setResume(e.target.files[0]);
  };
  if (loading) return <Loader type="spin" color="RGB 값" message={""} />;
  return (
    <div className={"ml-[67px] overflow-y-scroll"}>
      <div
        className={
          "font-notoSansKR leading-[24px] text-[24px] font-bold mt-[32px]"
        }
      >
        APPLY FOR A JOB
      </div>
      <div
        className={
          "w-[506px] h-[403px] border border-solid border-[rgba(0, 0, 0, 0.5)] mt-[38px] "
        }
      >
        <div className={"pt-[10px] px-[63px] pb-[15px] w-auto h-[378px]"}>
          <p className={"text-[14px] leading-[16px] font-normal"}>[담당업무]</p>
          <p>
            <br />
          </p>
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              NEXT.JS프레임웍을 활용한 NFT거래소 제작
            </li>
            <br />
          </ul>
          <p className={"text-[14px] leading-[16px] font-normal"}>[사용기술]</p>
          <br />
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              REACT / NEXT.JS
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              TYPESCRIPT
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>NPM</li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              TAILWIND CSS
            </li>
          </ul>
          <br />
          <p className={"text-[14px] leading-[16px] font-normal"}>[지원자격]</p>
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              학력 및 경력 무관
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              HTML / CSS / TYPESCRIPT / REACT에 대한 이해가 있는 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              주체적으로 일하시는 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              IT최신 트렌드에 관심이 있고 꾸준히 공부하시는 분
            </li>
          </ul>

          <br />
          <p className={"text-[14px] leading-[16px] font-normal"}>[우대조건]</p>
          <p>
            <br />
          </p>
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              REACT경력 3년 이상
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              Tailwind, responsive 자신 있는 분
            </li>
          </ul>
        </div>
      </div>
      <div className={"mt-[27px]"}>
        <div className={"flex"}>
          <div>
            <div>
              이름 <span className={"text-red-600"}>*</span>
            </div>
            <div className={"mt-[8px]"}>
              <input
                type={"text"}
                placeholder={"이름을 입력해주세요."}
                onChange={(e) => setName(e.target.value)}
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
                placeholder={"예) 010-1234-5678"}
                onChange={(e) => setContactnum(e.target.value)}
                className={
                  "w-[237px] h-[40px] border border-solid border-[rgba(0, 0, 0, 0.5)] indent-3.5"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-[24px]"}>
        <div className={"flex"}>
          <div>
            <div>
              이력서 업로드 <span className={"text-red-600"}>*</span>
            </div>
            <div className={"applyjob mt-[8px]"}>
              <label className={"fileLabel"} htmlFor="file">
                파일찾기
              </label>
              <input type="file" id="file" onChange={(e) => addFile(e)} />
            </div>
            <div>{resume?.name}</div>
          </div>
          <div className={"ml-[32px]"}>
            <div>
              이메일 <span className={"text-red-600"}>*</span>
            </div>
            <div className={"mt-[8px]"}>
              <input
                type={"text"}
                placeholder={"예) blocks@blocks.com"}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  "w-[237px] h-[40px] border border-solid border-[rgba(0, 0, 0, 0.5)] indent-3.5"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={"mt-[24px]"}>경력 요약</div>
        <textarea
          onChange={(e) => setCareerSummary(e.target.value)}
          className={
            "border border-solid border-[rgba(0, 0, 0, 0.5)] w-[500px] h-[161px] mt-[8px]"
          }
        />
      </div>
      <div className={"ml-[169px] cursor-pointer"} onClick={() => onSubmit()}>
        <div
          className={
            "flex justify-center items-center bg-[#1A1A1A] w-[168px] h-[61px] text-white mt-[22px]"
          }
        >
          접수 완료
        </div>
      </div>
    </div>
  );
};

export default Index;
