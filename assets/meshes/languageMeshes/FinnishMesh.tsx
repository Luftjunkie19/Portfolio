import React from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three';

function FinnishMesh() {
    const texture= useLoader(THREE.TextureLoader, './textures/finnish.png');
  return (
    <mesh position={[4, 0 , 0]}>
    <sphereGeometry parameters={{radius: 40,widthSegments:30, heightSegments:30, phiLength:40, phiStart:30, thetaLength:50, thetaStart:40}}/>
    <meshBasicMaterial map={texture} />
</mesh>
  )
}

export default FinnishMesh