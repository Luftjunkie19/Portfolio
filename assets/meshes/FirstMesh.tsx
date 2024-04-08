import React, { useRef } from 'react';

import * as THREE from 'three';
import { Mesh } from 'three';
import { useGLTF } from '@react-three/drei';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';

function FirstScene() {
  const model = useGLTF('./models/model6.gltf');
  const texture=useLoader(THREE.TextureLoader, './textures/texture1.png');
const meshReference= useRef<Mesh>(null);

useFrame((state, delta)=>{
  if(meshReference.current){
    meshReference.current.rotation.y +=0.02;
  }
})
  return (
    <mesh ref={meshReference}>
      <sphereGeometry scale-x={2} scale-y={2}  />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
</mesh>
          
  )
}

export default FirstScene