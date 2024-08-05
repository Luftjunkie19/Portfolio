import React, { Suspense } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

import image from '@/public/textures/astronout.png';
import classes from '@/styles/me.module.css';

import Loader from '../Loader';
import Scene from '../Scene';

function HeroSection() {

  const variants={
    outview:{
     scale:0,
     opacity:0,
      x:-100,
      y:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }

    },
    inview:{
      scale:1,
      opacity:1,
      x:0,
      y:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }
  return (
    <div className={`flex lg:h-[70vh] xl:h-[80vh] sm:flex-col-reverse lg:flex-row py-4 gap-8 lg:max-w-7xl lg:items-center px-2 sm:jutify-center lg:justify-around 2xl:justify-between  lg:my-0 lg:mx-auto relative top-0 left-0`}>
                  <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

          <motion.div variants={variants} initial={'outview'} whileInView={'inview'} viewport={{once:true}} animate className="flex flex-col gap-6 max-w-xl lg:w-1/2 text-white">
              <p className="text-4xl font-bold">Hello, I am <Typewriter loop typeSpeed={200} words={['Fullstack Developer', 'Programming Enthusiast', 'Development Enthusiast']}/></p>
            <p className="text-xl">19-year old fullstack developer, passioned about programming, technologies and self improvement. Since July 2022 as I started my 
              journey in the world of programming, I have been learning and improving my skills. And I think we can make projects out of space.
            </p>
          </motion.div>
          <div className={`w-80 h-80 sm:self-center  relative top-0 left-0`}>
            <Suspense  fallback={<Loader/>}>
          <Scene/>
  
<Image width={264} height={264} className={`w-52 -translate-y-1/2 -translate-x-1/2 absolute h-52 top-1/4 left-1/4 object-cover object-top ${classes.meBg}`} src={image} alt=''/>

            </Suspense>
          </div>
    </div>

  )
}

export default HeroSection