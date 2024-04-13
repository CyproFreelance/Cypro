"use client";
import React, { useState } from "react";
import "./contact.css";

type Tag =
  | "Web Development"
  | "UI/UX Design"
  | "Development"
  | "Fullstack Web"
  | "Ecommerce Website"
  | "Branding"
  | "App from Scratch"
  | "Rebranding";

const ContactPage = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const toggleTag = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const isTagSelected = (tag: Tag) => selectedTags.includes(tag);

  return (
    <div className="flex flex-col items mt-40  w-full px-28 max-md:px-1 ">
      <div className="flex text-5xl">
        <h1 className="bg-clip-text font-black text-transparent bg-gradient-to-r leading-none mb-10 text-left from-[#ffffff] to-[rgba(255,255,255,0.42)] max-md:px-4">
          <span className="italic font-[900]">HEY!&nbsp; </span> Tell us all the
          things
          <br />
          you need
        </h1>
        <span>👋</span>
      </div>
      <h3 className="text-[#FF4D00] text-xl">I&apos;m interested in</h3>

      <div className="tags flex items-center justify-start gap-3 flex-wrap w-[60%] max-md:w-[100%] mt-4">
        {[
          "Web Development",
          "UI/UX Design",
          "Development",
          "Fullstack Web",
          "Ecommerce Website",
          "Branding",
          "App from Scratch",
          "Rebranding",
        ].map((tag: string) => (
          <TagButton
            key={tag}
            tag={tag as Tag}
            selected={isTagSelected(tag as Tag)}
            onClick={() => toggleTag(tag as Tag)}
          />
        ))}
      </div>
      <input type="checkbox" />
      <div className=" ">
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
                <input
                  type="text"
                  placeholder=""
                  onKeyPress={(event) => /[0-9]/i.test(event.key)}
                  required
                />
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
                <div className="form-row ">
                  <div className="input-data">
                    <div className="inner" />
                    <div className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-10 max-md:px-6 max-md:py-3 py-4 rounded-[3px] btn text-center hover:text-black">
                      <input type="button" value="Submit" />
                    </div>
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

const TagButton = ({
  tag,
  selected,
  onClick,
}: {
  tag: Tag;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`redbtn mt-3 px-4 py-2 rounded-full text-xl max-md:text-sm ${
        selected
          ? "bg-white text-black border border-white"
          : "bg-transparent border border-white text-white"
      }`}
      onClick={onClick}
    >
      <span className="spani">{tag}</span>
    </button>
  );
};

export default ContactPage;
