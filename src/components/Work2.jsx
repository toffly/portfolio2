import React from "react";
import { music1, music2, music5, music6, music20, gitIcon } from "../assets";
import Carousel from "./Carousel";
import Reveal from "./Reveal";

const Work2 = () => {
  let slides = [music1, music2, music5, music6, music20];

  return (
    <div
      className="w-[95%] h-full m-auto
     bg-gradient-to-br from-[#A088FA] to-[#592EFA] flex lg:flex-row flex-col justify-center items-center gap-[24px] rounded-3xl overflow-hidden relative lg:py-[100px] py-8"
    >
      <Reveal>
        <Carousel slides={slides} />
      </Reveal>
      <Reveal>
        <div className="max-w-[600px] min-w-[350px] mb-4">
          <h4 className="font-sans text-white font-bold text-[50px] leading-10">
            KRUSAWEK
          </h4>
          <h5 className="text-white text-[25px] font-poppin font-medium mb-[16px]">
            music school website
          </h5>
          <p className="text-white text-[18px] font-poppin font-medium mb-4">
            Krusawek music school website is create for the purpose of promoting
            school to social-media while keeping easier backend management user
            friendly by using Firebase for managing data in cloud database for
            easier access and ui design which easy to understand
          </p>
          <p className="text-white text-[18px] font-poppin font-medium mb-4">
            this website use authentication method by email only for securities reasons for anyone who want to watch the live demo back-end side please contact me first
          </p>
          <p className="text-white text-[12px] font-poppin font-medium mb-4">(for anyone who want to watch the live demo back-end side please contact me first)
            </p>
          <div className="flex flex-row ml-4 justify-start items-center gap-[30px]">
            <a
              href="https://github.com/toffly/project-musicschool"
              target="_blank"
            >
              <img
                src={gitIcon}
                alt="gitIcon"
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </a>
            <button className="rounded-lg bg-[#33B249] px-[16px] py-[8px] text-white font-poppin text-[18px] hover:bg-[#236A2F] duration-500">
              LIVE DEMO
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Work2;
