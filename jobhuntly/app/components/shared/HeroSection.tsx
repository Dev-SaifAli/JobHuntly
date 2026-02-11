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

        <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:px-24 lg:pb-20">
          <div className="max-w-4xl space-y-8 md:space-y-10">
            <h1 className="font-heading mb-6 text-[2.35rem] leading-[1.05] tracking-normal text-[#202430] transition-colors duration-300 sm:text-5xl md:mb-8 md:text-[64px] lg:text-[72px] dark:text-white">
              Discover <br />
              more than <br />
              <span className="relative inline-block text-[#26A4FF]">
                5000+ Jobs
                <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#26A4FF]/30 sm:-bottom-3" />
              </span>
            </h1>

            <p className="max-w-xl font-body text-base leading-relaxed text-slate-500 transition-colors duration-300 sm:text-lg md:text-xl dark:text-slate-400">
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
