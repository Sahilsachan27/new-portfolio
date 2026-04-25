"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const titles = [
    "FULL STACK DEVELOPER",
    "FRONTEND ENGINEER",
    "BACKEND ENGINEER",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 200 : 1000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 10% 20%, rgba(132, 169, 140, 0.05) 0%, rgba(249, 250, 247, 1) 90%)"
      }}
    >
      {/* Background Depth Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#84A98C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#6B8E23]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 w-full z-10 relative lg:mt-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10 space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#84A98C]/10 text-[#6B8E23] text-[10px] font-extrabold tracking-widest uppercase mb-4 border border-[#84A98C]/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#6B8E23] animate-pulse"></span>
              Open for collaboration
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1
                className="font-sans text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-[0.95]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hey, I&apos;m <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6B8E23] to-[#84A98C]">Sahil</span>
              </motion.h1>

              {/* Location */}
              <motion.div
                className="flex items-center space-x-2 text-[#84A98C]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <svg
                  className="w-5 h-5 text-[#6B8E23]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg text-slate-600 font-medium tracking-wide">
                  Kanpur, Uttar Pradesh
                </span>
              </motion.div>
              
              {/* Animated Title */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-600 tracking-wider min-h-[3rem] flex items-center">
                  {displayedText}
                  <span className="animate-pulse ml-1 text-[#6B8E23]">|</span>
                </h2>
              </motion.div>
            </div>

            {/* Social Icons and Resume Button */}
            <motion.div
              className="flex items-center space-x-6 pt-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
              {/* Social Icons */}
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/sahilsachan27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all border border-slate-200 shadow-xl shadow-[#6B8E23]/5 hover:shadow-2xl hover:bg-[#84A98C]/10 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sahilsachan2303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all border border-slate-200 shadow-xl shadow-[#6B8E23]/5 hover:shadow-2xl hover:bg-[#84A98C]/10 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1i9Gk4BaS14OquiBCKPJz2mJE4JuEiczh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-[#6B8E23] to-[#84A98C] px-8 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 shadow-[0_10px_30px_-10px_rgba(107,142,35,0.5)] border border-white/20 hover:from-[#556B2F] hover:to-[#6B8E23] backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(107,142,35,0.6)]"
              >
                <span className="w-2.5 h-2.5 bg-[#F6F7F4] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div 
              className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:ml-auto"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Layered Visual Composition */}
              <div className="absolute inset-0 bg-[#84A98C]/20 rounded-[3rem] rotate-6 scale-95 blur-sm transition-transform duration-700 hover:rotate-12"></div>
              <div className="absolute inset-0 bg-[#6B8E23]/10 rounded-[3rem] -rotate-3 scale-100 transition-transform duration-700 hover:-rotate-6"></div>
              
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/80 bg-white group">
                <Image
                  src="/sahil.jpg"
                  alt="Sahil Sachan"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B8E23]/40 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6B8E23]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-[#6B8E23]/80">Current Focus</p>
                      <p className="text-sm font-bold text-slate-900">Ethereal User Interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Seamless transition element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F6F7F4] to-transparent z-20"></div>
    </section>
  );
}

