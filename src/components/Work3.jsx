import React from "react";
import { nike1, nike2, nike3, gitIcon } from "../assets";
import Carousel from "./Carousel";
import Reveal from "./Reveal";

const Work3 = () => {
  let slides = [nike1, nike2, nike3];

  return (
    <div
      className="w-[95%] h-screen m-auto
     bg-gradient-to-br from-[#FFAAA0] to-[#D13826] flex lg:flex-row flex-col justify-center items-center gap-[24px] rounded-3xl relative overflow-hidden"
    >
      <Reveal>
        <Carousel slides={slides} />
      </Reveal>
      <Reveal>
        <div className="max-w-[600px] min-w-[350px] mb-4">
          <h4 className="font-sans text-white font-bold text-[50px] leading-10">
            NIKE CLONE
          </h4>
          <h5 className="text-white text-[25px] font-poppin font-medium mb-[16px]">
            clone web design
          </h5>
          <p className="text-white text-[18px] font-poppin font-medium mb-4">
            NIke Colne is a website focused on redesign the already known brand
            of shoes in a different perspective for educational purposes
          </p>
          <p className="text-white text-[18px] font-poppin font-medium mb-4">
            By using React and Tailwind as the main focus for the component with
            different section
          </p>
          <div className="flex flex-row ml-4 justify-start items-center gap-[30px]">
            <a href="https://github.com/toffly/NikeClone" target="_blank">
              <img
                src={gitIcon}
                alt="gitIcon"
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </a>
            <a
              href="http://peet-shoeclone.online"
              target="
            _blank"
            >
              <button className="rounded-lg bg-[#33B249] px-[16px] py-[8px] text-white font-poppin text-[18px] hover:bg-[#236A2F] duration-500">
                LIVE DEMO
              </button>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Work3;
