import React from 'react';

import { Progress } from '@/components/ui/progress';

import SphereMesh from '../meshes/SphereMesh';

type Props = {}

function LanguageSection({}: Props) {

  return (
    <>
    <p className=' text-2xl font-semibold'>Languages, I know.</p>
      <div className=' grid lg:grid-cols-2 gap-6'>
            <div className="flex gap-4 items-center max-w-[90%] justify-between">
              <div className='w-48 h-48'>
                  <SphereMesh texturePath={'./textures/polish.jpg'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium">Polish</p>
                  <p>Proficiency: Native</p>
                  <Progress className='w-64' value={100} />
                  <p>My mother tongue.</p>
              </div>
          </div> 

          <div className="flex gap-4 items-center max-w-[90%] justify-between">
              <div className='w-48 h-48'>
                  <SphereMesh texturePath={'./textures/german.jpg'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium">German</p>
                  <p>Proficiency: C1</p>
                  <Progress className='w-64' value={90} />
                  <p>A language that I treat as my second native tongue, because I lived in Germany for 2/3 years where I've got the contact with the native Language.</p>
              </div>
          </div>  
           
           <div className="flex gap-4 items-center max-w-[90%] justify-between">
              <div className='w-48 h-48'>
                  <SphereMesh texturePath={'./textures/english.jpg'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium">English</p>
                  <p>Proficiency: B2+</p>
                  <Progress className='w-64' value={80} />
                  <p>A language that I started really to learn 2 years ago, meaning that since that moment I have enhanced my English skills considerably.</p>
              </div>
          </div>  

               <div className="flex gap-4 items-center max-w-[90%] justify-between">
              <div className='w-48 h-48'>
                  <SphereMesh texturePath={'./textures/finnish.png'} position={[0,0,0]} techName={'German'}/>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium">Finnish</p>
                  <p>Proficiency: A1</p>
                  <Progress className='w-64' value={10} />
                  <p>A language I started to learn a year ago. In order to know more than 2 foreign languages and also to know better the culture.</p>
              </div>
          </div>  
    </div>
    </>
  )
}

export default LanguageSection