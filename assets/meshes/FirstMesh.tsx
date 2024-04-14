import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { Mesh } from 'three';
import { MeshDistortMaterial, useAnimations, useGLTF } from '@react-three/drei';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';

function FirstScene() {



  return ( 
    <mesh scale={1.2}>
<sphereGeometry />
<MeshDistortMaterial color={'#5D3F6A'} speed={2} distort={0.5} attach={'material'}/>
    </mesh>
  )
}

export default FirstScene