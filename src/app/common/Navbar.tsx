'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Logo from "../reusable/Logo"

function Navbar() {
  console.log(`[${new Date().toLocaleTimeString()}] Navbar rendered`);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.div
        className={`
          fixed top-0 left-0 w-full h-20 z-50 px-16 flex justify-between items-center 
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
          }
        `}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Logo/>
        </motion.div>

        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#1959AC] hover:text-blue-700 transition-colors">
                Lorem ipsum
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="cursor-pointer grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <motion.a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                        href="/"
                        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)', transition: { duration: 0.2 } }}
                      >
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          lorem ipsum
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                      </motion.a>
                    </NavigationMenuLink>
                  </li>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#1959AC] hover:text-blue-700 transition-colors">
                Lorem ipsum
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="cursor-pointer grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <motion.a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                        href="/"
                        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)', transition: { duration: 0.2 } }}
                      >
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          Lorem ipsum
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                      </motion.a>
                    </NavigationMenuLink>
                  </li>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#1959AC] hover:text-blue-700 transition-colors">
                Lorem ipsum
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="cursor-pointer grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <motion.a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                        href="/"
                        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)', transition: { duration: 0.2 } }}
                      >
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          lorem ipsum
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                      </motion.a>
                    </NavigationMenuLink>
                  </li>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>Lorem ipsum</motion.div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <motion.div
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className='rounded-lg'
        >
          <Button 
            className="outline-none bg-white px-10 border-none shadow-md transition-colors duration-400 ease-in-out cursor-pointer hover:bg-sky-400" 
            variant="outline"
          >
            Sign In
          </Button>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Navbar
