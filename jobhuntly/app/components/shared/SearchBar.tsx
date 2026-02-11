"use client"
import React from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import Input from "../../design-system/components/ui/Input";
import Button from "../../design-system/components/ui/Button";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 shadow-lg flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl mx-auto border border-neutrals-100">
      
      {/* 1. Job Title Input (Atom) */}
      <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-neutrals-100">
        <Input 
          placeholder="Job title or keyword" 
          icon={<Search size={24} className="text-neutrals-900" />}
          className="border-none focus:border-none py-4" 
        />
      </div>

      {/* 2. Location Input (Atom) with a custom dropdown icon */}
      <div className="flex-1 w-full flex items-center relative">
        <Input 
          placeholder="Florence, Italy" 
          icon={<MapPin size={24} className="text-neutrals-900" />}
          className="border-none focus:border-none py-4"
        />
        <ChevronDown size={20} className="absolute right-4 text-neutrals-300 pointer-events-none" />
      </div>

      {/* 3. Search Button (Atom) */}
      <Button variant="primary" size="lg" className="w-full md:w-auto px-10">
        Search my job
      </Button>
      
    </div>
  );
};

export default SearchBar;