import React, { useRef } from 'react';

import { Mesh } from 'three';

import {
  Decal,
  Float,
  OrbitControls,
  Scroll,
  ScrollControls,
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
    backgroundColour?:string

};

function LanguageMesh({texturePath, position, techName, backgroundColour}: Props) {
  const texture = useTexture(texturePath);


  return (
    <Scroll>
         <Float floatIntensity={1.25} speed={1.75} rotationIntensity={0.6}>

<mesh castShadow receiveShadow scale={2.25}>

  <sphereGeometry  />
  <meshStandardMaterial polygonOffset polygonOffsetFactor={-5} flatShading color={backgroundColour ? backgroundColour : 'lightblue'}/>
<Decal rotation={[2 * Math.PI, 0, 6.25]} position={[0, 0, 1]} map={texture} scale={0.9} />
</mesh>



</Float>
    </Scroll>
  );
}

function MeshCanvas({texturePath, position, techName, backgroundColour}:Props) {
  return (<Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}} >
    <OrbitControls enableZoom={false} />
    <ambientLight />
    <directionalLight />
    
    <ScrollControls>

    <LanguageMesh backgroundColour={backgroundColour} position={position} texturePath={texturePath} techName={techName} />
    </ScrollControls>


    {/* <Text3D position={[-1, -2, 2]} scale={0.25} font={'./fonts/RobotoRegular.json'}>
      {techName}
    </Text3D> */}

  </Canvas>)
}


export default MeshCanvas;
