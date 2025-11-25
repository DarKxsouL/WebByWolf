
'use client';

import { motion } from 'framer-motion';

function Partners() {
  console.log(`[${new Date().toLocaleTimeString()}] Partners rendered`);

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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div 
        className="w-full h-dvh flex flex-col justify-center items-center px-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl font-bold text-center w-140 py-15"
          variants={titleVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
        </motion.h1>

        {/* First Row - Slide from Right */}
        <motion.div 
          className="flex justify-between w-full"
          variants={containerVariants}
        >
          {[
            './Hero_MotoCorp.svg 1.png',
            './Honda_Logo.svg 1.png',
            './Bajaj-Auto-Logo 1.png',
            './TVS_Motor_Company_Logo 1.png'
          ].map((src, idx) => (
            <motion.img 
              key={idx}
              src={src} 
              className="py-8 h-30 w-auto object-contain cursor-pointer"
              variants={imageHover}
              whileHover="hover"
              initial="rest"
              animate="rest"
              alt="" 
            />
          ))}
        </motion.div>

        {/* Second Row - Slide from Left */}
        <motion.div 
          className="flex justify-between w-full"
          variants={containerVariants}
        >
          {[
            './royal-enfield-logo-2014-present-1024x742 1.png',
            './Yamaha_Company.svg 1.png',
            './KTM-Logo.svg 1.png',
            './AtherLogo 1.png'
          ].map((src, idx) => (
            <motion.img 
              key={idx}
              src={src} 
              className="py-8 h-30 w-auto object-contain cursor-pointer"
              variants={imageHover}
              whileHover="hover"
              initial="rest"
              animate="rest"
              alt="" 
            />
          ))}
        </motion.div>

        {/* Third Row - Slide from Right */}
        <motion.div 
          className="flex justify-between w-full"
          variants={containerVariants}
        >
          {[
            './Ola-Electric 1.png',
            './Revolt.svg 1.png',
            './Ultraviolette_Logo 1.png',
            './Tork_Motors.svg 1.png'
          ].map((src, idx) => (
            <motion.img 
              key={idx}
              src={src} 
              className="py-8 h-30 w-auto object-contain cursor-pointer"
              variants={imageHover}
              whileHover="hover"
              initial="rest"
              animate="rest"
              alt="" 
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Partners

