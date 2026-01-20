"use client"
import Link from "next/link";
import { RefObject, useState } from "react";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useScroll } from "motion/react";

interface HeaderProps {
  icon: boolean;
  isMobile: () => void;
  refs: {
    heroRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

export const Header = ({
  isMobile,
  icon,
  refs,
}: HeaderProps) => {
  const items = [
    { title: "Home", ref: refs.heroRef },
    { title: "Projects", ref: refs.projectsRef },
    { title: "About", ref: refs.aboutRef },
    { title: "Contact", ref: refs.contactRef },
  ];
  const { scrollYProgress } = useScroll();
  const [click, setclick] = useState("Home");
  const onScrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <div className="flex p-5 justify-between border-b border-white/15  bg-transparent/30 backdrop-blur  w-full fixed z-50">
    <div className="flex items-center justify-center bg-gradient">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-xl cursor-pointer tracking-widest gradient 
        text-transparent bg-clip-text text-sans
         md:text-3xl lg:text-4xl"
      >
        Shivam Saklani
      </motion.h1>
    </div>

    <nav className="gap-1 hidden sm:flex p-1 ">
      {
        items.map((item, index) => (
          <motion.button
            onClick={() => {
              setclick(item.title)
              onScrollToSection(item.ref);
            }}
            className={`nav-items ${click == item.title ? "active-nav-item" : "nav-items"}`}
            key={item.title}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.title}
          </motion.button>
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
            <GrClose className="size-5" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 0, opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
          >
            <GiHamburgerMenu className="size-5" />
          </motion.div>
        )}
      </button>
    </div>

    <motion.div
      className="fixed left-0 right-0 h-1 bg-blue-300 origin-left z-50 hidden sm:flex sm:top-20"
      style={{ scaleX: scrollYProgress }}
    />
  </div>
    ;
};
