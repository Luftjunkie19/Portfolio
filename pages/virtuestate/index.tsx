import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineWeb } from 'react-icons/md';

import virtuEstate1 from '@/assets/images/virtuestate1.png';
import virtuEstate2 from '@/assets/images/virtuestate2.png';
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

function VirtuEstateDetailed({ }: Props) {
   const usedTechs: LanguageItem[] = [{
    path: './textures/next.png',
    name: "NextJS",
    position: [0, 0, 0],
    colour: '#ffff'
  },
  {
    name: 'TailwindCSS',
    path: './textures/tailwind.png',
    position: [0, 0, 0],
    colour: '#363434'
  }, {
    name: 'Supabase',
    path: './textures/supabase.png',
    position: [0, 0, 0],
    colour: 'black'
    },
  {
    name: 'Square',
    path: './textures/square.png',
    position: [0, 0, 0],
    colour: 'white'
    },
  
    ];
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

  return (
      <div className='min-h-screen w-full'>
  <div className="flex sm:flex-col lg:flex-row lg:justify-around lg:items-center gap-6 py-8">
      <Carousel opts={{
        align: "start",
      }} className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 self-center'>
        <CarouselContent>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-scale-down w-full h-full rounded-lg'  src={virtuEstate1} alt={''}/>
          </CarouselItem>
          <CarouselItem >
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-scale-down w-full h-full rounded-lg'  src={virtuEstate2} alt={''}/>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious className="sm:flex lg:hidden xl:flex"/>
        <CarouselNext className="sm:flex lg:hidden xl:flex"/>
      </Carousel>
<div className="flex flex-col gap-2 max-w-xl lg:max-w-sm 2xl:max-w-2xl text-white sm:px-1 lg:px-0">
  <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className='text-3xl font-bold'>VirtuEstate</motion.p>
  <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className='sm:text-base 2xl:text-lg'>
    VirtuEstate is a project, that has been created in order to use my ThreeJS knowledge in practice. This Project tends to become a revolution for Marketplace apps, because of the ability to show more over what a certain property looks like.</motion.p>

          <motion.div viewport={{once:true}} initial='hidden' whileInView={'visible'} variants={buttonsVariants} className="flex gap-2 sm:justify-center md:justify-start"> 
            <Link  href={'https://github.com/Luftjunkie19/RealEstate-3D-marketplace'}>
            <Button className='flex gap-2 items-center'>Source Code <MdOutlineWeb size={24}/></Button>
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


    </div>
  )
}

export default VirtuEstateDetailed