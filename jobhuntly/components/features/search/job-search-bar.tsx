// components/features/search/job-search-bar.tsx
"use client";

import { Search, MapPin, ChevronDown } from "lucide-react";
import Button from "@/components/ui/button";

export function JobSearchBar() {
  return (
    <div className="bg-white shadow-lg p-2 md:p-4">
      <div className="flex flex-col  md:flex-row gap-4">
        
        {/* Job Title Input */}
            <div className="flex items-center gap-3 flex-1 px-4 py-3 border-b md:border-b-0 border-neutral-20">
              <Search className="w-6 h-6 text-neutral-100 shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
         className="
            flex-1 pb-0.5 font-body text-base text-neutral-100 placeholder:text-neutral-60 bg-transparent
            border-b-2 border-neutral-60 transition-all duration-75
            focus:border-brand-primary focus:outline-none
          "
              />
            </div>
        
            {/* Location Dropdown */}
            <div className="flex items-center gap-3 flex-1 px-4 py-3 relative">
              <MapPin className="w-6 h-6 text-neutral-100 shrink-0" />
              <select
                title="location"
                className="
            flex-1 pb-0.5 font-body text-base text-neutral-100 bg-transparent pr-8 cursor-pointer
            border-b-2 border-neutral-60 appearance-none
            focus:border-brand-primary focus:outline-none
          "
        
                defaultValue="Florence, Italy"
              >
                <option>Florence, Italy</option>
                <option>Rome, Italy</option>
                <option>Milan, Italy</option>
                <option>Venice, Italy</option>
                <option>Naples, Italy</option>
              </select>
              <ChevronDown className="w-6 h-6 text-neutral-60 absolute right-4 pointer-events-none" />
            </div>
        
            {/* Search Button */}
            <div className="md:pl-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto h-full px-8 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                Search
              </Button>
            </div>
        
      </div>
    </div>
  );
}