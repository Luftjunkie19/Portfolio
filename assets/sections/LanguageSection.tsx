import React, { Suspense } from 'react';

import { motion } from 'framer-motion';

import { Progress } from '@/components/ui/progress';

import Loader from '../Loader';
import SphereMesh from '../meshes/SphereMesh';

type Props = {}

function LanguageSection({}: Props) {

interface languageSection{
  path: string;
  name: string;
  proficiency: string;
  description: string;
  progress: number;
}

const variants= {
  hidden:{
    scale:0,
    opacity:0,
    transition:{
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  },
  visible:{
    scale:1,
    opacity:1,
    transition:{
      duration:0.7,
      type:"spring",
      bounce:0.5
    }
  }
}

const numberGrowth = (endNumber: number) => {
  let number = 0;

  const interval = setInterval(() => {
    if (number < endNumber) {
      number++;
    } else {
      clearInterval(interval);
    }
  }, 100);

  return number;
}

const languages: languageSection[] = [{
  path:'./textures/polish.jpg',
  name: 'Polish',
  proficiency: 'Native',
  description: 'My mother tongue. A language, which I broughtup with and is my first language basically.',
  progress:100
},
 {path:'./textures/german.jpg', name:'German', 
 proficiency:'C1', 
 progress:90,
 description:`A language that I treat as my second native tongue, because I lived in Germany for 2/3 years where I've got the contact with the native Language.`},  
{  path: './textures/english.jpg',
progress:80,
name: 'English',
proficiency: 'B2+',
description: `A language that I started really to learn 2 years ago, meaning that since that moment I have enhanced my English skills considerably.`
}, {
  path: './textures/finnish.png',
  name: 'Finnish',
  proficiency: 'A1',
  progress:10,
  description: 'A language I started to learn a year ago. In order to know more than 2 foreign languages and also to know better the culture.'
},]

  return (
    <>
    <p id='languages' className=' text-2xl font-semibold text-white'>Languages, I know.</p>
      <div className=' grid xl:grid-cols-2 gap-6 text-white'>
        {languages.map((item:languageSection, i)=>(<div key={i} className="flex sm:flex-col lg:max-w-[90%] lg:flex-row gap-4 lg:items-center p-2">
            <Suspense key={i} fallback={<Loader/>}>
              <div key={i} className='w-48 h-48'>
                  <SphereMesh texturePath={item.path} position={[0,0,0]} techName={item.name}/>
              </div>
            </Suspense>

              <motion.div variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once:true}} className="flex flex-col gap-2 max-w-md">
                  <p className="text-4xl font-medium">{item.name}</p>
                  <p>Proficiency: {item.proficiency}</p>
                  <Progress className='w-64' value={item.progress} />
                  <p>{item.description}</p>
              </motion.div>
          </div> ))}

         
    </div>
    </>
  )
}

export default LanguageSection