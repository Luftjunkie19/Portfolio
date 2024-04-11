import { Canvas } from '@react-three/fiber'
import React from 'react'
import LanguageMesh from '../meshes/LanguageMesh'
import { OrbitControls } from '@react-three/drei'


type Props = {}

function LanguagesSection({}: Props) {
interface LanguageItem{
  name: string,
  path: string,
  position: [number, number, number]
}


const languages: LanguageItem[]=[
{name:'React (Native)', path:'./textures/react.png', position:[-2, 0, 1] }, 
{name:'HTML', path:'./textures/html.png', position:[0, 0, 1]}, 
{name:'CSS', path:'./textures/css.png', position:[2, 0, 1] },
{name:'CSS', path:'./textures/git.png', position:[4, 0, 1] },
{name:"JavaScript", path:'./textures/JavaScript.png', position:[-4, 0, 1]},
{name:"NextJS", path:'./textures/next.png', position:[-4, -1.5, 1]},
{name:"NodeJS", path:'./textures/Node.png', position:[-2, -1.5, 1]},
{name:"TypeScript", path:'./textures/typescript.png', position:[0, -1.5, 1]},
{name:"Firebase", path:'./textures/firebase.png', position:[2, -1.5, 1]},
{name:"MongoDB", path:'./textures/mongo.png', position:[4, -1.5, 1]},
{name:'CSS', path:'./textures/tailwind.png', position:[6,-0.75, 1] },
]




  return (
    <div className=' h-3/4'>
        <p className=' text-2xl font-semibold'>Languages, I know:</p>
        <Canvas>
          <ambientLight/>
          {languages.map((item, i)=>(<LanguageMesh techName={item.name} key={i} position={item.position} texturePath={item.path}/>))}
        </Canvas>
    </div>
  )
}

export default LanguagesSection