import HeroSection from '@/assets/sections/HeroSection';
import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
   <HeroSection/>   
    </div>
         <div className="w-screen h-screen">
       <Canvas >
        <ambientLight />
        {/* <OrbitControls/> */}
        <CameraControls/>
<mesh position={[0, 0, 3]}>
  <boxGeometry/>
  <meshBasicMaterial color='red'/>
</mesh>
       </Canvas>
         </div>
  );
}
