"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const icons = [
  {
    name: "Github",
    Icon: FaGithub,
    href: "https://github.com/shivamsaklani?tab=overview&from=2025-04-01&to=2025-04-14",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/shivam-saklani-378061199/",
  },
  {
    name: "X",
    Icon: FaTwitter,
    href: "https://x.com/Saklani1_",
  },
  {
    name: "Youtube",
    Icon: FaYoutube,
    href: "https://www.youtube.com/@shivamsaklani4002/streams",
  },
];

export const FooterItem = ({
  name,
  href,
  icon: Icon,
}: {
  name: string;
  href: string;
  icon: React.ElementType;
}) => {
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.25 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-2 sm:p-3 rounded-full bg-white shadow-md"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900"
        aria-label={name}
      >
        <Icon className="size-6 md:size-7 lg:size-8" />
      </Link>
    </motion.div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 mt-16">
      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div
          className="flex px-10 py-4 space-x-6 rounded-full shadow-lg backdrop-blur-sm bg-white/10 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {icons.map((icon, index) => (
            <FooterItem
              key={index}
              icon={icon.Icon}
              name={icon.name}
              href={icon.href}
            />
          ))}
        </motion.div>
        <p className="text-sm text-white text-center">
          &copy; {new Date().getFullYear()} Shivam Saklani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
