import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
    applyReq.jobType = 1;

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
      // setModalIsOpen(false);
      setModalStep(2);
    });
  };

  const addFile = (e: ChangeEvent<HTMLInputElement> | any) => {
    setResume(e.target.files[0]);
  };
  if (loading) return <Loader type="spin" color="RGB 값" message={""} />;

  return (
    <div className={"ml-[67px] overflow-y-auto "}>
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
          <p className={"text-[14px] leading-[16px] font-normal"}>
            [담당 업무]
          </p>
          <br />
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              반응형 웹 플랫폼 서비스 UI 및 UX설계
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              반응형 웹 플랫폼 서비스 디자인 진행
            </li>
          </ul>
          <br />
          <p className={"text-[14px] leading-[16px] font-normal"}>
            [지원 자격]
          </p>
          <br />
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal "}>
              XD, Sketch, Figma, Zeplin 사용에 능하신 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              신규 서비스에 관심이 높고 UX와 시각 화 방식을 탐구하시는 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              다양한 요구 사항을 단순화하여 직관적인 UX로 설계하고 표현할 수
              있으신 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              포트폴리오 제출 필수 (본인의 기여도 표시)
            </li>
          </ul>
          <br />
          <p className={"text-[14px] leading-[16px] font-normal"}>
            [우대 조건]
          </p>
          <br />
          <ul className={"list-disc"}>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              블록체인 관련 경험 및 지식이 있으신 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              UX/UI 2년 이상의 경력이 있으신 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              Adobe Illustrator 사용 가능하신 분, 일러스트 작업 경험이 있으신 분
            </li>
            <li className={"text-[14px] leading-[16px] font-normal"}>
              타 부서와 커뮤니케이션을 잘 하며 기획 의도를 정확하게 파악하실 수
              있는 분
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
                업로드
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
