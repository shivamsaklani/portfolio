"use client";
import StarIcon from "@/assets/icons/star.svg";
import { motion } from "motion/react";
import { Fragment } from "react";
const words = [
  "Android",
  "Development",
  "SEO",
  "React",
  "Express",
  "Prisma",
  "AWS",
  "Docker",
  "Kuberenete"
]

export const TapeSection = () => {
  return <div className="py-16  overflow-x-clip">
    <div className="gradient -rotate-2">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]">
        <motion.div initial={{translateX:0 }}
          animate={{ translateX:-800 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="flex flex-none gap-4 pr-4 py-3">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {
                words.map((word) => (

                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold">{word}</span>
                    <StarIcon className="size-6 text-gray-900" />
                  </div>
                ))
              }
            </Fragment>
          ))
          }
        </motion.div>
      </div>
    </div>
  </div>;
};
