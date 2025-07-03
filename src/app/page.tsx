"use client";
import { AboutSection } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { IsMobile } from "@/sections/Mobile";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

import { useState } from "react";
export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  return (
   <>
    <div>
     <Header icon={isMobileOpen} isMobile={()=>setIsMobileOpen(!isMobileOpen)}/>
    <IsMobile open={isMobileOpen}/>
     <HeroSection/>
    <ProjectsSection/>
    <TapeSection/>
    <AboutSection/>
    <Contact/>
    <Footer/>
    
   </div>
   </>
  );
}
