"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = ["1.png", "1.png", "1.png"];

  return (
    <ImagesSlider className="h-[55.55rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          GAYATRI VIDYA PARISHAD COLLEGE <br /> FOR DEGREE AND PG COURSES
        </motion.p>
        <motion.p className="max-w-xl mx-auto text-lg lg:text-lg text-neutral-900 dark:text-neutral-400 text-center">
          AUTONOMOUS INSTITUTE Affiliated to Andhra University | Reaccredited by
          NAAC MBA and B.Tech Programs (CE, CSE, ECE, ME) Accredited by NBA
          Visakhapatnam – 530045
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
