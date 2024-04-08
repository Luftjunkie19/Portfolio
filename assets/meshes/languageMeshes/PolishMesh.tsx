import { useLoader } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three';

function PolishMesh() {
    const texture= useLoader(THREE.TextureLoader, './textures/polish.jpg');
  return (
    <mesh>
        <sphereGeometry/>
        <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default PolishMesh