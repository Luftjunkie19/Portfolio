import React, { Suspense } from 'react';

import Image from 'next/image';

import Loader from '@/assets/Loader';
import MeshCanvas from '@/assets/meshes/LanguageMesh';
import { LanguageItem } from '@/assets/sections/TechSection';
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
 const usedTechs:LanguageItem[]=[{
   path: './textures/react.png', 
   name: "React",
   position: [0, 0, 0],
   colour:'#1f1f1f'
 }, {
   name: '',
   path: './textures/redux.png',
   position: [0,0,0],
   colour:'#b8b4b4'
 }, 
 {
  name: '',
  path: './textures/tailwind.png',
  position: [0,0,0],
  colour:'#363434'
}, {
  name: '',
  path: './textures/firebase.png',
  position: [0,0,0],
  colour:'orange'
}]
  return (
    <div className=" min-h-screen">
      <div className="flex sm:flex-col lg:flex-row lg:justify-around lg:items-center gap-6 py-8">
      <Carousel   opts={{
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
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
<div className="flex flex-col gap-2 max-w-xl lg:max-w-sm 2xl:max-w-2xl text-white">
  <p className='text-3xl font-bold'>BookFreak</p>
  <p className='sm:text-sm 2xl:text-lg'>BookFreak is an unique project, which has been a lot of time devoted on. BookFreak's goal is to enable readers and users to freely discuss their opinions about a book, track their reading progress, but also the most read book's category.
    Although BookFreak is a project that has been in development for a long time, it is still in its early stages and promise it will be only better in case of UI and functionalities.
  </p>

  <p className='sm:text-xl 2xl:text-2xl font-semibold'>Used Technologies</p>
<div className="flex gap-4 sm:flex-wrap xl:flex-nowrap">
  {usedTechs.map((item:LanguageItem, i:any)=>(<Suspense key={i} fallback={<Loader/>}>
    <div className=' sm:w-24 sm:h-24 2xl:w-36 2xl:h-36'>
      <MeshCanvas backgroundColour={item.colour} texturePath={item.path} position={item.position} techName={item.name}/>
    </div>
  </Suspense>))}
</div>
</div>
      </div>

<div className="flex flex-col gap-4 p-2 text-white">
  <p className=' text-2xl font-bold'>Description</p>
      <div className="flex gap-2 flex-wrap">
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


      </div>
</div>
      
    </div>
  )
}

export default DetailPage