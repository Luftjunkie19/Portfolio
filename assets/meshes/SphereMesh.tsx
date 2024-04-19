import React, { useRef } from 'react';

import * as THREE from 'three';
import { Mesh } from 'three';

import {
  Decal,
  Float,
  OrbitControls,
} from '@react-three/drei';
import {
  Canvas,
  useFrame,
  useLoader,
} from '@react-three/fiber';

type Props = {
    texturePath:string,
    position : [number,number,number],
    techName:string

};

function SphereMesh({texturePath, position, techName}: Props) {
  const texture = useLoader(THREE.TextureLoader, texturePath);
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
    <Decal dispose={null}  position={[0, 0, 0]} scale={2} map={texture}/>
          </mesh>
      
      

    </Float>


  );
}

function LanguageCanvas({texturePath, position, techName}:Props) {
  return (<Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}} >
      <ambientLight />
    <OrbitControls enableZoom={false} />
    
    <SphereMesh position={position} texturePath={texturePath} techName={techName} />

    {/* <Text3D position={[-1, -2, 2]} scale={0.25} font={'./fonts/RobotoRegular.json'}>
      {techName}
    </Text3D> */}

  </Canvas>)
}


export default LanguageCanvas;
