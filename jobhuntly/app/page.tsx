"use client";

import React, { useState } from "react";
import { Menu, X, Search, MapPin, ChevronDown } from "lucide-react";

/** * NOTE TO USER: 
 * In a local development environment, these would be imported from:
 * import Logo from "@/design-system/components/ui/Logo";
 * import Button from "@/design-system/components/ui/Button";
 * import SearchBar from "@/components/shared/SearchBar";
 * * However, for the Preview to work in this environment, 
 * all components must be defined within this single file.
 */

// --- ATOM: LOGO ---
const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#4640DE"/>
      <path d="M16 27C18.6652 27 21.3304 24.8953 23.0607 23.179C23.4599 22.7831 22.9792 22.2122 22.4822 22.4749C20.6013 23.469 18.0181 24.6 16 24.6C13.9819 24.6 11.3987 23.469 9.5178 22.4749C9.02076 22.2122 8.54012 22.7831 8.93926 23.179C10.6696 24.8953 13.3348 27 16 27Z" fill="white"/>
      <path d="M21.7113 9.31575C21.3913 8.99365 21.3913 8.47732 21.7113 8.15521L23.4297 6.02632L23.4297 5.98937C23.865 5.55866 24.5708 5.55866 25.0062 5.98937C25.4415 6.42007 25.4415 7.11837 25.0062 7.54907L22.9814 9.31575L22.9058 9.38279C22.7477 9.50768 22.5506 9.57665 22.3463 9.57665C22.108 9.57665 21.8795 9.48277 21.7113 9.31575ZM8.66602 15.185C8.66602 13.2892 9.42721 11.4711 10.7822 10.1306C12.1371 8.79004 13.9748 8.03694 15.891 8.03694C19.8812 8.03694 23.1159 11.2372 23.1159 15.185C23.1159 19.1327 19.8812 22.333 15.891 22.333C11.9007 22.333 8.66602 19.1327 8.66602 15.185Z" fill="white"/>
    </svg>
  </div>
);

// --- ATOM: BUTTON ---
const Button = ({ 
  children, 
  variant = "primary", 
  className = "",
  ...props 
}: any) => {
  const baseStyles = "px-6 py-3 font-bold transition-all active:scale-95 cursor-pointer font-body inline-flex items-center justify-center";
  const variants = {
    primary: "bg-[#4640DE] text-white hover:bg-[#3530b3]",
    secondary: "bg-[#CCCCF5] text-[#4640DE] hover:bg-[#b8b8f0]",
    tertiary: "bg-transparent text-[#4640DE]",
    ghost: "bg-transparent text-white/80 hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- MOLECULE: SEARCH BAR ---
const SearchBar = () => (
  <div className="bg-white p-2 md:p-3 flex flex-col md:flex-row items-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full rounded-sm">
    <div className="flex items-center gap-3 px-4 py-4 flex-1 border-b md:border-b-0 md:border-r border-gray-200 w-full group">
      <Search className="text-gray-400 group-focus-within:text-[#4640DE] transition-colors" size={24} />
      <input 
        type="text" 
        placeholder="Job title or keyword"
        className="w-full outline-none text-[#25324B] placeholder:text-gray-400 bg-transparent text-lg font-body"
      />
    </div>

    <div className="flex items-center gap-3 px-4 py-4 flex-1 w-full group">
      <MapPin className="text-gray-400 group-focus-within:text-[#4640DE] transition-colors" size={24} />
      <div className="flex items-center justify-between w-full cursor-pointer">
        <span className="text-gray-400 text-lg font-body">Florence, Italy</span>
        <ChevronDown className="text-gray-300" size={20} />
      </div>
    </div>

    <Button className="w-full md:w-auto px-10 py-4 text-lg rounded-none">
      Search my job
    </Button>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#202430] text-white font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Monument Extended';
          src: url('https://fonts.cdnfonts.com/s/19595/MonumentExtended-Regular.woff') format('woff');
        }
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&display=swap');
        .font-heading { font-family: 'Monument Extended', sans-serif; }
        .font-body { font-family: 'Epilogue', sans-serif; }
      `}} />

      {/* NAVBAR */}
      <nav className="w-full bg-transparent py-6 px-6 lg:px-24 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 cursor-pointer">
              <Logo />
              <span className="font-heading text-xl text-white tracking-tight">JobHuntly</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#" className="font-body text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-[#4640DE] pb-1">Find Jobs</a>
              <a href="#" className="font-body text-white/80 hover:text-white transition-colors border-b-2 border-transparent hover:border-[#4640DE] pb-1">Browse Companies</a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="tertiary" className="text-white hover:text-[#4640DE]">Login</Button>
            <div className="w-[1px] h-6 bg-white/20 mx-1" />
            <Button variant="primary" className="rounded-none px-8">Sign Up</Button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 lg:px-24 pt-12 md:pt-24 pb-32">
        <div className="max-w-4xl">
          <h1 className="text-white text-5xl md:text-[72px] font-heading leading-[1.1] tracking-tight mb-8">
            Discover <br />
            more than <br />
            <span className="text-[#26A4FF] relative">
              5000+ Jobs
              <svg className="absolute -bottom-4 left-0 w-full" width="350" height="12" viewBox="0 0 350 12" fill="none">
                <path d="M2.5 9.5C50.5 3.5 150.5 1.5 347.5 7.5" stroke="#26A4FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-[20px] mb-12 leading-relaxed max-w-xl font-body">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>
          
          <div className="relative z-20 max-w-3xl">
            <SearchBar />
          </div>

          <div className="mt-8 font-body text-white/50">
            <span className="font-bold text-white/80">Popular :</span> UI Designer, UX Researcher, Android, Admin
          </div>
        </div>
      </main>
    </div>
  );
}