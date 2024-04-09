"use client";

// importing stuffs
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// main function
const StickyRoll = () => {
  // list of all texts and images and stuffs
  const buttonData = [
    {
      text: "STRATEGY",
      description:
        "Craft a comprehensive plan to achieve your business goals efficiently and effectively. Develop strategies tailored to your unique needs and challenges.",
      image: "spectrum1.webp",
    },
    {
      text: "DESIGN",
      description:
        "Create visually stunning designs that captivate your audience and enhance user experience. From UI/UX design to branding, we bring your ideas to life.",
      image: "spectrum2.webp",
    },
    {
      text: "DEVELOPMENT",
      description:
        "Transform your concepts into robust, scalable applications using cutting-edge technologies. Our development team ensures high-quality solutions that meet your requirements.",
      image: "spectrum3.webp",
    },
    {
      text: "OPTIMIZATION",
      description:
        "Fine-tune your systems and processes to maximize efficiency and performance. Identify areas for improvement and implement optimization strategies for sustainable growth.",
      image: "spectrum1.webp",
    },
  ];
  //okay

  // declared useState function to check which button is selected (initially its selects the first element in the buttondatalist)
  const [selected, setSelected] = useState(buttonData[0].text);
  // same thing here but for image (it sets initial image to 1st element in the list)
  const [previousImage, setPreviousImage] = useState(buttonData[0].image);

  // use effect checcks when button gets clicked and selects that button
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelected(buttonData[0].text);
    }, 0); // Set timeout to ensure the selected state is updated after initial render
    return () => clearTimeout(timer);
  }, []);

  // when button gets click it changes image and description
  const handleClick = (text: string, image: string) => {
    setPreviousImage(selected);
    setSelected(text);
  };

  return (
    // main code
    <div className="flex flex-row justify-center items-center h-screen px-32 max-md:px-2  py-10 max-md:py-1 container max-md:flex-col max-md:justify-center max-md:items-center max-md:h-fit">
      <div className="flex flex-col md:items-start justify-center space-y-8 p-4 max-md:justify-center max-md:items-center max-md:px-0 ">
        {/* this is initially the motion div = framer motion div */}
        <motion.div
          // this is initial animation
          initial={{ opacity: 0, y: 50 }}
          // animate when loads
          animate={{ opacity: 1, y: 0 }}
          // transition
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-start max-md:items-center justify-center"
          >
            {/* images motion div  */}
            <motion.div
              key={selected}
              initial={{ clipPath: "polygon(0 0, 100% 0 , 100% 0, 0 0)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0 , 100% 100%, 0 100%)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={`/${
                  buttonData.find((button) => button.text === selected)?.image
                }`}
                alt={selected}
                width={600}
                height={600}
                className="w-[20em] h-[20rem]"
              />
  
                

            </motion.div>
            <motion.p
              className="text-slate-50/[0.5] mt-8 text-start w-3/4 max-md:w-100% max-md:px-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {
                buttonData.find((button) => button.text === selected)
                  ?.description
              }
            </motion.p>
            <motion.button
              className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-8 py-3 rounded-[3px] btn mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="spani text-white font-semibold text-xl">
                Work with us
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col items-end justify-center space-y-10 p-4 max-md:justify-center max-md:items-center max-md:py-2">
        {buttonData.map((button, index) => (
          <motion.button
            key={index}
            className={`text-7xl max-md:text-[32px] bg-clip-text font-black space-y-8  focus:outline-none ${
              selected === button.text
                ? "text-transparent bg-gradient-to-r leading-tight mb-2 text-end from-[#ffffff] to-[rgba(255,255,255,0.42)]"
                : "text-transparent bg-gradient-to-r leading-tight mb-2 text-end from-[#ffffff5b] to-[rgba(69,69,69,0.56)]"
            }`}
            // understood the code? come to top okay followign you
            onClick={() => handleClick(button.text, button.image)}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            {button.text}
            {selected === button.text && (
              <motion.div
                className="w-full h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StickyRoll;
