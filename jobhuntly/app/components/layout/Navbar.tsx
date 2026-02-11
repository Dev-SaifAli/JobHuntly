"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../../design-system/components/ui/Button";
import Logo from "../../design-system/components/ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Browse Companies");

  const navLinks = [
    { name: "Find Jobs", href: "#" },
    { name: "Browse Companies", href: "#" },
  ];

  return (
    <nav className="relative z-50 w-full border-b border-neutral-200 bg-[#F8F8FD] px-3 py-3 transition-colors sm:px-6 sm:py-4 lg:px-10 xl:px-24 dark:border-zinc-800 dark:bg-[#202430]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-10">
          <div className="flex shrink-0 items-center gap-2">
            <Logo size={28} />
            <span className="font-sans text-base font-bold tracking-tight text-zinc-900 sm:text-lg md:text-xl dark:text-white">
              JobHuntly
            </span>
          </div>

          <div className="hidden items-center self-stretch lg:flex lg:h-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(link.name);
                }}
                className={`relative flex h-full items-center px-3 font-sans text-sm font-medium transition-all xl:px-4 xl:text-base ${
                  activeTab === link.name
                    ? "text-[#4640DE] dark:text-blue-400"
                    : "text-zinc-500 hover:text-[#4640DE] dark:text-zinc-400 dark:hover:text-blue-400"
                }`}
              >
                {link.name}
                {activeTab === link.name && (
                  <div className="absolute bottom-[-17px] left-0 h-[3px] w-full rounded-t-sm bg-[#4640DE] dark:bg-blue-500" />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <Button variant="tertiary" className="text-zinc-900 dark:text-zinc-100">
            Login
          </Button>

          <div className="mx-1 h-8 w-px bg-zinc-200 dark:bg-zinc-800" />

          <Button variant="primary" className="rounded-none px-6 xl:px-8">
            Sign Up
          </Button>
        </div>

        <button
          className="rounded-sm p-2 text-zinc-900 lg:hidden dark:text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-zinc-200 bg-[#F8F8FD] p-5 shadow-2xl md:p-6 lg:hidden dark:border-zinc-800 dark:bg-[#202430]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium ${activeTab === link.name ? "text-[#4640DE]" : "text-zinc-600 dark:text-zinc-300"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <hr className="my-1 border-zinc-200 dark:border-zinc-800" />
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button variant="tertiary" className="justify-center sm:justify-start">
                Login
              </Button>
              <Button variant="primary" className="w-full rounded-none sm:w-auto">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
