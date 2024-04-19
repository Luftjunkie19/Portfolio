import React, { useRef } from 'react';

import { Mesh } from 'three';

import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
  View,
} from '@react-three/drei';
import {
  addEffect,
  Canvas,
  useFrame,
} from '@react-three/fiber';

type Props = {
    texturePath:string,
    position : [number,number,number],
    techName:string

};

import Lenis from '@studio-freight/lenis'



function SphereMesh({texturePath, position, techName}: Props) {
  // Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true })
// Integrate into fibers own raf loop instead of opening another
addEffect((t) => lenis.raf(t));
  const texture = useTexture(texturePath);
  const meshRef=useRef<Mesh>(null);

  useFrame(()=>{
if(meshRef.current){
    meshRef.current.rotation.y += -0.02
}
  })

  return (
    <Float floatIntensity={2} speed={1.75} rotationIntensity={1}>

      <mesh castShadow receiveShadow scale={2}>
      
        <sphereGeometry  />
        <meshBasicMaterial  polygonOffset polygonOffsetFactor={-5}  />
      <Decal position={[0, 0, 1]} scale={2} map={texture}/>
    <Decal position={[0, 0, 0]} scale={2} map={texture}/>
          </mesh>
      
      

    </Float>


  );
}

function LanguageCanvas({texturePath, position, techName}:Props) {
  return (<Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}}>
    <OrbitControls enableZoom={false} />
    <ambientLight />
    
    <SphereMesh position={position} texturePath={texturePath} techName={techName} />


  </Canvas>)
}


export default LanguageCanvas;
