import React from "react";
import { mainIcon, subIcon } from "../constants";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div className="max-w-[1440px] h-[90vh] m-auto flex justify-center items-center flex-col">
      <Reveal>
        <h3 className="font-sans xl:text-[80px] md:text-[64px] text-[50px] font-bold text-orange text-center">
          WHAT IS MY TOOLS ?
        </h3>
      </Reveal>
      <Reveal>
        <h4 className="font-sans xl:text-[64px] md:text-[50px] text-[32px] text-white text-center">
          MY MAIN FOCUS
        </h4>
        <div className="flex flex-row items-center justify-center gap-8 mb-10 flex-wrap">
          {mainIcon.map((m, i) => (
            <img src={m} key={i} width={80} height={80} />
          ))}
        </div>
      </Reveal>
      <Reveal>
        <h4 className="font-sans xl:text-[64px] md:text-[50px] text-[32px] text-white text-center ">
          MY SKILLS
        </h4>
        <div className="flex flex-row gap-8 mb-10 flex-wrap items-center justify-center">
          {subIcon.map((m, i) => (
            <img src={m} key={i} width={80} height={80} />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default About;
