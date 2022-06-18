import React, { useState, useEffect, useRef } from "react";
import Nav from "../nav";
import Dots from "../dots";
import Intro from "./Intro";
import Allinoneintro from "./allinoneintro";
import Creator from "./Creator";
import Career from "./career";
import Solution from "../solution";
const DIVIDER_HEIGHT = 7;

function App() {
  const outerDivRef: any = useRef();
  const contactRef = useRef<HTMLDivElement>(null);

  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e: React.FormEvent<EventTarget> | any) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          const nav = document?.getElementById("allinoneintro");
          nav?.scrollIntoView({ behavior: "smooth" });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2.5) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 4페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3.5) {
          //현재 5페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3.99 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });

          setScrollIndex(6);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2.5) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: (pageHeight + DIVIDER_HEIGHT) / 1,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3.5) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: (pageHeight + DIVIDER_HEIGHT) / (1 / 2),
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4.1) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: (pageHeight + DIVIDER_HEIGHT) / (1 / 3),
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: (pageHeight + DIVIDER_HEIGHT) / (1 / 4),
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(6);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [scrollIndex]);
  return (
    <>
      <div ref={outerDivRef} className="outer">
        <div>
          <Nav scrollIndex={scrollIndex} />
          <div className="inner bg-black" id="innerbground">
            <div className="w-full max-w-[1280px] h-[calc(100%-100px)] mt-[100px] flex justify-center">
              <Intro />
            </div>
          </div>
          <div className="divider bg-black" />
          <div className="inner bg-white" id="allinoneintro">
            <div className="w-full max-w-[1280px] h-[calc(100%-100px)] mt-[100px] flex justify-center">
              <Allinoneintro />
            </div>
          </div>
          <div className="divider bg-white" />
          <div className="inner bg-[#1A1A1A]" id="solution">
            <div className="w-full max-w-[1280px] h-[calc(100%-100px)] mt-[100px] flex justify-center">
              {/* <div className={"h-[90vh] mt-[10vh] "}> */}
              <Solution />
              {/* </div> */}
            </div>
          </div>
          <div className="divider bg-[#1A1A1A]" />
          <div className="inner bg-[#101113]" id={"creator"}>
            <div className="w-full max-w-[1280px] h-[calc(100%-100px)] mt-[100px] flex justify-center">
              {/* <div className={"h-[90vh] "}> */}
              <Creator />
              {/* </div> */}
            </div>
          </div>
          <div className="divider bg-[#101113]" />
          <div className="inner bg-[#1A1A1A]" id={"careers"}>
            <div className="w-full max-w-[1280px] h-[calc(100%-100px)] mt-[100px] flex justify-center">
              <Career />
            </div>
          </div>
          <div className="divider bg-[#1A1A1A]" />
          <div ref={contactRef}>
            <div className="bg-black flex justify-center bg-[url(/asset/img/footerimg.png)] bg-no-repeat bg-center bg-cover">
              <div
                className={
                  "flex place-content-center relative max-w-[1280px] w-full h-[316px]"
                }
              >
                <div className={"absolute text-white md:right-0"}>
                  <div
                    className={
                      "relative md:mr-[151px] mt-[131px] font-bold md:text-right"
                    }
                  >
                    <p className={"flex justify-center md:justify-end"}>
                      NFT 거래의 새로운 기준.
                    </p>
                    <p>BLOCK S NFT MARKETPLACE</p>
                    <div className={"flex justify-center md:justify-end"}>
                      <div
                        className={
                          "w-[156px] h-[43px] bg-[#3BBA9C] flex justify-center items-center mt-[22px] "
                        }
                      >
                        <div className={" font-semibold"}>DIVE NOW</div>
                        <div className={"pl-[16px]"}>
                          <img
                            className={"w-[16px] h-[16px]"}
                            src={"asset/img/rocketIcon.png"}
                            alt={"아이콘"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] flex justify-center">
              <div className="bg-[#1A1A1A] max-w-[1280px] w-full h-[100px] flex flex-col justify-center items-start text-white text-[12px] md:text-[16px] leading-[1.5]">
                <div className="font-notoSansKR mx-5">
                  <span className="inline-flex whitespace-nowrap">
                    주식회사 블록에스 | 대표이사 김희성
                  </span>{" "}
                  | 경기도 성남시 수정구 창업로 42, 판교 제2테크노밸리 경기
                  기업성장센터 305호 | 사업자 등록번호 315-88-02548
                </div>
                <div className={"pt-[4px] mx-5"}>
                  COPYRIGHT ⓒ BLOCK S. ALL RIGHTS RESERVED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
