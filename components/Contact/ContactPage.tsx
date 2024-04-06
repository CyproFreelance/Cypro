import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-start mt-40 w-full ">
      <div className="flex text-7xl">
        <h1 className="bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-2 text-left from-[#ffffff] to-[rgba(255,255,255,0.42)] max-md:px-4">
          HEY! Tell us all the things
          <br />
          you need
        </h1>
        <span>👋</span>
      </div>

      <h3 className="text-[#FF4D00] text-xl">I&apos;m interested in</h3>
    </div>
  );
};

export default ContactPage;
