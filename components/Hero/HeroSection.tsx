"use client";
import React, { useState } from "react";
import "./hero.css";
import Link from "next/link";
import Modal from "@/components/shared/Modal";
import OrderForm from "../shared/Order";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
// million-ignore
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
      <div className="heroContainer ">
        <div className="heading flex items-center  justify-center">
          <div className="dots"></div>
          <div className="container flex items-center justify-center">
            <h1 className="mt-3 bg-clip-text text-transparent bg-gradient-to-r leading-tight mb-2 text-7xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)] sm:w-[80%] max-md:text-[40px]">
              Cypro Studios: Your Business partner
            </h1>
          </div>
          <p className="text-[24px] max-md:text-[18px]">
            Experience user-centric innovation for your business
          </p>
        </div>
      </div>

        <div className="buttonSection mt-8">
          <SignInButton afterSignInUrl="/dashboard" mode="modal">
            <Link
              href="/"
              className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-8 max-md:px-6 max-md:py-3 py-3 rounded-[3px] btn text-center"
            >
              <span className="spani text-white font-semibold text-xl">
                Get Started
              </span>
            </Link>
          </SignInButton>
              <button
                onClick={openModal}
                className="redbtn border-2 border-[#FF1D60] px-8 py-3 rounded-[3px] btn hover:border-white max-md:px-6 max-md:py-3"
              >
                <span className="spani text-white font-semibold text-xl">
                  Place Order
                </span>
              </button>
            </div>

      {isModalOpen && <OrderForm onClose={closeModal} />}
    </div>
  );
};

export default HeroSection;
