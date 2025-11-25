'use client';

import { motion } from 'framer-motion';
import ArrowButton from "@/app/reusable/ArrowButton";
import RightTrapezoid from "@/app/reusable/RightTrapezoid"
import {  Check } from "lucide-react"
import { useState } from "react";

function Hero() {
  const [btnHovered, setBtnHovered] = useState(false)
  
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <motion.div 
        className="relative w-full h-dvh flex flex-col items-start justify-center px-15 mb-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        <motion.div 
          className="text-5xl w-100 text-[#222222] text-[Roboto_Condensed] tracking-[-2%] leading-[70px] font-bold"
          variants={itemVariant}
        >
          Lorem ipsum dolor sit amet
        </motion.div>
        
        <motion.div 
          className="w-160 text-[#000000] text-lg leading-[25px] py-5"
          variants={itemVariant}
        >
          Lorem ipsum dolor sit amet consectetur. 
          Enim netus cras congue quis elit sociis. 
          Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. 
          Justo suspendisse tristique posuere quis eget viverra.
          Nunc euismod ultrices etiam nulla habitasse.
        </motion.div>
        
        <motion.div 
          className="flex gap-x-1 pb-5"
          variants={itemVariant}
        >
          <input type="text" className="w-70 px-2 rounded border-1 border-black/50" />
          <ArrowButton btnHovered={btnHovered} setBtnHovered={setBtnHovered} placeHolder={'Submit'} varient={'blue'} />
        </motion.div>
        
        <motion.div 
          className="flex gap-x-2"
          variants={itemVariant}
        >
          <Check className="p-1 font-bold bg-blue-500 rounded-full" color="white"/> 
          No credit card required!
        </motion.div>

        <RightTrapezoid/>
        
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white to-white z-9"></div>
      </motion.div>
    </>
  )
}

export default Hero
