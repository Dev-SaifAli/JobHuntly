"use client";

import React from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const SearchBar = () => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-sm border border-search bg-search p-3 shadow-lg sm:gap-3 sm:p-4 lg:flex-row lg:items-center lg:gap-0 lg:p-4">
      <div className="w-full flex-1 border-b border-neutral-20 pb-1 lg:border-b-0 lg:border-r lg:pb-0 dark:border-neutral-80">
        <Input
          placeholder="Job title or keyword"
          icon={<Search size={20} />}
          className="border-none"
        />
      </div>

      <div className="relative w-full flex-1">
        <Input
          placeholder="Florence, Italy"
          icon={<MapPin size={20} />}
          className="border-none pr-12"
        />
        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-40"
        />
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full rounded-none px-6 text-sm sm:text-base lg:w-auto lg:px-8"
      >
        Search my job
      </Button>
    </div>
  );
};

export default SearchBar;
