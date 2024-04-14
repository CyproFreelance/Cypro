'use client'
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
 
import { motion } from 'framer-motion';
import { ContextMenuCustom } from '@/components/shared/ContextMenuCustom';

// Loading Screen component

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
      {isLoaded && isSignedIn ? router.push('/dashboard') : <ContextMenuCustom />}
    </>
  );
};

export default Page;