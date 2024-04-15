import React from 'react';

import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {}

function FAQSection({ }: Props) {
  
const variants= {
  hidden:{
    scale:0,
    opacity:0,
    transition:{
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  },
  visible:{
    scale:1,
    opacity:1,
    transition:{
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  }
}


  return (
    <div className='flex sm:flex-col py-4 md:flex-row justify-around items-center text-white'>
<motion.div variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className="flex flex-col gap-4 p-2">
    <p className="sm:text-4xl lg:text-xl xl:text-5xl font-bold">FAQ</p>
    <p className='max-w-md '>Questions that are likely to be asked already answered, so you would not have to waste time and start a real talk.</p>
</motion.div>

      <motion.div className='sm:w-full max-w-lg' variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}}>
        <Accordion collapsible  type='single' className='w-full h-full'>
   <AccordionItem value={'First'}>
    <AccordionTrigger>Why should you choose me?</AccordionTrigger>
    <AccordionContent>
        <p className='w-full'>Because although many obstacles from my life was able to learn all those tools by myself and hopefully will learn much more and much faster.</p>
    </AccordionContent>
   </AccordionItem>
   <AccordionItem value={'Second'}>
    <AccordionTrigger>Where is my uniqueness?</AccordionTrigger>
    <AccordionContent>
        <p className='w-full'>I learn quick and adjust to the changes fast enough to bring the best results I am able to.</p>
    </AccordionContent>
   </AccordionItem>
   <AccordionItem value={'Third'}>
    <AccordionTrigger>What can I offer you?</AccordionTrigger>
    <AccordionContent>
        <p className='w-full'>I can offer you, that as you will trust me, I will put all my effort to bring the best results.</p>
    </AccordionContent>
   </AccordionItem>
</Accordion>
      </motion.div>

    </div>
  )
}

export default FAQSection