"use client";
import {motion} from "motion/react";
export const SectionHeader=({title,subtitle,description}:{
    title?:String,
    subtitle?:String,
    description?:String
})=>{
    return(
        <>
        <motion.div initial={{opacity:0,translateX:-50}} whileInView={{opacity:1, translateX:0}} 
    transition={{duration:1

    }} className="flex justify-center ">
        <p className="uppercase font-semibold tracking-widest gradient text-transparent bg-clip-text text-center">{title}</p>
      </motion.div>
      <motion.h2 
      initial={{opacity:0,translateX:-50}} whileInView={{opacity:1, translateX:0}} 
      transition={{duration:1
  
      }}
      className="font-serif text-3xl md:text-5xl  
      text-center mt-6">{subtitle}</motion.h2>
      <motion.p 
      initial={{opacity:0,translateX:-50}} whileInView={{opacity:1, translateX:0}} 
      transition={{duration:1
  
      }}
      className="text-center lg:text-lg md:text-lg
       text-white/60 mt-4 max-w-md mx-auto">{description}</motion.p>
      </>
    )
}