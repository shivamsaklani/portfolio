"use client"
import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import {motion} from "motion/react";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { Space } from "@/components/Space";
export const HeroSection = () => {
  return <motion.div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip z-0">
    <motion.div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
    <motion.div className="absolute inset-0 -z-30 opacity-5"  style={{
      backgroundImage:`url(${grainImage.src})`
    }}></motion.div>
    <motion.div className="hero-ring size-[620px]"></motion.div>
    <motion.div className="hero-ring size-[820px]"></motion.div>
    <motion.div className="hero-ring size-[1020px]"></motion.div>
    <motion.div className="hero-ring size-[1220px]"></motion.div>
    <Space/>
    </motion.div>
    <motion.div>
      <motion.div className="flex flex-col  items-center">
        <Image src={memojiImage} className="size-30 md:size-50 lg:size-40 z-10" alt="image" />
        <motion.div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
        <motion.div className="bg-green-500 size-2.5 relative rounded-full">
          <div className="bg-green-500 absolute inset-0 rounded-full animate-ping "></div>
        </motion.div>
          <motion.div className="text-sm font-medium" >Available for work</motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="max-w-lg mx-auto ">
      <h1 className="font-sans md:text-5xl text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
      <p className="mt-4 text-center  text-white/60 md:text-lg">
        I specialize in transforming designs into functional,high-performing web applications. Let's discuss your next project.
      </p>
      </motion.div>
      <motion.div className="flex flex-col md:flex-row justify-center items-center mt-8  gap-4">
       
        <button className="custom-button z-10 border-white bg-white border-1  text-gray-900">
          <span>📄</span>
          <span className="font-semibold">Download CV</span>
        </button>
        <button className="custom-button z-10 border-white/15">
          <span className="font-semibolds">Explore</span>
          <motion.div className="animate-bounce"><ArrowDown className="size-4"/></motion.div>
        </button>
      </motion.div>
    </motion.div>
  </motion.div>;
};
