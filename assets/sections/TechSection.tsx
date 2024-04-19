import React, { Suspense } from 'react';

import { motion } from 'framer-motion';

import Loader from '../Loader';
import LanguageMesh from '../meshes/LanguageMesh';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter';

type Props = {}

export interface LanguageItem{
  name: string,
  path: string,
  position: [number, number, number],
  colour?:string,
}
function TechSection({}: Props) {

  const variants={
    notviewport:{
      opacity:0,
      y:100,
      scale:0,
      transition:{
        duration:0.5,
        type:'spring',
        bounce:0.6
      }
    },
    inview:{
      opacity:1,
      y:0,
      scale:1,
      transition:{
        duration:0.5,
        type:'spring',
        bounce:0.6
      }
    }
  }

const languages: LanguageItem[]=[
{name:'React (Native)', path:'./textures/react.png', position:[-2, 0, 1], colour:'#232424' }, 
{name:'Git', path:'./textures/git.png', position:[4, 0, 1], colour:'darkgray' },
{name:"NextJS", path:'./textures/next.png', position:[-4, -1.5, 1], colour:'white'},
{name:"NodeJS", path:'./textures/Node.png', position:[-2, -1.5, 1], colour:'#46484a'},
{name:"TypeScript", path:'./textures/typescript.png', position:[0, -1.5, 1], colour:'#358EF1'},
{name:"Firebase", path:'./textures/firebase.png', position:[2, -1.5, 1], colour:'orange'},
]




  return (
    <motion.div variants={variants} whileInView={'inview'} initial={'notviewport'} id='techs' className='p-2'>
      <TypewriterEffectSmooth words={[{text:'The', className:'text-2xl text-white font-semibold' }, {text:'Most', className:'text-2xl text-white font-semibold'}, {text:'Essential', className:'text-2xl text-white font-semibold'},{text:"Technologies", className:'text-2xl text-white font-semibold'}, {text:'I', className:'text-2xl text-white font-semibold'}, {text:'have', className:'text-2xl text-white font-semibold'}, {text:'learned.', className:'text-2xl text-white font-semibold'}]}/>
      
      <div className='flex lg:p-6 sm:p-3 sm:gap-8  lg:gap-3 max-w-5xl justify-center items-center m-0 mx-auto lg:flex-nowrap  sm:flex-wrap'>     
        {languages.map((item, i) => (
          <Suspense key={i} fallback={<Loader/>}>

          <div key={i} className='lg:w-40 lg:h-40 sm:w-24 sm:h-24'>
            <LanguageMesh backgroundColour={item.colour} techName={item.name} key={i} position={item.position} texturePath={item.path}/>
            <p className=" text-center text-white text-lg">{item.name}</p>
            </div>
          </Suspense>
          ))}
    </div>
    
    </motion.div>
  )
}

export default TechSection