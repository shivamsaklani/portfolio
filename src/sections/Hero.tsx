"use client"
import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "motion/react";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { Space } from "@/components/Space";

export const HeroSection = () => {
  return <motion.div
    className="py-32 md:py-48 lg:py-60 relative overflow-x-clip z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <motion.div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></motion.div>

      {/* Animated Rings with Rotation */}
      <motion.div
        className="hero-ring size-[620px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="hero-ring size-[820px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="hero-ring size-[1020px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="hero-ring size-[1220px]"
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1]
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      <Space />
    </motion.div>

    <motion.div>
      <motion.div className="flex flex-col items-center">
        {/* Animated Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Image
            src={memojiImage}
            className="size-30 md:size-50 lg:size-40 z-10"
            alt="image"
          />
        </motion.div>

        {/* Floating Available Badge */}
        <motion.div
          className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div className="bg-green-500 size-2.5 relative rounded-full">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping "></div>
          </motion.div>
          <motion.div className="text-sm font-medium">Available for work</motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="max-w-lg mx-auto ">
        {/* Animated Heading with Stagger */}
        <motion.h1
          className="font-sans md:text-5xl text-3xl text-center mt-8 tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Building Exceptional User Experiences
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="mt-4 text-center text-white/60 md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
        </motion.p>
      </motion.div>

      {/* Animated Buttons */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.button
          className="custom-button z-10 border-white bg-white border-1 text-gray-900"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(134, 239, 172, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <a href="https://docs.google.com/document/d/1g5pVPtlt0WfVG4xFLauMZm5Tx_yEB__6/edit?usp=sharing&ouid=113086259152655338028&rtpof=true&sd=true" target="blank">
            <span>📄</span>
            <span className="font-semibold">Download CV</span></a>
        </motion.button>

        <motion.button
          className="custom-button z-10 border-white/15"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="font-semibolds">Explore</span>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>;
};

