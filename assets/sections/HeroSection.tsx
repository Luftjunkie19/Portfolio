import React, { Suspense } from 'react';
import {motion} from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import Scene from '../Scene';
import Loader from '../Loader';

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
      <div className='flex sm:flex-col-reverse lg:flex-row py-4 gap-12 lg:w-11/12 lg:items-center px-2 lg:justify-between lg:my-0 lg:mx-auto'>
          <motion.div variants={variants} initial={'outview'} whileInView={'inview'} viewport={{once:true}} animate className="flex flex-col gap-6 lg:w-1/2 text-white">
              <p className="text-4xl font-bold">Hello, I am <Typewriter loop typeSpeed={200} words={['Fullstack Developer', 'Programming Enthusiast', 'Development Enthusiast']}/></p>
            <p>19-year old fullstack developer, passioned about programming, technologies and self improvement. Since July 2022 as I started my 
              journey in the world of programming, I have been learning and improving my skills. Until now I managed to release my own project on Web as on mobile, and also create 2 clone apps to prove my UI but also programming skills.
              More over, it does not mean that those are the only project's I've done. Through out my journey I have built many projects either from the course or just in order to practice. But those mentioned one are the most essential for me.
            </p>
          </motion.div>
          <div className="sm:w-full lg:w-1/3 xl:w-1/2 h-[28rem]">
            <Suspense  fallback={<Loader/>}>

          <Scene/>
            </Suspense>
          </div>
    </div>
  )
}

export default HeroSection