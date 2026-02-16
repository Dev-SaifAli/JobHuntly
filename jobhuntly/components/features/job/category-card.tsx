import { ArrowRight, LucideIcon } from "lucide-react";


interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  jobCount: number;
  isActive?: boolean;
  size?: "normal" | "small";
  onClick?: () => void;
}

export function CategoryCard({
  icon: Icon,
  title,
  jobCount,
  isActive = false,
  size = "normal",
  onClick,
}: CategoryCardProps) {
  const isSmall = size === "small";

  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full overflow-hidden border-neutral-20 transition-all duration-75 flex flex-col items-start
        ${isSmall ? "p-4" : "p-6 md:p-8"}
        ${
          isActive
            ? "bg-brand-primary text-white shadow-lg"
            : "bg-neutral-0 text-foreground"
        }
      `}
    >
      {/* Icon */}
      <div className="mb-8 inline-flex">
        <Icon
          className={`
            transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110
            ${isSmall ? "h-8 w-8" : "h-10 w-10 md:h-12 md:w-12"}
            ${isActive ? "text-neutral-0" : " text-brand-primary"}
          `}
          strokeWidth={1.4}
        />
      </div>

      {/* Title */}
      <h3
        className={`
          font-heading font-semibold mb-3
          ${isSmall ? "text-lg" : "text-xl md:text-2xl"}
          group-hover:translate-x-1 transition-all duration-300
        `}
      >
        {title}
      </h3>

      {/* Job Count with Arrow */}
      <div className="flex items-center gap-x-4">
        <span
          className={`
            font-body
            ${isSmall ? "text-sm" : "text-base"}
            ${isActive ? "text-neutral-0" : "text-neutral-60"}
          ` }
        >
          {jobCount} jobs available
        </span>

        <ArrowRight
          className={`
            transition-all duration-300
            ${isSmall ? "h-4 w-4" : "h-5 w-5"}
            ${isActive
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"}
          `}
        />
      </div>
    </button>
  );
}