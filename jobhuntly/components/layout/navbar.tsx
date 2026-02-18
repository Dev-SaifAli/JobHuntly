"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/button";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CONTAINER } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Find Jobs", href: "/jobs" },
    { name: "Browse Companies", href: "/companies" },
  ];

  return (
    <nav className="relative z-50 w-full border-b border-border bg-background transition-colors">
      <div className={CONTAINER}>
        <div className="flex w-full items-center justify-between gap-4 py-3">
          {/* Logo Section */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-10">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Logo size={28} />
              <span className="font-nav text-base font-medium tracking-tight text-foreground sm:text-lg md:text-xl">
                JobHuntly
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden items-center self-stretch lg:flex lg:h-14">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative flex h-full items-center px-3 font-body text-sm font-medium transition-all xl:px-4 xl:text-base ${
                      isActive
                        ? "text-primary"
                        : "text-neutral-60 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-sm bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            <Button variant="tertiary">Login</Button>
            <div className="mx-1 h-8 w-px bg-border" />
            <Button variant="primary">Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="rounded-sm p-2 text-foreground lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-background p-5 shadow-2xl md:p-6 lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium ${
                    isActive ? "text-primary" : "text-neutral-60"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <hr className="my-1 border-border" />
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button variant="tertiary" className="justify-center sm:justify-start">
                Login
              </Button>
              <Button variant="primary" className="w-full sm:w-auto">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}