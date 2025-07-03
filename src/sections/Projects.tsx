"use client";
import project1 from "@/assets/images/project-1.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import grainImager from "@/assets/images/grain.jpg";
import Image from "next/image";
import { Card } from "@/components/Card";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircle from "@/assets/icons/check-circle.svg";
import { Button } from "@/components/Button";
import { LuGithub } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
const portfolioProjects = [
  {
    project: "SocialBrain",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://socialbrain.shivamsaklani.digital/",
    image: project1,
  },
  {
    project: "Attendance Management System",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    project: "Canvas- ExceliDraw Clone",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 flex items-center justify-center lg:py-24">
    <div className="m-5 container justify-center items-center">
      <SectionHeader title="Real-world Results" subtitle="Featured Projects" description="Take a Look of My projects" />
      <div className="flex flex-col w-full mt-10 gap-20 md:mt-20 ">
        {
          portfolioProjects.map(project => (
            <Card cardclassName="after:pointer-events-none 
             px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20
             sm:sticky sm:top-20" key={project.title} >
            
                <div className="absolute inset-0 -z-10 opacity-5" style={{
                  backgroundImage:`url(${grainImager})`
                }}></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                <div className="bg-gradient-to-r gap-2 from-green-300 to-blue-400 inline-flex font-bold uppercase tracking-widest  text-sm text-transparent bg-clip-text">
                  <span>{project.project}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
               
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckCircle className="size-5 md:size-6"/>
                    <span>{result.title}</span>
                    </li>
                ))
                }
              </ul>
              <a href={project.link}>
                <button className="custom-button z-10 mt-8 items-center gap-2 justify-center text-gray-950 bg-white"><span>View Live Site</span>
                <ArrowUp className="size-4"/>
                
                </button>
                </a>
                </div>
              <div className="relative">
              <Image className="mt-8 rounded-md lg:h-full  lg:mt-0 md:-mb-0 -mb-4 lg:w-auto lg:absolute lg:max-w-none" src={project.image} alt={project.title} />
              </div>
              </div>
            </Card>
          ))
        }
      </div>
      <div className="flex justify-center items-center">

        <button className="custom-button z-10 mt-8 items-center gap-2 justify-center text-gray-950 bg-white">
          <FaGithub/>
          <span>More on Github</span>
        </button>

       </div>
    </div>
  </section>;
};
