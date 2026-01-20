"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
    src: StaticImageData | string;
    alt: string;
    className?: string;
    intensity?: number;
}

export const ParallaxImage = ({
    src,
    alt,
    className = "",
    intensity = 20,
}: ParallaxImageProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>
                <Image src={src} alt={alt} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
};
