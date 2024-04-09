'use client'
import React, { useState } from "react";

type Tag = "Web Development" | "UI/UX Design" | "Development" | "Fullstack Web" | "Ecommerce Website" | "Branding" | "App from Scratch" | "Rebranding";

const ContactTags = () => {
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
    <div className="flex flex-col items-start mt-40 w-full px-28 ">
      <div className="flex text-5xl">
        <h1 className="bg-clip-text font-black text-transparent bg-gradient-to-r leading-none mb-10 text-left from-[#ffffff] to-[rgba(255,255,255,0.42)] max-md:px-4">
          <span className="italic font-[900]">HEY!&nbsp; </span> Tell us all the things
          <br />
          you need
        </h1>
        {/* i put it here beccause if i put it in h1 then the background color gets fucked */}
        <span>👋</span>
      </div>
      <h3 className="text-[#FF4D00] text-xl">I&apos;m interested in</h3>

      <div className="tags flex items-center justify-start gap-3 flex-wrap w-[60%] mt-4">
        {["Web Development", "UI/UX Design", "Development", "Fullstack Web", "Ecommerce Website", "Branding", "App from Scratch", "Rebranding"].map((tag: string) => (
          <TagButton
            key={tag}
            tag={tag as Tag} 
            selected={isTagSelected(tag as Tag)} 
            onClick={() => toggleTag(tag as Tag)} 
          />
        ))}
      </div>
    </div>
  );
};


const TagButton = ({ tag, selected, onClick }: { tag: Tag; selected: boolean; onClick: () => void }) => {
  return (
    <button
      className={`redbtn mt-3 px-4 py-2 rounded-full text-xl ${
        selected ? 'bg-white text-black border border-white' : 'bg-transparent border border-white text-white'
      }`}
      onClick={onClick}
    >
      <span className="spani">{tag}</span>
    </button>
  );
};

export default ContactTags;