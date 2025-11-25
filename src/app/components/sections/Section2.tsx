'use client';

import { motion } from 'framer-motion';
import ArrowButton from "@/app/reusable/ArrowButton";
import { Phone } from "lucide-react"
import { useState } from "react";

function Section2() {
    const [btnHovered, setBtnHovered] = useState(false)
    console.log(`[${new Date().toLocaleTimeString()}] Section2 rendered`);
    
    const blogs = [
        {
            id: '01',
            description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
            img_path: './blog_img1.webp'
        },
        {
            id: '02',
            description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
            img_path: './blog_img2.webp'
        },
        {
            id: '03',
            description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
            img_path: './blog_img3.webp'
        },
    ]

    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
      },
    };

    const leftVariants = {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
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

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    };

    const staggerContainer = {
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
    <motion.div className="relative">
      <img 
        src='/Capa 1.png' 
        className={`absolute top-60 left-0 w-full h-[200vh] z-0 transform scale-y-125
           bg-no-repeat bg-center `}
      />
      <motion.div 
        className="relative w-11/12 h-dvh flex ml-15 mb-30 shadow-xl z-10 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Left Section */}
        <motion.div 
          className="relative w-1/2 h-dvh p-5"
          variants={leftVariants}
        >
          <motion.div 
            className="text-2xl text-sky-500 pb-5 font-[Inter]"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit
          </motion.div>
          
          <motion.h1 
            className="text-[42px] font-bold pb-5 font-[Roboto_Condensed]"
            variants={itemVariants}
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h1>
          
          <motion.div 
            className="text-xl pb-5"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-y-5 pb-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog) => (
              <motion.div 
                key={blog.id} 
                className="flex gap-x-5 items-center"
                variants={itemVariants}
              >
                <motion.img 
                  src={blog.img_path} 
                  className="w-25"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="w-100">{blog.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-5 flex items-center gap-x-5 w-80"
            variants={itemVariants}
          >
            <ArrowButton btnHovered={btnHovered} setBtnHovered={setBtnHovered} varient={'blue'} placeHolder={'Lorem Ipsum'} />
            <motion.div 
              className="flex gap-x-2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Phone color="blue"/> 
              <div className="text-blue-700 font-bold">1234567890</div> 
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="w-1/2 h-dvh py-5"
          variants={rightVariants}
        >
          <motion.img 
            className="w-120 float-right"
            src="./motorcycle_1.jpg"
            alt="motorcycle"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-r from-blue-900 via-green-600 to-violet-900"></div>
      </motion.div>
      </motion.div>
    </>
  )
}

export default Section2

