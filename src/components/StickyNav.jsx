import React from "react";

const StickyNav = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between px-10 py-4 bg-black z-10">
      <h6 className="text-white">PEERAPAT</h6>
      <div className="flex flex-row gap-4 justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1A92K6nF0ByqBqep0R4sRzBgJ909IbVwB/view?usp=sharing" target="_blank"
        >
          <button className="rounded-lg bg-[#33B249] px-[16px] py-[8px] text-white font-poppin text-[12px] hover:bg-[#236A2F] duration-500">
            My CV
          </button>
        </a>
        <p className="text-white"> TEL.087-3719388 toffly2@gmail.com</p>
      </div>
    </nav>
  );
};

export default StickyNav;
