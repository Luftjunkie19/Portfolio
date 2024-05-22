import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TbSourceCode } from 'react-icons/tb';

import spotifyImage from '@/assets/images/SpotifyApp1.png';
import spotifyImage2 from '@/assets/images/SpotifyApp2.png';
import spotifyImage3 from '@/assets/images/SpotifyApp3.png';
import spotifyImage4 from '@/assets/images/SpotifyApp4.png';
import spotifyImage5 from '@/assets/images/SpotifyApp5.png';
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

function SpotifyDetail({}: Props) {
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
},
{
  name: 'Firebase',
  path: './textures/firebase.png',
  position: [0,0,0],
  colour:"orange"
},
{
  name: 'Stripe',
  path: './textures/stripe.png',
  position: [0,0,0],
  colour:"#7f7bfc"
}

]



  return (
    <div className=' min-h-screen'>
    <div className="flex sm:flex-col lg:flex-row lg:justify-around lg:items-center gap-6 py-8">
    <Carousel opts={{
      align: "start",
    }} className='lg:w-64 self-center lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80'>
      <CarouselContent>
        <CarouselItem>
          <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={spotifyImage} alt={''}/>
        </CarouselItem>
        <CarouselItem >
          <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={spotifyImage2} alt={''}/>
        </CarouselItem>
        <CarouselItem>
          <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={spotifyImage3} alt={''}/>
        </CarouselItem>
        <CarouselItem>
          <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={spotifyImage4} alt={''}/>
        </CarouselItem>
        <CarouselItem>
          <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 2xl:w-80 2xl:h-80 object-cover rounded-lg'  src={spotifyImage5} alt={''}/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex lg:hidden xl:flex"/>
      <CarouselNext className="sm:flex lg:hidden xl:flex"/>
    </Carousel>
    <div className="flex flex-col gap-2 max-w-xl lg:max-w-sm 2xl:max-w-2xl text-white px-1">
      <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}} className=' text-3xl font-bold'>Spotify Clone</motion.p>
      <motion.p variants={variants} initial="hidden" whileInView={'visible'} viewport={{once:true}}  className='sm:text-base 2xl:text-lg'>This Project is a clone of the Spotify website. It is a full stack application that uses NextJs as a main framework, and TailwindCSS for styling and MongoDB as database. But to the project is also attached the stripe payment system, so that the user can pay for the premium subscription.</motion.p>
    
     <Link href={'https://github.com/Luftjunkie19/spotify-cloen'}>
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

export default SpotifyDetail