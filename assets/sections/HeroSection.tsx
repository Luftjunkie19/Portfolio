import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

import Scene from '../Scene';

function HeroSection() {
  return (
      <div className='flex py-4 gap-12 w-11/12 items-center px-2 justify-between my-0 mx-auto'>
          <div className="flex flex-col gap-6 w-1/2 text-white">
              <p className="text-4xl font-bold">Hello, I am <Typewriter loop typeSpeed={200} words={['Fullstack Developer', 'Programming Enthusiast', 'Development Enthusiast']}/></p>
            <p>19-year old fullstack developer, passioned about programming, technologies and self improvement. Since July 2022 as I started my 
              journey in the world of programming, I have been learning and improving my skills. Until now I managed to release my own project on Web as on mobile, and also create 2 clone apps to prove my UI but also programming skills.
              More over, it does not mean that those are the only project's I've done. Through out my journey I have built many projects either from the course or just in order to practice. But those mentioned one are the most essential for me.
            </p>
          </div>
          <div className="w-1/2 h-[32rem]">
          <Scene/>
          </div>
    </div>
  )
}

export default HeroSection