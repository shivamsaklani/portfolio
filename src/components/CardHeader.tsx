"use client";
import {motion} from "motion/react"
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
export const CardHeader=({title,description,className}:{
    title:string,
    description?:string,
    className?:string
})=>{

    return(
        <motion.div 
        initial={{opacity:0,translateX:-50}} whileInView={{opacity:1, translateX:0}} 
    transition={{duration:1

    }}
        className={twMerge("flex flex-col",className)}>
        <motion.div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-blue-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
        </motion.div>
        <p className="text-sm text-white/60 mt-2">
        {description}
        </p>
        </motion.div>
    )
}