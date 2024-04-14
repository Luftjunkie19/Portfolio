import React, { Suspense } from 'react';
import {motion} from 'framer-motion';
import { Progress } from '@/components/ui/progress';

import SphereMesh from '../meshes/SphereMesh';
import Loader from '../Loader';

type Props = {}

function LanguageSection({}: Props) {

interface languageSection{
  path: string;
  name: string;
  proficiency: string;
  description: string;
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

const languages: languageSection[] = [{
  path:'./textures/polish.jpg',
  name: 'Polish',
  proficiency: 'Native',
  description: 'My mother tongue.'
},
 {path:'./textures/german.jpg', name:'German', 
 proficiency:'C1', 
 description:`A language that I treat as my second native tongue, because I lived in Germany for 2/3 years where I've got the contact with the native Language.`},  
{  path: './textures/english.jpg',
name: 'English',
proficiency: 'B2+',
description: `A language that I started really to learn 2 years ago, meaning that since that moment I have enhanced my English skills considerably.`
}, {
  path: './textures/finnish.png',
  name: 'Finnish',
  proficiency: 'A1',
  description: 'A language I started to learn a year ago. In order to know more than 2 foreign languages and also to know better the culture.'
},]

  return (
    <>
    <p className=' text-2xl font-semibold text-white'>Languages, I know.</p>
      <div className=' grid lg:grid-cols-2 gap-6 text-white'>
        {languages.map((item:languageSection)=>(<div className="flex sm:flex-col lg:max-w-[90%] lg:flex-row gap-4 lg:items-center justify-between p-2">
            <Suspense fallback={<Loader/>}>
              <motion.div variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once:true}} className='w-48 h-48'>
                  <SphereMesh texturePath={item.path} position={[0,0,0]} techName={item.name}/>
              </motion.div>
            </Suspense>

              <motion.div variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once:true}} className="flex flex-col gap-2">
                  <p className="text-4xl font-medium">{item.name}</p>
                  <p>Proficiency: {item.proficiency}</p>
                  <Progress className='w-64' value={100} />
                  <p>{item.description}</p>
              </motion.div>
          </div> ))}

         
    </div>
    </>
  )
}

export default LanguageSection