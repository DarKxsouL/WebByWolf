'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FAQs() {
    console.log(`[${new Date().toLocaleTimeString()}] FAQs rendered`);
    const questions = [
        {
            id: '01',
            text: 'Lorem ipsum dolor sit amet consectetur?',
            description: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.'
        },
        {
            id: '02',
            text: 'Lorem ipsum dolor sit amet consectetur?',
            description: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.'
        },
        {
            id: '03',
            text: 'Lorem ipsum dolor sit amet consectetur?',
            description: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.'
        },
        {
            id: '04',
            text: 'Lorem ipsum dolor sit amet consectetur?',
            description: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.'
        },
        {
            id: '05',
            text: 'Lorem ipsum dolor sit amet consectetur?',
            description: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.'
        },
    ];

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

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    };

  return (
    <>
      <motion.div 
        className="w-full min-h-dvh bg-gray-100 px-15 py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl font-bold pb-20"
          variants={titleVariants}
        >
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </motion.h1>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {questions.map((question) => (
              <motion.div
                key={question.id}
                variants={itemVariants}
              >
                <AccordionItem
                  value={question.id}
                  className="relative border-t-2 py-10"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col gap-2 text-left hover:text-blue-600 transition-colors">
                      <div className="font-bold">{question.id}</div>
                      <div className="text-sm">{question.text}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {question.description}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </>
  )
}

export default FAQs


