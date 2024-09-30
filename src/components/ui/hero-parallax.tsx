"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Ibarra_Real_Nova } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconArrowRight } from "@tabler/icons-react";

const oldStandard = Ibarra_Real_Nova({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0.1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[290vh] pb-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:700px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <MaxWidthWrapper className="flex overflow-y-auto items-center mt-20 pt-20 z-10">
      <div
        className={cn(
          oldStandard.className,
          "py-20 mx-auto text-center flex flex-col items-center max-w-5xl"
        )}
      >
        <h1 className="text-xl font-semibold tracking-tight text-neutral sm:text-7xl leading-tight">
          ZOIR UNIVERSITY<br></br>
          <span className="text-neutral-600 text-6xl">
            Deemed to be University
          </span>
          .
        </h1>
        <p className="mt-6 text-xl max-w-prose text-muted-foreground ">
          Empowering future innovators with world-class education, cutting-edge
          research, and a commitment to excellence.
        </p>
        <Button
          asChild
          className=" mt-4 bg-opacity-30 text-md backdrop-blur-lg dark:bg-neutral-200 text-neutral-100 dark:text-neutral-700"
        >
          <Link href="/admissions">
            Admissions
            <IconArrowRight className="text-neutral-100 dark:text-neutral-700 h-5 w-5 flex-shrink-0 ml-2" />
          </Link>
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 z-1"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="300"
          width="400"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
