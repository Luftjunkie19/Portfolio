import React, { Suspense } from 'react';

import { motion } from 'framer-motion';

import Loader from '../Loader';
import LanguageMesh from '../meshes/LanguageMesh';

type Props = {}

export interface LanguageItem{
  name: string,
  path: string,
  position: [number, number, number],
  colour?:string,
}
function TechSection({}: Props) {

  const ballsVariants={
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
{name:'HTML', path:'./textures/html.png', position:[0, 0, 1], colour:'white'}, 
{name:'CSS', path:'./textures/css.png', position:[2, 0, 1], colour:'#2965f1' },
{name:'Git', path:'./textures/git.png', position:[4, 0, 1], colour:'darkgray' },
{name:"JavaScript", path:'./textures/JavaScript.png', position:[-4, 0, 1], colour:'#f0db4f'},
{name:"NextJS", path:'./textures/next.png', position:[-4, -1.5, 1], colour:'white'},
{name:"NodeJS", path:'./textures/Node.png', position:[-2, -1.5, 1], colour:'#46484a'},
{name:"TypeScript", path:'./textures/typescript.png', position:[0, -1.5, 1], colour:'#358EF1'},
{name:"Firebase", path:'./textures/firebase.png', position:[2, -1.5, 1], colour:'orange'},
{name:"MongoDB", path:'./textures/mongo.png', position:[4, -1.5, 1], colour:'#46484a'},
{name:'Tailwindcss', path:'./textures/tailwind.png', position:[6,-0.75, 1], colour:'#a5f3fc' },
  { name: 'Redux', path: './textures/redux.png', position:[6,-0.75, 1], colour:'#232424' }
]




  return (
    <div id='techs' className='h-fit p-2'>
        <p className=' text-3xl text-white font-semibold'>Technologies, I have learned</p>
      <div className='flex lg:p-6 sm:p-3 sm:gap-8  lg:gap-3 max-w-5xl justify-center items-center m-0 mx-auto flex-wrap'>     
        {languages.map((item, i) => (
          <Suspense fallback={<Loader/>}>

          <motion.div variants={ballsVariants} animate initial={'notviewport'} whileInView={'inview'} viewport={{once:true}} className='lg:w-44 lg:h-44 sm:w-32 sm:h-32'>
            <LanguageMesh backgroundColour={item.colour} techName={item.name} key={i} position={item.position} texturePath={item.path}/>
            <p className=" text-center text-white text-lg">{item.name}</p>
            </motion.div>
          </Suspense>
          ))}
    </div>
    
    </div>
  )
}

export default TechSection