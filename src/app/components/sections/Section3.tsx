'use client';

import { motion } from 'framer-motion';

function Section3() {
    console.log(`[${new Date().toLocaleTimeString()}] Section3 rendered`);
    const blogs = [
        {
            id: '01',
            title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
            description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
            img_path: './section2_logo.webp'
        },
        {
            id: '02',
            title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
            description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
            img_path: './section2_logo.webp'
        },
        {
            id: '03',
            title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
            description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
            img_path: './section2_logo.webp'
        },
    ];

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
          delayChildren: 0.1,
        },
      },
    };

  return (
    <>
      <motion.div 
        className="overflow-hidden relative w-24/25 h-dvh flex ml-15 mb-50 shadow-xl z-10 bg-white"
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
            className="text-xl text-sky-500 pb-5"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-bold pb-5"
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
                className="flex gap-x-5"
                variants={itemVariants}
              >
                <motion.img 
                  src={blog.img_path} 
                  className="w-8 h-8"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <strong className="w-100">{blog.title}</strong>
                  <p className="w-100">{blog.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="w-1/2 h-dvh py-5 flex items-center justify-end"
          variants={rightVariants}
        >
          <motion.img 
            className="w-120" 
            src="./section_2.webp" 
            alt="section"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-r from-blue-900 via-green-600 to-violet-900"></div>
      </motion.div>
    </>
  )
}

export default Section3


        
