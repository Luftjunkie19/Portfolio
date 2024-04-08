import { useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import React from 'react'

function EnglishMesh() {
    const texture= useLoader(THREE.TextureLoader, './textures/english.jpg');
  return (
<mesh position={[8, 0, 0]} scale={2}>
    <circleGeometry/>
    <meshBasicMaterial map={texture}/>
</mesh>
  )
}

export default EnglishMesh