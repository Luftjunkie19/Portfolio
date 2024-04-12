import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

type Props = {}

function FAQSection({}: Props) {
  return (
    <div className='flex justify-around items-center'>
<div className="">
    <p className="text-xl font-bold">FAQ</p>
    <p className='max-w-md'>Questions that are likely to be asked already answered, so you would not have to waste time and start a real talk.</p>
</div>

<Accordion collapsible  type='single' className=' lg:w-1/3'>
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
</Accordion>
    </div>
  )
}

export default FAQSection