import React from "react";
import { interior1, interior2, interior3, gitIcon } from "../assets";
import Carousel from "./Carousel";
import Reveal from "./Reveal";

const Work1 = () => {
  let slides = [interior1, interior2, interior3];

  return (
    <section
      className="w-[95%] h-screen m-auto
     bg-gradient-to-br from-[#4D5F73] to-[#091525] flex lg:flex-row flex-col justify-center items-center gap-[24px] rounded-3xl overflow-hidden relative"
    >
      <Reveal>
        <Carousel slides={slides} />
      </Reveal>
      <Reveal>
        <div className="max-w-[600px] min-w-[350px] mb-4">
          <h4 className="font-sans text-white font-bold text-[50px] leading-10">
            DAUNKU
          </h4>
          <h5 className="text-white text-[25px] font-poppin font-medium mb-[16px]">
            Interior Design Website
          </h5>
          <p className="text-white text-[18px] font-poppin font-medium mb-4">
            DAUNKU is a website focused on lifestyle and market for plant using
            for interior decoration
          </p>
          <p className="text-white text-[18px] font-poppin font-medium mb-4">
            By using React and Tailwind as the main focus for the component
            while minimalise usage of coding for easier reading and editing
          </p>
          <div className="flex flex-row ml-4 justify-start items-center gap-[30px]">
            <a href="https://github.com/toffly/interior-tailwind" target="_blank">
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
    </section>
  );
};

export default Work1;
