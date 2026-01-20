"use client";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        company: "IRDE, DRDO",
        position: "Intern",
        duration: "Aug 2025 - Present",
        description: "Currently working as an Intern at IRDE, Dehradun, where my responsibilities include Python-based machine learning model training, preprocessing large datasets, and optimizing model performance for research applications.",
        skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Optimization"]
    },
    {
        company: "Opto Electronics, OLF",
        position: "Intern",
        duration: "June 2024 - July 2024",
        description: "Developed a website for the internal server using PHP & Vanilla JS to track intern entries across internal departments. Coordinated with different departments to gather feature requirements and maintained over 100 daily entries in the database.",
        skills: ["PHP", "Vanilla JS", "MySQL", "Full Stack Development"]
    },
    {
        company: "Zidio Development",
        position: "Android Developer",
        duration: "May 2024 - July 2024",
        description: "Worked as Android Developer, responsible for planning Android application architecture and collaborating with teammates on development tasks. Led a team of 6 developers, ensuring efficient task delegation and smooth project execution.",
        skills: ["Android Development", "Team Leadership", "Java", "Kotlin", "Git"]
    }
];

export const Experience = () => {
    return (
        <motion.div className="pb-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <AnimatedSection delay={0.2}>
                    <SectionHeader
                        title="Professional Journey"
                        subtitle="Experience"
                        description="My work history and achievements"
                    />
                </AnimatedSection>

                {/* Timeline */}
                <div className="mt-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-blue-400 to-green-300 opacity-30"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <AnimatedSection key={index} delay={0.1 * index} direction="up">
                                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                        <motion.div
                                            className="w-4 h-4 bg-green-300 rounded-full border-4 border-gray-950"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        ></motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    >
                                        <div className="bg-gray-800 rounded-xl p-6 border border-white/10 hover:border-green-300/30 transition-colors duration-300 group">
                                            {/* Icon */}
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-300/10 rounded-lg mb-4 group-hover:bg-green-300/20 transition-colors">
                                                <FaBriefcase className="text-green-300 size-6" />
                                            </div>

                                            {/* Company & Position */}
                                            <h3 className="text-xl font-serif text-white group-hover:text-green-300 transition-colors">
                                                {exp.position}
                                            </h3>
                                            <p className="text-lg text-green-300 mt-1">{exp.company}</p>
                                            <p className="text-sm text-gray-400 mt-2">{exp.duration}</p>

                                            {/* Description */}
                                            <p className="text-gray-300 mt-4 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {exp.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-green-300/10 text-green-300 text-xs rounded-full border border-green-300/20"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
