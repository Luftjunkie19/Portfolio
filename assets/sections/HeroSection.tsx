import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

import Scene from '../Scene';

function HeroSection() {
  return (
      <div className='flex py-4 gap-12 w-11/12 items-center px-2 justify-between my-0 mx-auto'>
          <div className="flex flex-col gap-6 w-1/2 text-white">
              <p className="text-4xl font-bold">Hello, I am <Typewriter loop typeSpeed={200} words={['Fullstack Developer', 'Programming Enthusiast', 'Development Enthusiast']}/></p>
            <p>Since June 2022, I am constantly expanding my skills and knowledge about programming. In that mentioned moment, I haven't known, what will my future be. Currently I am aware, that me and programming have too much in common to let it just be.</p>
          </div>
          <div className="w-1/2 h-[32rem]">
          <Scene/>
          </div>
    </div>
  )
}

export default HeroSection