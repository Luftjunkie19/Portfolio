import { useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import React from 'react'

function GermanMesh() {
    const texture=useLoader(THREE.TextureLoader, './textures/german.jpg');
  return (
    <mesh position={[-4, 0, 0]}>
        <sphereGeometry/>
        <meshBasicMaterial map={texture}/>
    </mesh>
  )
}

export default GermanMesh