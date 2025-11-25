'use client';

import { motion } from 'framer-motion';
import ArrowButton from "@/app/reusable/ArrowButton";
import { useState } from "react";

function Gallery2() {
  const [btnHovered, setBtnHovered] = useState(false)
  console.log(`[${new Date().toLocaleTimeString()}] Gallery2 rendered`);

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div 
        className="relative w-full min-h-dvh bg-gray-100 mr-20 my-30 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={rightVariants}
      >
        <motion.img 
          src="./gallery2_img.png"
          className="absolute -top-20 w-150"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        />

        <div className="float-right w-1/2 py-20">
          <motion.h2 
            className="text-2xl text-blue-600 font-bold py-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            Lorem Ipsum
          </motion.h2>

          <motion.h1 
            className="w-130 text-4xl font-bold uppercase py-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <span className="text-blue-600">Lorem</span> ipsum dolor sit amet consectetur. Enim donec.
          </motion.h1>

          <motion.p 
            className="text-xl w-160 py-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 gap-y-10 w-full py-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={gridVariants}
          >
            {[...Array(6)].map((_, idx) => (
              <motion.span 
                key={idx}
                className="text-xl font-bold"
                variants={gridItemVariants}
              >
                Lorem Ipsum
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArrowButton 
              className="shakyButton" 
              btnHovered={btnHovered} 
              setBtnHovered={setBtnHovered} 
              varient={'blue'} 
              placeHolder={'Lorem Ipsum'} 
            />
          </motion.div>
        </div>

        <footer className="absolute bottom-0 left-0 w-9/10 h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></footer>
      </motion.div>
    </>
  )
}

export default Gallery2

