// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../../design-system/components/ui/Button"; // Check this path!
import Logo from "../../design-system/components/ui/Logo";


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-transparent py-6 px-6 lg:px-24 relative z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* LEFT SECTION */}
//         <div className="flex items-center gap-12">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <Logo size={32} />
//             <span className="font-body font-bold text-xl text-main tracking-tight">
//               JobHuntly
//             </span>
//           </div>

//           <div className="hidden md:flex gap-8">
//             <a href="#" className="font-body font-medium text-nav hover:text-brand-primary transition-colors">
//               Find Jobs
//             </a>
//             <a href="#" className="font-body font-medium text-nav hover:text-brand-primary transition-colors">
//               Browse Companies
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="hidden md:flex items-center gap-4">
//           <Button 
//             variant="tertiary" 
//             className="font-body font-bold text-main hover:text-brand-primary"
//           >
//             Login
//           </Button>
          
//           <div className="w-[1px] h-6 bg-neutral-20 dark:bg-white/20 mx-2" />
          
//           <Button 
//             variant="primary" 
//             className="rounded-none px-8 font-body font-bold"
//           >
//             Sign Up
//           </Button>
//         </div>

//         {/* MOBILE TOGGLE */}
//         <button 
//           className="md:hidden text-main" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-main border-b border-search p-6 flex flex-col gap-4 md:hidden shadow-xl">
//           <a href="#" className="font-body font-medium text-nav">Find Jobs</a>
//           <a href="#" className="font-body font-medium text-nav">Browse Companies</a>
//           <hr className="border-neutral-10 dark:border-white/10" />
//           <Button variant="tertiary" className="justify-start px-0 text-main">Login</Button>
//           <Button variant="primary" className="rounded-none w-full">Sign Up</Button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   // Defaulting to 'Browse Companies' to match your design requirement
//   const [activeTab, setActiveTab] = useState('Browse Companies');

//   const navLinks = [
//     { name: 'Find Jobs', href: '#' },
//     { name: 'Browse Companies', href: '#' },
//   ];

//   return (
//     <nav className="w-full bg-white dark:bg-zinc-950 border-b border-neutral-100 dark:border-zinc-800 py-4 px-6 lg:px-24 relative z-50 transition-colors">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* LEFT SECTION (Logo and Links) */}
//         <div className="flex items-center gap-12">
//           {/* Logo Branding */}
//           <div className="flex items-center gap-2 cursor-pointer">
//             <Logo size={32} />
//             <span className="font-sans font-bold text-xl text-zinc-900 dark:text-white tracking-tight">
//               JobHuntly
//             </span>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center self-stretch h-14">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveTab(link.name);
//                 }}
//                 className={`h-full flex items-center px-4 font-sans font-medium transition-all relative
//                   ${activeTab === link.name 
//                     ? 'text-[#4640DE] dark:text-blue-400' 
//                     : 'text-zinc-500 hover:text-[#4640DE] dark:text-zinc-400 dark:hover:text-blue-400'
//                   }`}
//               >
//                 {link.name}
//                 {/* Active Underline (as seen in your screenshot) */}
//                 {activeTab === link.name && (
//                   <div className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-[#4640DE] dark:bg-blue-500 rounded-t-sm" />
//                 )}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SECTION (Auth Buttons) */}
//         <div className="hidden md:flex items-center gap-4">
//           <Button 
//             variant="tertiary" 
//             className="text-zinc-900 dark:text-zinc-100"
//           >
//             Login
//           </Button>
          
//           {/* Vertical Divider Line */}
//           <div className="w-[1px] h-8 bg-zinc-200 dark:bg-zinc-800 mx-2" />
          
//           <Button 
//             variant="primary" 
//             className="rounded-none px-8"
//           >
//             Sign Up
//           </Button>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <button 
//           className="md:hidden text-zinc-900 dark:text-white p-2" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
//           {navLinks.map((link) => (
//             <a 
//               key={link.name}
//               href={link.href} 
//               className={`font-medium text-lg ${activeTab === link.name ? 'text-[#4640DE]' : 'text-zinc-600 dark:text-zinc-300'}`}
//               onClick={() => {
//                 setActiveTab(link.name);
//                 setIsOpen(false);
//               }}
//             >
//               {link.name}
//             </a>
//           ))}
//           <hr className="border-zinc-100 dark:border-zinc-800 my-2" />
//           <div className="flex flex-col gap-3">
//             <Button variant="tertiary">Login</Button>
//             <Button variant="primary" className="rounded-none w-full">Sign Up</Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  // Defaulting to 'Browse Companies' to match your design requirement
  const [activeTab, setActiveTab] = useState('Browse Companies');

  const navLinks = [
    { name: 'Find Jobs', href: '#' },
    { name: 'Browse Companies', href: '#' },
  ];

  return (
    <nav className="w-full bg-[#F8F8FD] dark:bg-[#202430] border-b border-neutral-200 dark:border-zinc-800 py-4 px-6 lg:px-24 relative z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT SECTION (Logo and Links) */}
        <div className="flex items-center gap-12">
          {/* Logo Branding */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Logo size={32} />
            <span className="font-sans font-bold text-xl text-zinc-900 dark:text-white tracking-tight">
              JobHuntly
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center self-stretch h-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(link.name);
                }}
                className={`h-full flex items-center px-4 font-sans font-medium transition-all relative
                  ${activeTab === link.name 
                    ? 'text-[#4640DE] dark:text-blue-400' 
                    : 'text-zinc-500 hover:text-[#4640DE] dark:text-zinc-400 dark:hover:text-blue-400'
                  }`}
              >
                {link.name}
                {/* Active Underline (as seen in your screenshot) */}
                {activeTab === link.name && (
                  <div className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-[#4640DE] dark:bg-blue-500 rounded-t-sm" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION (Auth Buttons) */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="tertiary" 
            className="text-zinc-900 dark:text-zinc-100"
          >
            Login
          </Button>
          
          {/* Vertical Divider Line */}
          <div className="w-[1px] h-8 bg-zinc-200 dark:bg-zinc-800 mx-2" />
          
          <Button 
            variant="primary" 
            className="rounded-none px-8"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-zinc-900 dark:text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F8F8FD] dark:bg-[#202430] border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`font-medium text-lg ${activeTab === link.name ? 'text-[#4640DE]' : 'text-zinc-600 dark:text-zinc-300'}`}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <hr className="border-zinc-200 dark:border-zinc-800 my-2" />
          <div className="flex flex-col gap-3">
            <Button variant="tertiary">Login</Button>
            <Button variant="primary" className="rounded-none w-full">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}