"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Excellent Academic Reputation",
    description:
      "At Gayatri Vidya Parishad College, we take pride in our tradition of academic excellence. Our faculty consists of highly qualified professors dedicated to delivering world-class education. We provide a range of undergraduate and postgraduate programs that help students achieve their career goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
        <Image
          src="/1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Infrastructure"
        />
      </div>
    ),
  },
  {
    title: "State-of-the-Art Infrastructure",
    description:
      "We offer a modern campus equipped with state-of-the-art infrastructure, including fully furnished laboratories, a vast digital library, and Wi-Fi access across the campus. Our facilities are designed to ensure that students have everything they need to succeed academically and professionally.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Infrastructure"
        />
      </div>
    ),
  },
  {
    title: "Strong Industry Connections",
    description:
      "Gayatri Vidya Parishad College maintains strong ties with the industry, helping students secure internships and job placements with leading companies. Our campus recruitment program attracts top organizations, providing excellent career opportunities for our graduates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black">
        <Image
          src="/1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Infrastructure"
        />
      </div>
    ),
  },
  {
    title: "Holistic Development",
    description:
      "At our college, we believe in nurturing not just academic growth but the overall development of our students. We offer a wide range of extracurricular activities, sports, and clubs to ensure students have a balanced and fulfilling campus life.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
        <Image
          src="/1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Infrastructure"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-white">
      {" "}
      {/* Set background to white */}
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        Why Choose GAYATRI VIDYA PARISHAD COLLEGE
      </h1>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
