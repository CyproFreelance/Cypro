import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./hero.css";
import Link from "next/link";
import Modal from "@/components/shared/Modal";
import OrderForm from "../shared/Order";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hero">
      <div className="heroContainer">
        <div className="heading flex items-center justify-center">
          <div className="dots"></div>
          <motion.div 
            className="container flex items-center overflow-hidden justify-center"
          >
            <motion.h1
              className="mt-3 bg-clip-text font-[700] text-transparent bg-gradient-to-r leading-tight mb-2 text-[5rem] text-center from-[#ffffff] to-[rgba(255,255,255,0.42)] sm:w-[80%] max-md:text-[40px]"
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Cypro Studios: Your Business Partner
            </motion.h1>
          </motion.div>
          <div className="overflow-hidden">
          <motion.p
            className="text-[24px] max-md:text-[18px]"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{duration: .3, ease: "easeIn" }} 
          >
            Experience user-centric innovation for your business
          </motion.p>
        </div>
        </div>
      </div>


      <motion.div className="buttonSection mt-8 overflow-hidden"
        initial={{y : 30 , opacity: 0}}
        animate={{y: 0 , opacity : 1}}
        transition={{duration:0.3 , delay: 0.6 , ease: "easeIn" }}
      >
        <SignInButton afterSignInUrl="/dashboard" mode="modal">
          <Link
            href="/"
            className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-10 max-md:px-6 max-md:py-3 py-4 rounded-[3px] btn text-center"
          >
            <span className="spani text-white font-semibold text-xl">
              Get Started
            </span>
          </Link>
        </SignInButton>
        <button
          onClick={openModal}
          className="redbtn border-2 border-[#FF1D60] px-10 py-4 rounded-[3px] btn hover:border-white max-md:px-6 max-md:py-3"
        >
          <span className="spani text-white font-semibold text-xl">
            Place Order
          </span>
        </button>
      </motion.div>

      {isModalOpen && <OrderForm onClose={closeModal} />}
    </div>
  );
};

export default HeroSection;
