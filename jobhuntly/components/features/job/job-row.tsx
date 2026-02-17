import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface JobRowProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    logo: string;
    type: string;
    categories: {
      label: string;
      color: "yellow" | "green" | "red" | "purple" | "blue";
    }[];
  };
  onClick?: () => void;
}

export function JobRow({ job, onClick }: JobRowProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-neutral-0 border-2 border-border hover:border-brand-primary  p-4 md:p-6 transition-all duration-300 hover:shadow-md flex items-center gap-4 md:gap-6"
    >
      {/* Logo */}
      <div className="w-12 h-12 md:w-16 md:h-16 relative shrink-0">
        <Image
          src={job.logo}
          alt={job.company}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3 className="font-heading text-base md:text-lg font-bold text-neutral-100 group-hover:text-primary transition-colors truncate">
          {job.title}
        </h3>

        <p className="font-body text-sm text-neutral-60">
          {job.company}
          <span className="mx-2">•</span>
          {job.location}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge
            label={job.type}
            color="green"
            variant="filled"
            shape="pill"
          />
          {job.categories.map((cat, i) => (
            <Badge
              key={i}
              label={cat.label}
              color={cat.color}
              variant="filled"
              shape="pill"
            />
          ))}
        </div>
      </div>
    </button>
  );
}