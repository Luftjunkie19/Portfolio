import { Inter } from 'next/font/google';

import HeroSection from '@/assets/sections/HeroSection';
import LanguageSection from '@/assets/sections/LanguageSection';
import Projects from '@/assets/sections/Projects';
import TechSection from '@/assets/sections/TechSection';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
       <HeroSection />
       <TechSection/>
      <Projects />
      <LanguageSection/>
      </div>
  );
}
