import React, { useRef } from 'react';

import { Mesh } from 'three';

import {
  Decal,
  Float,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
  useTexture,
  View,
  
} from '@react-three/drei';
import {
  Canvas,
  useFrame,
} from '@react-three/fiber';

type Props = {
    texturePath:string,
    position : [number,number,number],
    techName:string
    backgroundColour?:string

};

function LanguageMesh({texturePath, position, techName, backgroundColour}: Props) {
  const texture = useTexture(texturePath);
const meshRef=useRef<Mesh>(null);

  return (

         <Float floatIntensity={1.25} speed={1.75} rotationIntensity={0.6}>

<mesh ref={meshRef} castShadow receiveShadow scale={2.25}>

  <sphereGeometry  />
  <meshStandardMaterial polygonOffset polygonOffsetFactor={-5} flatShading color={backgroundColour ? backgroundColour : 'lightblue'}/>
<Decal  rotation={[2 * Math.PI, 0, 6.25]} position={[0, 0, 1]} map={texture} scale={0.9} />
</mesh>



</Float>
  );
}

function MeshCanvas({texturePath, position, techName, backgroundColour}:Props) {
  return (<Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}}>
    <OrbitControls enableZoom={false} />
    <ambientLight />
    <directionalLight />
    
    <LanguageMesh backgroundColour={backgroundColour} position={position} texturePath={texturePath} techName={techName} />


  </Canvas>)
}


export default MeshCanvas;
