'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"

function BlogPosts() {
    console.log(`[${new Date().toLocaleTimeString()}] BlogPosts rendered`);
    
    const blogPosts = [
        {
            id: '01',
            img_path: './blog_post_img1.png',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            direction: 'right',
            description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
        },
        {
            id: '02',
            img_path: './blog_post_img2.webp',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            direction: 'left',
            description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
        },
        {
            id: '03',
            img_path: './blog_post_img3.webp',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            direction: 'right',
            description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
        },
        {
            id: '04',
            img_path: './blog_post_img4.webp',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            direction: 'left',
            description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
        },
    ]
    
    const headerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const cardVariantsRight = {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring' as const,
          damping: 12,
          stiffness: 100,
        },
      },
    };

    const cardVariantsLeft = {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring' as const,
          damping: 12,
          stiffness: 100,
        },
      },
    };

    const cardHover = {
      rest: { y: 0, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' },
      hover: { y: -8, boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.15)' },
    };
    
  return (
    <>
    <motion.div className="relative">
    <img 
        src='/Blog_Post_Graphic.png'
        className={`absolute -top-50 left-0 w-full h-[220vh] z-0 
           bg-no-repeat bg-center bg-cover`}
      />
      <motion.div 
        className="w-full h-200vh px-15"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col gap-y-5 w-150"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-xl text-blue-600"
            variants={headerVariants}
          >
            Lorem ipsum dolor sit amet
          </motion.h3>
          <motion.h1 
            className="text-4xl font-bold"
            variants={headerVariants}
          >
            LOREM IPSUM dolor sit
          </motion.h1>
          <motion.p variants={headerVariants}>
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 gap-y-10 py-20 px-60"
          variants={containerVariants}
        >
          {blogPosts.map((blogPost) => (
            <motion.div 
              key={blogPost.id} 
              className="w-90 h-110 rounded-xl overflow-hidden z-10 bg-white shadow-md cursor-pointer"
              variants={blogPost.direction === 'right' ? cardVariantsRight : cardVariantsLeft}
            >
              <motion.img 
                src={blogPost.img_path}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h2 className="font-bold px-3 py-2">{blogPost.title}</h2>
              <p className="px-3">{blogPost.description}</p>
              <Button variant={'link'} className="text-blue-600">Learn More</Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </motion.div>
      
    </>
  )
}

export default BlogPosts

