
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: "Full Time" | "Part Time" | "Contract" | "Internship";
  logo: string;
  categories: {
    label: string;
    color: "yellow" | "green" | "red" | "purple" | "blue";
  }[];
}

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-white border-2 border-[#D6DDEB] hover:border-brand-primary  p-6 transition-all duration-300 hover:shadow-lg flex flex-col gap-4"
    >
     {/* Header: Logo + Job Type Badge */}
      <div className="flex items-start justify-between w-full">
        {/* Logo */}
        <div className="w-12 h-12 relative shrink-0">
          <Image
            src={job.logo}
            alt={job.company}
            fill
            className="object-contain rounded-md"
          />
        </div>

        {/* Badge */}
        <Badge
          label={job.type}
          color="purple"
          variant="outline"
          shape="rounded"
        />
      </div>


      {/* Job Title + Company + Location */}
      <div className="space-y-1">
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {job.title}
        </h3>
        <p className="font-body text-sm text-neutral-60">
          {job.company}
          <span className="mx-2">•</span>
          {job.location}
        </p>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-neutral-60 line-clamp-2">
        {job.description}
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {job.categories.map((cat, i) => (
          <Badge
            key={i}
            label={cat.label}
            color={cat.color}
            variant="filled"
          />
        ))}
      </div>
    </button>
  );
}