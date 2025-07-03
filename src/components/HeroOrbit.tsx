"use client";
import {motion} from "motion/react";
import { PropsWithChildren } from "react";
export const HeroOrbit=({children,size,rotation,duration=30}:PropsWithChildren<{size:number;rotation:number;duration?:number}>)=>{

    return(
        <>
        <motion.div>
     <div className={`star [animation-duration:30s]`}>
      <div className="flex items-start justify-start" style={{
        height:`${size}px`,
        width:`${size}px`,
        transform:`rotate(${rotation}deg)`
      }}>
        <div className={`inline-flex animate-spin [animation-duration:5s]`}>
        {children}
        </div>
    
       </div>
  
    </div>
    </motion.div>
        </>
    )
}