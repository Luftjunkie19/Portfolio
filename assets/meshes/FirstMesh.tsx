import React from 'react';

import { MeshDistortMaterial } from '@react-three/drei';

function FirstScene() {



  return ( 
    <mesh scale={1.15}>
<sphereGeometry />
<MeshDistortMaterial color={'#5D3F6A'} speed={2} distort={0.5} attach={'material'}/>
    </mesh>
  )
}

export default FirstScene