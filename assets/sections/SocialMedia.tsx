import React, { Suspense } from 'react'
import DonutCanvas from '../meshes/Donut'
import { StaticImageData } from 'next/image'
import { Sphere } from '@react-three/drei'
import LanguageCanvas from '../meshes/SphereMesh'
import Link from 'next/link'
import MeshCanvas from '../meshes/LanguageMesh'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import Loader from '../Loader'
type Props = {}
import {motion} from 'framer-motion';

interface ISocialMedia {
  link: string,
  logo: string, 
  colour?:string
}

function SocialMedia({}: Props) {

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

const socialMedia: ISocialMedia[] = [
    {link:'https://github.com/Luftjunkie19', logo:'./textures/github.png', colour:'white'}, 
    {link:'https://www.linkedin.com/in/łukasz-borkowski-201777242/', logo:'./textures/linkedIn.png', colour:'#0e76a8'},
    {link:'https://Wa.me/+48691443187', logo:'./textures/whatsapp.png', colour:'black'}
]

  return (
    <div className='flex sm:flex-col lg:flex-row gap-2 items-center justify-around'>
      <Suspense fallback={<Loader/>}>
       <motion.div variants={variants} initial='hidden' whileInView={'visible'} viewport={{once:true}} className="w-80 h-80">
        <DonutCanvas />
       </motion.div>
      </Suspense>

       <div className="flex flex-col gap-4">
        <p className="text-white text-3xl font-medium">Contact me</p>
        <p className='text-white'>In case you would Like to reach me, click one of the balls below.</p>
        <div className="flex gap-2 self-center">
{socialMedia.map((item:ISocialMedia, i:any)=>(
   <Suspense fallback={<Loader/>}>
<Link className=' w-24 h-24' href={item.link}>
  <motion.div variants={variants} initial='hidden' whileInView={'visible'} viewport={{once:true}} className="w-full h-full">
    <MeshCanvas backgroundColour={item.colour} texturePath={item.logo} position={[0, 0, 0]} techName={''}/>
  </motion.div>
    </Link>    
   </Suspense>
))}
        </div>


       </div>

    </div>
  )
}

export default SocialMedia