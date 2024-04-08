import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

import Scene from '../Scene';

function HeroSection() {
  return (
      <div className='flex py-4 gap-4 w-fit  px-2 justify-between my-0 mx-auto'>
          <div className="flex flex-col gap-6 w-1/2 text-white">
              <p className="text-4xl font-bold">Hello, I am <Typewriter loop typeSpeed={200} words={['Developer', 'Programming Enthusiast']}/></p>
            <p>Since June 2022 I am constantly expanding my skills and knowledge about programming         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit earum deserunt distinctio, ipsum reprehenderit consequatur voluptas? Inventore facere accusamus vel. Nisi nam repellat porro necessitatibus adipisci voluptatem accusantium maiores quae nobis, sequi fugiat nulla temporibus ullam, magni amet dolor ea!</p>

          </div>
          <div className="w-1/2 min-h-96">
          <Scene/>
          </div>
    </div>
  )
}

export default HeroSection