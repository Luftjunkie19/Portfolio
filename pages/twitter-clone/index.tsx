import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

import twitterImage from '@/assets/images/twitter1.png'
import twitterImage2 from '@/assets/images/twitter2.png'
import twitterImage3 from '@/assets/images/twitter3.png'
import twitterImage4 from '@/assets/images/twitter4.png'
import { LanguageItem } from '@/assets/sections/TechSection'
import MeshCanvas from '@/assets/meshes/LanguageMesh'
type Props = {}

function TwitterDetail({}: Props) {

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
      <div className="flex sm:flex-col lg:flex-row justify-around lg:items-center gap-6 py-6">
      <Carousel opts={{
        align: "start",
      }} className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 self-center'>
        <CarouselContent>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 object-cover rounded-lg'  src={twitterImage} alt={''}/>
          </CarouselItem>
          <CarouselItem >
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 object-cover rounded-lg'  src={twitterImage2} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 object-cover rounded-lg'  src={twitterImage3} alt={''}/>
          </CarouselItem>
          <CarouselItem>
            <Image className='lg:w-64 lg:h-64 sm:w-52 sm:h-52 object-cover rounded-lg'  src={twitterImage4} alt={''}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
      <div className="text-white max-w-md flex flex-col gap-2">
        <p className=' text-3xl font-bold'>Twitter Clone</p>
        <p>As I said before, this project has been built in order to practice newely learned tools and also learn new tool, which was Prisma in my case. 
          With this project I wanted to prove that I can build a full stack application, know how do it and also know how to use tools I have learned before.
          Generally speaking, I am proud that I could build this project, because it was a milestone towards the next project which was Spotify Clone.
        </p>

        <div className="flex flex-col gap-2">
          <p className='text-2xl font-bold'>Technologies used</p>
          <div className="flex flex-wrap gap-4">

          {technologiesArray.map((item:LanguageItem, i:any)=>(<div className='w-24 h-24'>
          <MeshCanvas backgroundColour={item.colour} position={item.position} techName={item.name} texturePath={item.path}/>
          </div>))}
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default TwitterDetail