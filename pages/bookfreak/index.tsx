import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaMobile } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';

import MeshCanvas from '@/assets/meshes/LanguageMesh';
import { LanguageItem } from '@/assets/sections/TechSection';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import bookfreakImage from '../../assets/images/bookfreak.png';
import bookSc1 from '../../assets/images/BookFreakSc1.png';
import bookSc2 from '../../assets/images/BookFreakSc2.png';
import bookSc3 from '../../assets/images/BookFreakSc3.png';
import bookSc4 from '../../assets/images/BookFreakSc4.png';

type Props = {}

function DetailPage({}: Props) {
  const usedTechs: LanguageItem[] = [{
    path: './textures/react.png',
    name: "React",
    position: [0, 0, 0],
    colour: '#1f1f1f'
  }, {
    name: '',
    path: './textures/redux.png',
    position: [0, 0, 0],
    colour: '#b8b4b4'
  },
  {
    name: '',
    path: './textures/tailwind.png',
    position: [0, 0, 0],
    colour: '#363434'
  }, {
    name: '',
    path: './textures/firebase.png',
    position: [0, 0, 0],
    colour: 'orange'
    }];
  
  const variants= {
    hidden: {
      x: -100,
      y:100,
    scale:0,
    opacity:0,
    transition:{
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  },
    visible: {
         x: 0,
      y:0,
    scale:1,
    opacity:1,
    transition:{
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  }
}

const buttonsVariants={
   hidden: {
      x: -100,
      y:0,
    scale:0,
    opacity:0,
    transition:{
      when:"afterChildren",
   staggerChildren: 0.3,
        delayChildren: 0.3,
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  },
    visible: {
         x: 0,
      y:0,
    scale:1,
    opacity:1,
    transition:{
       staggerChildren: 0.3,
        delayChildren: 0.3,
       when: "beforeChildren",
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  }
  }
 

  
  const item = {
  hidden: { opacity: 0, scale:0 },
  show: { opacity: 1, scale:1 }
}


  
  return (
    <div className=" min-h-screen">
      <div className="flex sm:flex-col lg:flex-row lg:justify-around lg:items-center gap-6 py-8">
      <Carousel opts={{
        align: "start",
      }} className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 self-center'>
        <CarouselContent>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={bookfreakImage} alt={''}/>
          </CarouselItem>
          <CarouselItem >
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={bookSc1} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={bookSc2} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={bookSc3} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={bookSc4} alt={''}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="sm:flex lg:hidden xl:flex"/>
        <CarouselNext className="sm:flex lg:hidden xl:flex"/>
      </Carousel>
<div className="flex flex-col gap-2 max-w-xl lg:max-w-sm 2xl:max-w-2xl text-white sm:px-1 lg:px-0">
  <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className='text-3xl font-bold'>BookFreak</motion.p>
  <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className='sm:text-base 2xl:text-lg'>BookFreak is an unique project, which has been a lot of time devoted on. BookFreak's goal is to enable readers and users to freely discuss their opinions about a book, track their reading progress, but also the most read book's category.
    Although BookFreak is a project that has been in development for a long time, it is still in its early stages and promise it will be only better in case of UI and functionalities.
  </motion.p>

          <motion.div viewport={{once:true}} initial='hidden' whileInView={'visible'} variants={buttonsVariants} className="flex gap-2 sm:justify-center md:justify-start"> 
            <Link  href={'https://github.com/Luftjunkie19/bookfreak-project'}>
            <Button className='flex gap-2 items-center'>Web Code <MdOutlineWeb size={24}/></Button>
            </Link>

             <Link  href={'https://github.com/Luftjunkie19/bookfreak-mobile'}>
            <Button className='flex gap-2 items-center'>Mobile Code <FaMobile size={24}/></Button>
            </Link>
</motion.div>
  
</div>

      </div>
  <div className="flex flex-col gap-2 px-2 text-white">
                     <p className="text-2xl font-semibold">
          Technologies used
        </p>
          <div  className="flex flex-wrap gap-4">
          {usedTechs.map((item:LanguageItem, i:any)=>(<div key={i} className='sm:w-24 sm:h-24 xl:h-32 xl:w-32'>
          <MeshCanvas backgroundColour={item.colour} position={item.position} techName={item.name} texturePath={item.path}/>
          </div>))}
          </div>
        </div>

<div className="flex flex-col gap-4 p-2 text-white">
  <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className=' text-2xl font-bold'>Description</motion.p>
      <motion.div viewport={{once:true}} initial='hidden' whileInView={'visible'} variants={buttonsVariants} className="flex gap-2 flex-wrap">
        <div className="max-w-xl flex flex-col gap-2">
      <p className='font-bold text-2xl'>
  Why is BookFreak an unique project for me?
  </p>
  <p className='sm:text-sm 2xl:text-base'>Firstly, it is the first project that I started to build using React. Secondly, as far as the project development has started on Februrary 2023, and might not look as it was. What is worth emphasizing is that I personally had many obstacles while creating this project.</p>
        </div>
        <div className=" max-w-xl flex flex-col gap-2">
        <p className=' font-bold text-2xl'>What Obstacles did I face?</p>
<p className='sm:text-sm 2xl:text-base'>  In order to focus myself on the project I had to neglect the school life and so on, in meanwhile at the time of the very beginning of the project I witnessed 2 burials. First one was my grandfather's burial, the second was the burial of my dog, I had to put down. Both burials were in March.
    Then I had issues related to my school, because in order to pass the class I had to pass the classification exam in August, which I had to prepare myself to.
    So the real work started from a half of September and the work on a web version terminated on January 15th 2024, because I started that time the mobile version, where the work ended up on March 2024.</p>
        </div>


      </motion.div>
</div>
      
    </div>
  )
}

export default DetailPage