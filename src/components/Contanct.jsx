import { useRef } from "react";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";

const Contanct = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section className="max-w-[1440px] m-auto h-[80vh] flex flex-col justify-between mt-12">
      <Reveal>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col h-fit">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8 flex flex-col w-full">
            <div>
              <p className="font-sans text-[25px]  text-white">Company Name*</p>
              <input
                name="from_company"
                id="company"
                type="text"
                placeholder="Your company name"
                className="placeholder:font-sans placeholder:text-[20px] placeholder:text-[#5C5C5C] bg-transparent border-b-2 ml-4 lg:w-[500px] w-[90vw] outline-none text-white transition-all duration-200 focus:border-blue-600"
                required
              />
            </div>
            <div className="lg:place-self-end">
              <p className="font-sans text-[25px]  text-white">Email*</p>
              <input
                name="from_name"
                type="email"
                id="email"
                placeholder="Your contact Email"
                className="placeholder:font-sans placeholder:text-[20px] placeholder:text-[#5C5C5C] bg-transparent border-b-2 ml-4 lg:w-[500px] w-[90vw] text-white outline-none transition-all duration-200 focus:border-blue-600"
                required
              />
            </div>
            <div>
              <p className="font-sans text-[25px]  text-white">Location</p>
              <input
                name="from_location"
                id="location"
                type="text"
                placeholder="Your company location"
                className="placeholder:font-sans placeholder:text-[20px] placeholder:text-[#5C5C5C] bg-transparent border-b-2 ml-4 lg:w-[500px] w-[90vw] text-white outline-none transition-all duration-200 focus:border-blue-600"
              />
            </div>
          </div>
          <div className="w-full my-8">
            <p className="font-sans text-[25px]  text-white">
              Detail information
            </p>
            <textarea
              name="message"
              id="message"
              placeholder="Please give me essential information about your company and work that you want me for"
              className="placeholder:font-sans placeholder:text-[20px] placeholder:text-[#5C5C5C] bg-transparent border-b-2 ml-4 text-white outline-none transition-all duration-200 focus:border-blue-600 lg:w-full w-[90vw] h-[120px]"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg w-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </Reveal>

      <Reveal>
        <div className="font-sans xl:text-[25px] md:text-[20px] text-[18px] text-white">
          <h4>
            ( Everything work relate to front-end developer can be discuss
            further )
          </h4>
          <h2 className="font-sans xl:text-[120px] md:text-[80px] text-[60px] font-bold text-orange">
            Contact Me
          </h2>
        </div>
      </Reveal>
    </section>
  );
};

export default Contanct;
