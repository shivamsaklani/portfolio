"use client"
import Link from "next/link";
import { useState } from "react";
import {motion} from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useScroll } from "motion/react";
const items=[
  {title:"Home",
    link:"/"
  },
  {title:"Projects",
    link:"/"
  },
 
  {title:"About",
    link:"/"
  },
  {title:"Contact",
    link:"/"
  },
]
export const Header = ({isMobile,icon}:{
  isMobile:()=>void,
  icon:boolean
}) => {
  const {scrollYProgress}=useScroll();
  const [click,setclick]=useState("Home");
  return <div className="flex p-5 justify-between border-b border-white/15  bg-transparent/30 backdrop-blur  w-full fixed z-50">
    <div className="flex items-center justify-center bg-gradient">
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{
        duration:4
      }} 
      className="text-xl cursor-pointer tracking-widest gradient 
      text-transparent bg-clip-text text-sans
       md:text-3xl lg:text-4xl">Shivam Saklani
       </motion.h1>
    </div>
    <nav className="gap-1 hidden sm:flex p-1 ">
    {
      items.map(item=>(
        <Link onClick={()=>setclick(item.title)} className={`nav-items ${click==item.title?"active-nav-item":"nav-items"}`} key={item.title} href={item.link} >{item.title} </Link>
      ))
     }
    </nav>
    <div className="flex sm:hidden">
      <button className="z-[9999] text-white cursor-pointer relative" onClick={isMobile}>
      {icon ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GrClose className="size-5"/>
            </motion.div>
          ) : (
            <motion.div
              key="menu"
             
            >
              <GiHamburgerMenu className="size-5"/>
            </motion.div>
          )}
      </button>
    </div>
    <motion.div className="fixed left-0 right-0 h-1 bg-blue-300 origin-left z-50 hidden sm:flex sm:top-20" style={{scaleX:scrollYProgress}} />
  </div>
  ;
};
