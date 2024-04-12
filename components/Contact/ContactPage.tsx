"use client";
import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-start mt-40 w-full contact">
      <div className="box__heading__main flex text-7xl">
        <h1 className="heading__main text-6xl bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-2 text-left from-[#ffffff] to-[rgba(255,255,255,0.42)]">
          HEY! Tell us all the things you need
        </h1>
        <span>👋</span>
      </div>

      <h3 className="text-[#FF4D00] text-xl subheading__main">
        I am interested in
      </h3>

      <div className="containerContact">
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline" />
              <label htmlFor="">First Name</label>
            </div>
            <div className="input-data">
              <input type="text" required />
              <div className="underline" />
              <label htmlFor="">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="email" required />
              <div className="underline" />
              <label htmlFor="">Email Address</label>
            </div>
            <div className="input-data">
              <input type="text" placeholder="" required />
              <div className="underline" />
              <label htmlFor="">Budget Range</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows={8} cols={80} required defaultValue={""} />
              <br />
              <div className="underline" />
              <label htmlFor="">Write your message</label>
              <br />
              <div className="submit-btn">
                <div className="input-data">
                  <div className="inner" />
                  <div className="button">
                    <input type="button" value="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
