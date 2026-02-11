"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../../design-system/components/ui/Button";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent py-5 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              {/* Logo icon yahan replace kiya ja sakta hai */}
              <div className="w-4 h-4 bg-white rounded-sm" />
            </div>
            <span className="font-heading text-xl text-white tracking-tight">JobHuntly</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8">
            <a href="#" className="font-body text-body-nm text-white/80 hover:text-white transition-colors">
              Find Jobs
            </a>
            <a href="#" className="font-body text-body-nm text-white/80 hover:text-white transition-colors">
              Browse Companies
            </a>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="tertiary" className="text-white hover:text-brand-primary">
            Login
          </Button>
          <div className="w-1px h-6 bg-white/20 mx-2" />
          <Button variant="primary">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#202430] border-t border-white/10 p-6 flex flex-col gap-6 z-50">
          <a href="#" className="text-white text-lg font-body">Find Jobs</a>
          <a href="#" className="text-white text-lg font-body">Browse Companies</a>
          <hr className="border-white/10" />
          <Button variant="tertiary" className="text-white w-full">Login</Button>
          <Button variant="primary" className="w-full">Sign Up</Button>
        </div>
      )}
    </nav>
  );
}