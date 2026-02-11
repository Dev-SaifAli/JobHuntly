"use client";

import React from "react";
import SearchBar from "../../components/shared/SearchBar";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-[#F8F8FD] transition-colors duration-500 dark:bg-[#202430]">
        <header className="border-b border-slate-200 dark:border-slate-800/50">
          <Navbar />
        </header>

        <main className="mx-auto max-w-7xl overflow-x-hidden px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:pt-14 lg:px-24 lg:pb-20">
          <div className="max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
            <h1 className="font-heading mb-4 text-[2rem] leading-[1.05] tracking-normal text-[#202430] transition-colors duration-300 sm:mb-6 sm:text-5xl md:mb-8 md:text-[64px] lg:text-[72px] dark:text-white">
              <span className="sm:block">Discover</span>{" "}
              <span className="sm:block">more than</span>{" "}
              <span className="relative inline-block text-[#26A4FF]">
                5000+ Jobs
               <svg
  viewBox="0 0 455 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute -bottom-4 left-0 w-full h-40px"
  aria-hidden="true"
>
  <path
    d="M9.7022 16.5071C13.2646 16.5071 16.9966 16.3386 20.559 16.1702C22.0857 16.1702 23.4428 16.0017 24.9696 16.0017C31.4158 15.6649 37.862 15.328 44.3082 14.9911..."
    fill="#26A4FF"
  />
  <path
    d="M35.3166 39.5837C35.8788 39.5837 36.3345 39.1312 36.3345 38.5731C36.3345 38.015 35.8788 37.5625 35.3166 37.5625..."
    fill="#26A4FF"
  />
</svg>

              </span>
            </h1>

            <p className="max-w-xl font-body text-sm leading-relaxed text-slate-500 transition-colors duration-300 sm:text-base md:text-lg dark:text-slate-400">
              Great platform for the job seeker that searching for new career heights and
              passionate about startups.
            </p>

            <div className="mb-2 sm:mb-4">
              <SearchBar />
            </div>

            <div className="flex flex-wrap items-center gap-x-1 gap-y-2 font-body text-sm text-slate-500 transition-colors duration-300 md:text-base dark:text-slate-400">
              <span className="mr-2 font-bold text-[#202430] dark:text-slate-300">Popular :</span>
              <span className="cursor-pointer hover:text-[#4640DE]">UI Designer</span>,
              <span className="ml-1 cursor-pointer hover:text-[#4640DE]">UX Researcher</span>,
              <span className="ml-1 cursor-pointer hover:text-[#4640DE]">Android</span>,
              <span className="ml-1 cursor-pointer hover:text-[#4640DE]">Admin</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
