"use client";
import {motion} from "motion/react";
import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";
export const ToolboxItems=({toolboxItems,className,isLeft=true}:{
    toolboxItems:{
        title:string;
        icon:React.ElementType;
    }[];
    className?:string;
    isLeft?:boolean;
})=>{

    return(
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        ,className)} >
            <motion.div initial={{ translateX: isLeft ?0:-700}}
        animate={{ translateX: isLeft ? -800 : 0 }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }} className="flex py-0.5 flex-none gap-6 pr-6">
        {[...new Array(2)].fill(0).map((_,idx)=>(
          <Fragment key={idx}>
            {
          toolboxItems.map(item=>(
            <div key={item.title} className="inline-flex items-center
             gap-4 px-3 py-2 outline outline-2 
             outline-white/10 rounded-lg">
             <TechIcon component={item.icon}/>
              <span className="font-semibold">{item.title}</span>
              
            </div>
          ))

        }
          </Fragment>
        ))}
        </motion.div>
      </div>
    )
}