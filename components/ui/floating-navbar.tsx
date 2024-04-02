"use client";
// FloatingNav.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { NavbarDemo } from "../shared/Navbar";

export const FloatingNav = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true); // Initially visible

  useEffect(() => {
    const handleScroll = () => { 
        setVisible(scrollY.get() <= 0 || scrollY.get() > 1.5 * window.innerHeight);
    };

    const unsubscribeScroll = scrollY.onChange(handleScroll);

    return () => {
      unsubscribeScroll();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.25, //👍8=====D🤡
          }}
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <NavbarDemo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

