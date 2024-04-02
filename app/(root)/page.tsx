'use client'
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
 
import { motion } from 'framer-motion';
import { ContextMenuCustom } from '@/components/shared/ContextMenuCustom';

// Loading Screen component
const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 z-[1001]"
      style={{ overflow: 'hidden' }}
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
          className='rounded-full'
        />
        <motion.h1
          className="font-bold text-gray-800"
          animate={{ opacity: [0, 1, 0], transition: { duration: 1, repeat: Infinity } }}
        >
          Loading...
        </motion.h1>
      </div>
    </motion.div>
  );
};

const Page = () => {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const [isLoading, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // If already loaded, set isLoaded to true immediately
  //   if (isLoading) {
  //     const timer = setTimeout(() => {
  //       setIsLoaded(true);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isLoaded]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     setIsLoaded(true);
  //   }
  // }, [isLoaded, isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {isLoaded && isSignedIn ? router.push('/dashboard') : <ContextMenuCustom />}
    </>
  );
};

export default Page;