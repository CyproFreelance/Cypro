import Image from 'next/image';
import React from 'react'
// import { motion } from 'framer-motion'

const loading = () => {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 z-[1001]"
        // initial={{clipPath: "polygon(0 0, 100% 0 , 100% 100%, 0 100%)"}}
        // animate={{}}
        // exit={{  clipPath: "polygon(0 0, 100% 0 , 100% 100%, 0 100%)", transition: {duration: 0.3 , delay: 4} }} // Exit animation
      >
        <div className="flex flex-col items-center">
          <Image
            src='/logo.webp'
            alt=''
            width={120}
            height={120}
            className='rounded-full animate-ping'
          />
          {/* <h1
            className="font-bold text-white animate-pulse text"
            
          >
            Loading...
          </h1> */}
        </div>
      </div>
    );
  };

export default loading
