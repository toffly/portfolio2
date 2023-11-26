import React from "react";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="max-w-[1440px] h-[90vh] m-auto flex items-center justify-center">
      <Reveal>
        <div className="flex flex-col items-start justify-center">
          <h4 className="font-sans xl:text-[64px] md:text-[50px] text-[32px] text-white">
            WEBSITE DEVELOPING
          </h4>
          <h2 className="font-sans xl:text-[120px] md:text-[80px] text-[60px] font-bold text-orange">
            FRONT-END REACT DEVELOPER
          </h2>
        </div>
      </Reveal>
    </section>
  );
};
export default Hero;
