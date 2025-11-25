'use client';

import { motion } from 'framer-motion';
import ArrowButton from "@/app/reusable/ArrowButton";
import { useState } from "react";

function Gallery() {
  const [btnHovered, setBtnHovered] = useState(false)
  console.log(`[${new Date().toLocaleTimeString()}] Gallery rendered`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { scale: 1.08, transition: { duration: 0.3 } },
  };

  const galleryImages1 = [
    { src: './gallery_img1.png', colSpan: 1 },
    { src: './gallery_img2.png', colSpan: 1 },
    { src: './gallery_img3.png', colSpan: 3 },
  ];

  const galleryImages2 = [
    { src: './gallery_img4.png', colSpan: 1 },
    { src: './gallery_img5.png', colSpan: 3 },
    { src: './gallery_img6.png', colSpan: 4 },
    { src: './gallery_img7.png', colSpan: 1 },
    { src: './gallery_img8.png', colSpan: 3 },
  ];

  return (
    <>
    <motion.div className="relative">
      <img
        src='/Gallery_Graphic.png'
        className={`absolute -top-150 left-0 w-full h-[420vh] z-0 
          bg-no-repeat bg-center bg-cover`}
      />
    
      <motion.div 
        className="grid grid-cols-2 gap-x-10 w-full h-[112vh] py-20 px-30 bg-gray-100 my-20 overflow-hidden z-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Left Column */}
        <motion.div className="h-dvh grid grid-cols-4 gap-10">
          {/* Text Section */}
          <motion.div className="col-span-3 h-110" variants={containerVariants}>
            <motion.h2 className="text-2xl text-gray-600" variants={textVariants}>
              NO LIMITS
            </motion.h2>
            <motion.h1 className="text-[42px] text-gray-900 font-bold py-8 leading-[100%] uppercase" variants={textVariants}>
              Lorem ipsum dolor sit amet
            </motion.h1>
            <motion.p className="leading-[25px] text-lg font-normal w-[460px] height-[75px]" variants={textVariants}>
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </motion.p>
            <motion.div variants={textVariants}>
              <ArrowButton className="my-10" btnHovered={btnHovered} setBtnHovered={setBtnHovered} varient={'blue'} placeHolder={'Lorem Ipsum'} />
            </motion.div>
          </motion.div>

          {/* Images - Right Side */}
          {galleryImages1.map((img, idx) => (
            <motion.div
              key={idx}
              className="flex items-end"
              style={{ gridColumn: `span ${img.colSpan}` }}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              animate="rest"
            >
              <motion.img 
                src={img.src} 
                className="object-contain"
                variants={imageHover}
                initial="rest"
                animate="rest"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div className="h-dvh grid grid-cols-4 gap-10">
          {galleryImages2.map((img, idx) => (
            <motion.div
              key={idx}
              className="flex items-end"
              style={{ gridColumn: `span ${img.colSpan}` }}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover="hover"
              animate="rest"
            >
              <motion.img 
                src={img.src} 
                className="object-contain"
                variants={imageHover}
                initial="rest"
                animate="rest"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </motion.div>
    </>
  )
}

export default Gallery

