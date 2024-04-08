import { Canvas } from '@react-three/fiber'
import React from 'react'
import PolishMesh from './languageMeshes/PolishMesh'
import FinnishMesh from './languageMeshes/FinnishMesh'
import GermanMesh from './languageMeshes/GermanMesh'
import EnglishMesh from './languageMeshes/EnglishMesh'

function SecondSceneContent() {
  return (
    <Canvas>
            <ambientLight />
            <PolishMesh/>
            <GermanMesh/>
            <FinnishMesh/>
            <EnglishMesh/>
        </Canvas>
  )
}

export default SecondSceneContent