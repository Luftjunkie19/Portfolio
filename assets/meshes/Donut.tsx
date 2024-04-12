import { useBoxProjectedEnv, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

function DonutMesh() {
    const texture=useTexture('./textures/donut-texture.jpg');

    const donutRef=useRef(null);
  
    useFrame((state, delta)=>{
if(donutRef.current){
  donutRef.current.rotation.y += delta;
  donutRef.current.rotation.x += delta;
  donutRef.current.rotation.z += delta;

}    

})


  return (

<mesh ref={donutRef}  scale={1.5} rotation-x={60}>
    <torusGeometry/>
    <meshMatcapMaterial flatShading map={texture}/>
</mesh>

  )
}


export default function DonutCanvas (){
  return (  <Canvas>
    <DonutMesh/>
        </Canvas>)
}
