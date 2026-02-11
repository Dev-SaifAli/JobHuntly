"use client";

import React from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import Input from "../../design-system/components/ui/Input"
import Button from "../../design-system/components/ui/Button";

const SearchBar = () => {
  return (
    <div className="bg-search border border-search p-3 md:p-4 shadow-lg flex flex-col md:flex-row items-center w-full rounded-sm">
      
      {/* Job Title Input */}
      <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-neutral-20 dark:border-neutral-80">
        <Input 
          placeholder="Job title or keyword" 
          icon={<Search size={24} />}
          className="border-none"
        />
      </div>

      {/* Location Input */}
      <div className="flex-1 w-full relative">
        <Input 
          placeholder="Florence, Italy" 
          icon={<MapPin size={24} />}
          className="border-none pr-12"
        />
        <ChevronDown 
          size={20} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-40 pointer-events-none" 
        />
      </div>

      {/* Search Button */}
      <Button 
        variant="primary" 
        size="lg" 
        className="w-full md:w-auto px-10 rounded-none"
      >
        Search my job
      </Button>
    </div>
  );
};

export default SearchBar;