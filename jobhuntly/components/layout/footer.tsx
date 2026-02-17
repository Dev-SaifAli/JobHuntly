
"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "@/components/ui/logo";
import Button from "../ui/button";
import Input from "../ui/input";

const aboutLinks = [
  { label: "Companies", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Advice", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const resourceLinks = [
  { label: "Help Docs", href: "#" },
  { label: "Guide", href: "#" },
  { label: "Updates", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaDribbble, href: "#", label: "Dribbble" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-background text-white">
     
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 xl:px-24 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

      
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-body text-xl  text-white">
                JobHuntly
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/60">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

         
          <div className="space-y-6">
            <h4 className="font-body text-base  text-white">
              About
            </h4>
            <ul className="space-y-4">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  
                   <a href={link.href}
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="space-y-6">
            <h4 className="font-body text-base  text-white">
              Resources
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  
                <a href={link.href}
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
         <div className="space-y-6">
  <h4 className="font-body text-base text-white">
    Get job notifications
  </h4>
  <p className="font-body text-sm leading-relaxed text-white/60">
    The latest job news, articles, sent to your inbox weekly.
  </p>
  <div className="flex border-2 border-white overflow-hidden">
    <Input
      placeholder="Email Address"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1 w-0 min-w-0 h-12 rounded-none border-0 bg-transparent text-white text-sm placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
    />
    <Button
      variant="primary"
      size="sm"
      className="rounded-none shrink-0 h-12 px-5 text-sm"
    >
      Subscribe
    </Button>
  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-24 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p className="font-body text-sm text-white/40">
              {new Date().getFullYear()} @ JobHuntly. All rights reserved.
            </p>

            {/* Social Icons */}
<div className="flex items-center gap-3">
  {socialLinks.map((social) => (
    
     <a key={social.label}
      href={social.href}
      aria-label={social.label}
      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-primary hover:shadow-lg hover:shadow-primary/30"
    >
      <social.icon className="w-3.5 h-3.5 text-white" />
    </a>
  ))}
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}