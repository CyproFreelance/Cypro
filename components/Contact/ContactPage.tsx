"use client"
import React from "react";
import "./contact.css";
import { CheckboxContact } from "../shared/CheckboxContact";


const ContactPage = () => {
  return (
    <div className="flex flex-col items-start mt-40 w-full ">
      <div className="flex text-7xl">
        <h1 className=" bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-2 text-left from-[#ffffff] to-[rgba(255,255,255,0.42)] max-md:px-4">
          HEY! Tell us all the things
          <br />
          you need
        </h1>
        <span>👋</span>
      </div>

      <h3 className="text-[#FF4D00] text-xl">I&apos;m interested in</h3>
      <input type="checkbox" />
      <div className="">

    
      <div className="containerContact">
  {/* <div className="text">Contact us Form</div> */}
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
        <input type="text" placeholder=""  onKeyPress={(event) => /[0-9]/i.test(event.key)} required />
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
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            {/* <input type="submit" defaultValue="submit" /> */}
            <div className="button"><input type="button" value="Submit" /></div>
          </div>
        </div>
      </div>
    </div>
    
  </form>
</div>


        
      {/* <CheckboxContact/> */}
</div>



    </div>
  );
};

export default ContactPage;
