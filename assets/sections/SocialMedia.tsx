import React from 'react'
import DonutCanvas from '../meshes/Donut'
import { StaticImageData } from 'next/image'
import { Sphere } from '@react-three/drei'
import LanguageCanvas from '../meshes/SphereMesh'
import Link from 'next/link'
import MeshCanvas from '../meshes/LanguageMesh'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
type Props = {}


interface ISocialMedia {
  link: string,
  logo: string
}

function SocialMedia({}: Props) {

const socialMedia: ISocialMedia[] = [
    {link:'https://github.com/Luftjunkie19', logo:'./textures/github.png'}, 
    {link:'https://www.linkedin.com/in/łukasz-borkowski-201777242/', logo:'./textures/linkedIn.png'},
    {link:'https://Wa.me/+48691443187', logo:'./textures/whatsapp.png'}
]

  return (
    <div className='flex gap-2 items-center justify-around'>
       <div className="w-80 h-80">
        <DonutCanvas />
       </div>

       <div className="flex flex-col gap-4">

        <p>In case you would Like to reach me, click one of the balls below.</p>
        <div className="flex gap-2 self-center">
{socialMedia.map((item:ISocialMedia, i:any)=>(<Link className=' w-24 h-24' href={item.link}>
    <MeshCanvas texturePath={item.logo} position={[0, 0, 0]} techName={''}/>
    </Link>))}
        </div>


       </div>

    </div>
  )
}

export default SocialMedia