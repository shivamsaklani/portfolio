"use client"
import Image from "next/image";
import { motion } from "motion/react";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import profilePhoto from "@/assets/images/profile.jpg";
export const HeroSection = () => {
  return <motion.div
    className="py-32 md:py-48 lg:py-40 relative overflow-x-clip z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side - Text Content */}
        <motion.div className="flex-1 flex flex-col items-center lg:items-start">
          {/* Floating Available Badge */}
          <motion.div
            className="bg-primary/50 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div className="bg-green-500 size-2.5 relative rounded-full">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping "></div>
            </motion.div>
            <motion.div className="text-sm font-medium">Available for work</motion.div>
          </motion.div>

          {/* Animated Heading */}
          <motion.h1
            className="font-sans md:text-5xl text-3xl text-center lg:text-left mt-8 tracking-wide"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm <b className="text-green-300">Software Developer.</b>
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="mt-4 text-center lg:text-left text-white/60 md:text-lg max-w-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center mt-8 gap-4"
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

        {/* Right Side - Profile Photo */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <Image
              src={profilePhoto}
              className="w-full h-full rounded-sm"
              alt="Shivam Saklani"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>;
};

