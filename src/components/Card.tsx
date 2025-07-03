"use client";
import {motion} from "motion/react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
export const Card=({className,children,cardclassName}:{
    className ?:string;
    children ?:ReactNode;
    cardclassName ?:string
})=>{
    return(
        <>
        <motion.div className={
            twMerge("bg-gray-800 overflow-hidden rounded-3xl z-0 relative after:content-[''] after:absolute after:z-10 after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20",cardclassName)}
         initial={{opacity:0,translateX:-50}} whileInView={{opacity:1, translateX:0}} 
    transition={{duration:1

    }}
         >
            
            <motion.div className={twMerge("absolute inset-0 -z-10 opacity-5",className)} style={{
              backgroundImage:`url(${grainImage})`
            }}>

            </motion.div>
            {children}
            
        </motion.div>
        </>
    );
}