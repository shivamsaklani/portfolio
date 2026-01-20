"use client";
import project1 from "@/assets/images/project-1.png";
import project3 from "@/assets/images/project-3.png";
import project2 from "@/assets/images/project-2.png";
import project4 from "@/assets/images/project-4.png";
import project5 from "@/assets/images/project-5.png";
import Image from "next/image";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircle from "@/assets/icons/check-circle.svg";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";

const portfolioProjects = [
  {
    project: "BetterUptime",
    year: "2025",
    title: "Tracking Website Health",
    results: [
      { title: "Used MicroServices for different modules" },
      { title: "Tech Stack : Nextjs,Typescript,Postgres,Websockets" },
      { title: "Reddis | TimeScaleDB | Docker | K8s" },
    ],
    link: "https://www.youtube.com/watch?v=VnAmzj9IZh0",
    image: project4,
  },
  {
    project: "Solana Fund Transfer",
    year: "2025",
    title: "Decentralized Application",
    results: [
      { title: "Decentralized Application For Fund Transfer" },
      { title: "Tech Stack : Solana | React | Typescript" },
      { title: "Used Web3 libraries for Authentication" },
    ],
    link: "https://solana-dapp-phi.vercel.app/",
    image: project5,
  },

  {
    project: "Tuneify",
    year: "2025",
    title: "Music According to your Mood",
    results: [
      { title: "Using FaceAPI detect Mood" },
      { title: "Tech Stack:React,Typescript" },
      { title: "Spotify API for Authentication" },
    ],
    link: "https://github.com/shivamsaklani/Tuneify",
    image: project3,
  },
  {
    project: "Canvas",
    year: "2023",
    title: "ExceliDraw Clone for crafting 2D Designs",
    results: [
      { title: "Created 2d Design with eazy" },
      { title: "Tech Stack : React,Typescript,Postgres,Websockets" },
      { title: "Used JWT,Email Verification using Reddis" },
    ],
    link: "https://github.com/shivamsaklani/Canvas",
    image: project2,
  },
  {
    project: "SocialBrain",
    year: "2022",
    title: " Keeping your posts in one place",
    results: [
      { title: "Stores your Social Post" },
      { title: "Tech Stack:React,Typescript,MongoDB" },
      { title: "Used JWT for Authentication" },
    ],
    link: "https://socialbrain.shivamsaklani.digital/",
    image: project1,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection delay={0.2}>
        <SectionHeader
          title="Real-world Results"
          subtitle="Featured Projects"
          description="Explore my latest work and side projects"
        />
      </AnimatedSection>

      {/* Grid Layout - 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {portfolioProjects.map((project, index) => (
          <AnimatedSection
            key={project.title}
            delay={0.1 * index}
            direction="up"
          >
            <motion.div
              className="h-full"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col hover:border-green-300/30 transition-colors duration-300 group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-green-300/90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {project.year}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Name Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text font-bold text-sm uppercase tracking-wider">
                      {project.project}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech Stack List */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-400">
                        <CheckCircle className="size-5 text-green-300 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View Button */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <motion.button
                      className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-300 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Project</span>
                      <ArrowUp className="size-4" />
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* GitHub Button */}
      <AnimatedSection delay={0.3}>
        <div className="flex justify-center items-center mt-16">
          <a href="https://github.com/shivamsaklani" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="custom-button z-10 items-center gap-2 justify-center text-gray-950 bg-white px-8 py-4 text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(134, 239, 172, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaGithub className="size-5" />
              <span>More on Github</span>
            </motion.button>
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>;
};
