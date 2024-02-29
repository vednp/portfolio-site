"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Academic from "@/components/Academic";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <TracingBeam>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Academic/>
        <Footer/>
      </TracingBeam>
    </div>
  );
}
