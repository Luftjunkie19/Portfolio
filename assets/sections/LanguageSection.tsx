import React from 'react';

import { Progress } from '@/components/ui/progress';

import SphereMesh from '../meshes/SphereMesh';

type Props = {}

function LanguageSection({}: Props) {

  return (
      <div className='flex flex-col gap-2'>
            <div className="flex gap-4 items-center justify-center">
              <div className='w-64 h-64'>
                  <SphereMesh texturePath={'./textures/polish.jpg'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="flex flex-col gap-1">
                  <p className="text-4xl font-medium">Polish</p>
                  <p>Proficiency: Native</p>
                  <Progress value={100} />
                  <p>My mother tongue.</p>
              </div>
          </div> 

          <div className="flex gap-4 items-center max-w-[90%] justify-around">
              <div className='w-64 h-64'>
                  <SphereMesh texturePath={'./textures/german.jpg'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="">
                  <p className="text-4xl font-medium">German</p>
                  <p>Proficiency: C1</p>
                  <Progress value={90} />
                  <p>A language that I treat as my second native tongue.</p>
              </div>
          </div>  
           
           <div className="flex gap-4 items-center max-w-[90%] justify-around">
              <div className='w-64 h-64'>
                  <SphereMesh texturePath={'./textures/english.jpg'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="">
                  <p className="text-4xl font-medium">English</p>
                  <p>Proficiency: B2+</p>
                  <Progress value={80} />
                  <p>A language that I started to LEARN 2 years ago.</p>
              </div>
          </div>  

               <div className="flex gap-4 items-center max-w-[90%] justify-around">
              <div className='w-64 h-64'>
                  <SphereMesh texturePath={'./textures/finnish.png'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="">
                  <p className="text-4xl font-medium">Finnish</p>
                  <p>Proficiency: A1</p>
                  <Progress value={10} />
                  <p>A language I started to learn a year ago.</p>
              </div>
          </div>  
    </div>
  )
}

export default LanguageSection