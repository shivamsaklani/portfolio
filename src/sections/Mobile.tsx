"use client";
import { useEffect } from "react";
import {AnimatePresence, motion} from "motion/react";
import Link from "next/link";
import { BsHouse,  BsPersonExclamation } from "react-icons/bs";
import {GrProjects } from "react-icons/gr";

import { LuContact } from "react-icons/lu";
const items=[
  {title:"Home",
    link:"/",
    icon:BsHouse
  },
  {title:"Projects",
    link:"/",
       icon:GrProjects
  },
 
  {title:"About",
    link:"/",
    icon:BsPersonExclamation
  },
  {title:"Contact",
    link:"/",
    icon:LuContact
  },
]
const IsMobile = ({
  open,
}: {
  open: boolean;
}) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
    <motion.div initial={{ x: -500, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -500, opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
     className="fixed inset-0 z-[9] bg-black/80 backdrop-blur-lg  sm:hidden flex">
     <div className="flex w-full justify-center items-center ">
     <ul className="gap-2 flex flex-col">
      {
        items.map((item,index)=>(
          <motion.div key={item.title} className="nav-items flex items-center gap-3 flex-cols-2">
            <item.icon/><li><Link href={item.link}>{item.title}</Link></li>
          </motion.div>
        ))
      }
     </ul>
     </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default IsMobile;