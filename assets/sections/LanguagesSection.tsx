import { Canvas } from '@react-three/fiber'
import React from 'react'
import SecondSceneContent from '../meshes/SecondSceneContent'

type Props = {}

function LanguagesSection({}: Props) {
  return (
    <div>
        <p>Languages, I know:</p>
       <SecondSceneContent/>
    </div>
  )
}

export default LanguagesSection