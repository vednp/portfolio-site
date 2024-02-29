"use client";
import React from "react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "./ui/moving-border";
import {
  ArrowBigDown,
  LucideArrowDown,
  LucideArrowDownLeft,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
export default function Hero() {
  const words = [
    {
      text: "Web Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Mobile Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Open Source Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="dark">
      <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col ">
          {/* <p className="text-center text-blue-400">Hello, my name is</p> */}
          <div className="text-center flex flex-col justify-center items-center mb-24">
            <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-8xl">
              Ved Pahune
            </p>
            <TypewriterEffect words={words} />
          </div>
          <div className="text-center">
            <ScrollLink
              to="about"
              smooth={true}
              spy={true}
              className="transition-all duration-500 ease-in-out bg-clip-text"
            >
              <Button
                borderRadius="1rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <LucideArrowDown />
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
