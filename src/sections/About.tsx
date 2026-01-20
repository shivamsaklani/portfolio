"use client";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTML from "@/assets/icons/html5.svg";
import CSS from "@/assets/icons/css3.svg";
import Docker from "@/assets/icons/docker-svgrepo-com.svg";
import Aws from "@/assets/icons/aws-svgrepo-com.svg";
import GitHub from "@/assets/icons/github.svg";
import Kubernetes from "@/assets/icons/kubernetes-svgrepo-com.svg";
import Java from "@/assets/icons/java-svgrepo-com.svg";
import Prisma from "@/assets/icons/light-prisma-svgrepo-com.svg";
import Mongo from "@/assets/icons/mongodb-svgrepo-com.svg";
import Postgres from "@/assets/icons/postgresql-logo-svgrepo-com.svg";
import Typescript from "@/assets/icons/typescript-svgrepo-com.svg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FaGraduationCap } from "react-icons/fa";

const toolboxItems = [
  {
    title: 'Docker',
    icon: Docker
  },
  {
    title: 'Kubernetes',
    icon: Kubernetes
  },
  {
    title: 'Java',
    icon: Java,
  },
  {
    title: 'Javascript',
    icon: JavascriptIcon
  },
  {
    title: 'Typescript',
    icon: Typescript
  },
  {
    title: 'AWS',
    icon: Aws
  },
  {
    title: 'HTML5',
    icon: HTML
  },
  {
    title: 'CSS3',
    icon: CSS
  },
  {
    title: 'Github',
    icon: GitHub
  },
  {
    title: 'React',
    icon: ReactIcon
  },
  {
    title: 'MongoDB',
    icon: Mongo
  },
  {
    title: 'Postgres SQL',
    icon: Postgres
  },
  {
    title: 'Prisma ORM',
    icon: Prisma
  }
];

const Education = [
  {
    title: "Bachelor's of Technology Major in Computer Science",
    subtitle: "Uttaranchal University",
    date: "2022-2026",
    description: "Focused on software engineering, data structures, algorithms, and web development. Maintained strong academic performance."
  },
  {
    title: "Glacier Public School",
    subtitle: "11th-12th",
    date: "2020-2022",
    description: "Completed higher secondary education with focus on Science and Mathematics."
  }
]

export const AboutSection = () => {
  return <motion.div className="pb-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection delay={0.2}>
        <SectionHeader title="About Me" subtitle="A Glimpse Into My World" description="Know more about me, what I do, My skills" />
      </AnimatedSection>

      <motion.div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <AnimatedSection direction="left" delay={0.3}>
          <div className="bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-white/10 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-300/10 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-green-300 size-6" />
              </div>
              <h2 className="text-2xl font-serif text-white">Education</h2>
            </div>

            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 to-blue-400 opacity-30"></div>

              {Education.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-green-300 rounded-full border-2 border-gray-950"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <p className="text-green-300 text-sm md:text-base">{item.subtitle}</p>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection direction="right" delay={0.4}>
          <div className="bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-white/10 h-full">
            <h2 className="text-2xl font-serif text-white mb-6">My Skills</h2>

            {/* Skills Grid - Static Display */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {toolboxItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 bg-gray-900/50 rounded-lg border border-white/5 hover:border-green-300/30 transition-colors group"
                >
                  <item.icon className="size-8 md:size-10 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-center text-gray-400 group-hover:text-green-300 transition-colors break-words">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </motion.div>
    </div>
  </motion.div>;
};
