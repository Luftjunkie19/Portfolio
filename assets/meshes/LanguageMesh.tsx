import { Decal, Text, Text3D, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';
type Props = {
    texturePath:string,
    position : [number,number,number],
    techName:string

};

function LanguageMesh({texturePath, position, techName}: Props) {
  const texture = useTexture(texturePath);
  const meshRef=useRef<Mesh>(null);

  useFrame(()=>{
if(meshRef.current){
    meshRef.current.rotation.y += -0.02
}
  })

  return (
    <group position={position}>
    <mesh ref={meshRef} scale={0.5}>
      <sphereGeometry />
      <meshStandardMaterial color='lightgray' />
      <Decal polygonOffsetFactor={-0} position={[0, 0, 1]} scale={0.85} map={texture} />
    </mesh>

  </group>
  );
}

export default LanguageMesh;
