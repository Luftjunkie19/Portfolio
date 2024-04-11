import React, { useRef } from 'react';

import { Mesh } from 'three';

import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from '@react-three/drei';
import {
  Canvas,
  useFrame,
} from '@react-three/fiber';

type Props = {
    texturePath:string,
    position : [number,number,number],
    techName:string

};

function SphereMesh({texturePath, position, techName}: Props) {
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
  return (<Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}} >
    <OrbitControls enableZoom={false} />
    <ambientLight />
    <directionalLight />
    
    <SphereMesh position={position} texturePath={texturePath} techName={techName} />

    {/* <Text3D position={[-1, -2, 2]} scale={0.25} font={'./fonts/RobotoRegular.json'}>
      {techName}
    </Text3D> */}

  </Canvas>)
}


export default LanguageCanvas;
