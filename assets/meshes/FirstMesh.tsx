import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { Mesh } from 'three';
import { useAnimations, useGLTF } from '@react-three/drei';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';

function FirstScene() {
  const model = useGLTF('./models/spaceship.gltf');
  console.log(model.animations);
  const {actions, ref}=useAnimations(model.animations);

useEffect(()=>{
  actions.Animation?.play()
}, []);

  return ( 
    <mesh ref={ref}>
<primitive scale={0.25} object={model.scene}/>
    </mesh>
  )
}

export default FirstScene