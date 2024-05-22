import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TbSourceCode } from 'react-icons/tb';

import twitterImage from '@/assets/images/TwitterApp1.png';
import twitterImage2 from '@/assets/images/TwitterApp2.png';
import twitterImage3 from '@/assets/images/twitter3.png';
import twitterImage4 from '@/assets/images/twitter4.png';
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

type Props = {}

function TwitterDetail({}: Props) {

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



  const technologiesArray:LanguageItem[]=[{
    name: 'Prisma',
    path: './textures/prisma.png',
    position: [0,0,0],
    colour:"white"
  }, 
{
  name: 'Next.js',
  path: './textures/next.png',
  colour:"gray",
  position: [0,0,0],
},
{name:'TypeScript',
  path:'./textures/typescript.png',
  position:[0,0,0],
  colour:"#3178C6"
},
{
  name: 'MongoDB',
  path: './textures/mongo.png',
  position: [0,0,0],
  colour:"#303030"
}
]

  return (
    <div className=' min-h-screen'>
      <div className="flex sm:flex-col lg:flex-row lg:justify-around lg:items-center gap-6 py-8">
      <Carousel opts={{
        align: "start",
      }} className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 self-center'>
        <CarouselContent>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={twitterImage} alt={''}/>
          </CarouselItem>
          <CarouselItem >
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={twitterImage2} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={twitterImage3} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={twitterImage4} alt={''}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="sm:flex lg:hidden xl:flex"/>
        <CarouselNext className="sm:flex lg:hidden xl:flex"/>
      </Carousel>
      <div className="flex flex-col gap-2 max-w-xl lg:max-w-sm xl:max-w-lg 2xl:max-w-xl text-white px-1">
        <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className=' text-3xl font-bold'>Twitter Clone</motion.p>
        <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className="sm:text-base 2xl:text-lg">As I said before, this project has been built in order to practice newely learned tools and also learn new tool, which was Prisma in my case. 
          With this project I wanted to prove that I can build a full stack application, know how do it and also know how to use tools I have learned before.
          Generally speaking, I am proud that I could build this project, because it was a milestone towards the next project which was Spotify Clone.
        </motion.p>

             <Link href={'https://github.com/Luftjunkie19/twitter-clone'}>
          <Button className=" flex gap-4">
     Source Code <TbSourceCode size={20}/>
          </Button>
          </Link>

      
      </div>

      </div>
  <div className="flex flex-col gap-2 px-2 text-white">
                 <p  className="text-2xl font-semibold">
          Technologies used
        </p>
          <div  className="flex flex-wrap gap-4">
          {technologiesArray.map((item:LanguageItem, i:any)=>(<div key={i} className='sm:w-24 sm:h-24 xl:h-32 xl:w-32'>
          <MeshCanvas backgroundColour={item.colour} position={item.position} techName={item.name} texturePath={item.path}/>
          </div>))}
          </div>
        </div>
    </div>
  )
}

export default TwitterDetail