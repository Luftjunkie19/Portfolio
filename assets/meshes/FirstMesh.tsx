import React from 'react';

import * as THREE from 'three';

import { useGLTF } from '@react-three/drei';

function FirstScene() {

  const model = useGLTF('./models/model6.gltf');

  return (
    <mesh >
      <sphereGeometry scale-x={2} scale-y={2}  />
      <meshBasicMaterial wireframe side={THREE.DoubleSide} />
</mesh>
          
  )
}

export default FirstScene