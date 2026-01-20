"use client";
import { AboutSection } from "@/sections/About";
import { Contact } from "@/sections/Contact";

import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { IsMobile } from "@/sections/Mobile";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Experience } from "@/sections/Experience";
import { Toaster } from "react-hot-toast";

import { useRef, useState } from "react";
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div><Toaster /></div>
      <div>
        <Header
          refs={{
            heroRef: heroRef as React.RefObject<HTMLDivElement>,
            projectsRef: projectsRef as React.RefObject<HTMLDivElement>,
            aboutRef: aboutRef as React.RefObject<HTMLDivElement>,
            contactRef: contactRef as React.RefObject<HTMLDivElement>,
          }}
          icon={isMobileOpen}
          isMobile={() => setIsMobileOpen(!isMobileOpen)}
        />
        <IsMobile open={isMobileOpen} />
        <div ref={heroRef}><HeroSection /></div>
        <div ref={projectsRef}><ProjectsSection /></div>
        <div><TapeSection /></div>
        <div ref={aboutRef}><AboutSection /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
    </>
  );
}
