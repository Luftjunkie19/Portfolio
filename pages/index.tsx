import HeroSection from '@/assets/sections/HeroSection';
import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";
import LanguagesSection from '@/assets/sections/LanguagesSection';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
       <HeroSection />
       <LanguagesSection/>
      </div>
  );
}
