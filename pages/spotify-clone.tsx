import React from 'react';

import Image from 'next/image';

import spotifyImage from '@/assets/images/spotify.png';
import spotifyImage2 from '@/assets/images/spotify2.png';
import spotifyImage3 from '@/assets/images/spotify3.png';
import spotifyImage4 from '@/assets/images/spotify4.png';
import spotifyImage5 from '@/assets/images/spotify5.png';
import MeshCanvas from '@/assets/meshes/LanguageMesh';
import { LanguageItem } from '@/assets/sections/TechSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Props = {}

function SpotifyDetail({}: Props) {

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
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
    <div className="flex flex-col gap-2 max-w-xl lg:max-w-sm 2xl:max-w-2xl text-white">
      <p className=' text-3xl font-bold'>Spotify Clone</p>
      <p className='sm:text-sm 2xl:text-lg'>This Project is a clone of the Spotify website. It is a full stack application that uses NextJs as a main framework, and TailwindCSS for styling and MongoDB as database. But to the project is also attached the stripe payment system, so that the user can pay for the premium subscription.</p>
      <p>
      </p>

      <div className="flex flex-col gap-2">
        <p className='text-2xl font-bold'>Technologies used</p>
        <div className="flex flex-wrap gap-4">

        {technologiesArray.map((item:LanguageItem, i:any)=>(<div className='sm:w-24 sm:h-24 xl:h-32 xl:w-32'>
        <MeshCanvas backgroundColour={item.colour} position={item.position} techName={item.name} texturePath={item.path}/>
        </div>))}
        </div>
      </div>
    </div>

    </div>
  </div>
  )
}

export default SpotifyDetail