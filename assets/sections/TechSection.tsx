import React from 'react';

import LanguageMesh from '../meshes/LanguageMesh';

type Props = {}

export interface LanguageItem{
  name: string,
  path: string,
  position: [number, number, number]
}
function TechSection({}: Props) {


const languages: LanguageItem[]=[
{name:'React (Native)', path:'./textures/react.png', position:[-2, 0, 1] }, 
{name:'HTML', path:'./textures/html.png', position:[0, 0, 1]}, 
{name:'CSS', path:'./textures/css.png', position:[2, 0, 1] },
{name:'Git', path:'./textures/git.png', position:[4, 0, 1] },
{name:"JavaScript", path:'./textures/JavaScript.png', position:[-4, 0, 1]},
{name:"NextJS", path:'./textures/next.png', position:[-4, -1.5, 1]},
{name:"NodeJS", path:'./textures/Node.png', position:[-2, -1.5, 1]},
{name:"TypeScript", path:'./textures/typescript.png', position:[0, -1.5, 1]},
{name:"Firebase", path:'./textures/firebase.png', position:[2, -1.5, 1]},
{name:"MongoDB", path:'./textures/mongo.png', position:[4, -1.5, 1]},
{name:'Tailwindcss', path:'./textures/tailwind.png', position:[6,-0.75, 1] },
  { name: 'Redux', path: './textures/redux.png', position:[6,-0.75, 1] }
]




  return (
    <div className='h-fit'>
        <p className=' text-2xl font-semibold'>Technologies, I have learned:</p>
      <div className='flex p-6 gap-2 max-w-5xl justify-center items-center m-0 mx-auto flex-wrap'>     
        {languages.map((item, i) => (
          <div className='w-44 h-44'>
            <LanguageMesh techName={item.name} key={i} position={item.position} texturePath={item.path}/>
            <p className=" text-center text-white text-lg">{item.name}</p>
            </div>
          ))}
    </div>
    
    </div>
  )
}

export default TechSection