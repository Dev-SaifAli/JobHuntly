"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { Company } from "@/lib/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CompanyCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface CompanyMinimal {
  id: string;
  name: string;
  logo: string;
  jobCount: number;
  category: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const DesignIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);

const FintechIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HostingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const BusinessIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const DevIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
  </svg>
);

// ─── Mock Data ────────────────────────────────────────────────────────────────

const CATEGORIES: CompanyCategory[] = [
  { id: "design", label: "Design", icon: <DesignIcon /> },
  { id: "fintech", label: "Fintech", icon: <FintechIcon /> },
  { id: "hosting", label: "Hosting", icon: <HostingIcon /> },
  { id: "business", label: "Business Service", icon: <BusinessIcon /> },
  { id: "dev", label: "Development", icon: <DevIcon /> },
  { id: "marketing", label: "Marketing", icon: <MarketingIcon /> },
];

const CATEGORY_COMPANIES: Record<string, CompanyMinimal[]> = {
  design: [
    { id: "1", name: "Pentagram", logo: "/logos/pentagram.svg", jobCount: 3, category: "design" },
    { id: "2", name: "Wolff Olins", logo: "/logos/wolff-olins.svg", jobCount: 3, category: "design" },
    { id: "3", name: "Clay", logo: "/logos/clay.svg", jobCount: 3, category: "design" },
    { id: "4", name: "MediaMonks", logo: "/logos/mediamonks.svg", jobCount: 3, category: "design" },
    { id: "5", name: "Packer", logo: "/logos/packer.svg", jobCount: 3, category: "design" },
    { id: "6", name: "Square", logo: "/logos/square.svg", jobCount: 3, category: "design" },
    { id: "7", name: "Divy", logo: "/logos/divy.svg", jobCount: 3, category: "design" },
    { id: "8", name: "WebFlow", logo: "/logos/webflow.svg", jobCount: 3, category: "design" },
  ],
  fintech: [
    { id: "9", name: "Revolut", logo: "/logos/revolut.svg", jobCount: 5, category: "fintech" },
    { id: "10", name: "Stripe", logo: "/logos/stripe.svg", jobCount: 4, category: "fintech" },
    { id: "11", name: "Plaid", logo: "/logos/plaid.svg", jobCount: 2, category: "fintech" },
    { id: "12", name: "Brex", logo: "/logos/brex.svg", jobCount: 3, category: "fintech" },
  ],
  hosting: [
    { id: "13", name: "Netlify", logo: "/logos/netlify.svg", jobCount: 4, category: "hosting" },
    { id: "14", name: "Vercel", logo: "/logos/vercel.svg", jobCount: 6, category: "hosting" },
    { id: "15", name: "GoDaddy", logo: "/logos/godaddy.svg", jobCount: 3, category: "hosting" },
  ],
  business: [
    { id: "16", name: "Nomad", logo: "/logos/nomad.svg", jobCount: 3, category: "business" },
    { id: "17", name: "Maze", logo: "/logos/maze.svg", jobCount: 3, category: "business" },
    { id: "18", name: "Canva", logo: "/logos/canva.svg", jobCount: 7, category: "business" },
  ],
  dev: [
    { id: "19", name: "Terraform", logo: "/logos/terraform.svg", jobCount: 3, category: "dev" },
    { id: "20", name: "Blinklist", logo: "/logos/blinklist.svg", jobCount: 2, category: "dev" },
  ],
  marketing: [
    { id: "21", name: "Twitter", logo: "/logos/twitter.svg", jobCount: 8, category: "marketing" },
    { id: "22", name: "Pitch", logo: "/logos/pitch.svg", jobCount: 3, category: "marketing" },
  ],
};

// ─── Mini Company Card ────────────────────────────────────────────────────────

function MiniCompanyCard({ company }: { company: CompanyMinimal }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="group bg-background border-2 border-border hover:border-primary
        transition-all duration-300 hover:shadow-md p-6 flex flex-col items-center
        gap-3 text-center cursor-pointer"
      aria-label={`${company.name}, ${company.jobCount} jobs`}
    >
      {/* Logo */}
      <div className="w-16 h-16 relative flex items-center justify-center" aria-hidden="true">
        {!imgError ? (
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            fill
            className="object-contain"
            onError={() => setImgError(true)}
            sizes="64px"
          />
        ) : (
          <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">
              {company.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors duration-200">
        {company.name}
      </h3>

      {/* Job count */}
      <p className="font-body text-sm text-neutral-60">
        {company.jobCount} Jobs
      </p>
    </article>
  );
}

// ─── Mini Card Skeleton ───────────────────────────────────────────────────────

function MiniCardSkeleton() {
  return (
    <div className="bg-background border-2 border-border p-6 flex flex-col items-center gap-3 animate-pulse">
      <div className="w-16 h-16 bg-neutral-20 rounded-full" />
      <div className="w-24 h-5 bg-neutral-20 rounded" />
      <div className="w-12 h-4 bg-neutral-20 rounded" />
    </div>
  );
}

// ─── Category Tab ─────────────────────────────────────────────────────────────

function CategoryTab({
  category,
  isActive,
  onClick,
}: {
  category: CompanyCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${category.id}`}
      id={`tab-${category.id}`}
      className={`flex flex-col items-start gap-3 px-8 py-6 border-2 min-w-[160px] shrink-0
        transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        ${isActive
          ? "bg-primary border-primary text-white"
          : "bg-background border-border text-foreground hover:border-primary hover:text-primary"
        }`}
    >
      <span className={isActive ? "text-white" : "text-neutral-60"}>
        {category.icon}
      </span>
      <span className="font-heading font-bold text-base text-left leading-snug">
        {category.label}
      </span>
    </button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface CompaniesByCategoryProps {
  isLoading?: boolean;
}

export function CompaniesByCategory({ isLoading = false }: CompaniesByCategoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("design");
  const scrollRef = useRef<HTMLDivElement>(null);

  const companies = CATEGORY_COMPANIES[activeCategory] ?? [];

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section aria-labelledby="category-heading" className="w-full mt-16">
      {/* Section header */}
      <div className="mb-8">
        <h2
          id="category-heading"
          className="font-heading font-bold text-2xl text-foreground"
        >
          Companies by Category
        </h2>
      </div>

      {/* Category tabs — horizontal scroll */}
      <div className="relative mb-8">
        <div
          ref={scrollRef}
          role="tablist"
          aria-label="Company categories"
          className="flex gap-0 overflow-x-auto scrollbar-hide scroll-smooth
            [&>*:not(:last-child)]:border-r-0"
        >
          {CATEGORIES.map((cat) => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>

        {/* Right scroll arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll categories right"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
            w-10 h-10 bg-primary text-white flex items-center justify-center
            shadow-lg hover:bg-primary/90 transition-all duration-200 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Results header */}
      <div
        id={`panel-${activeCategory}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-neutral-60" aria-hidden="true">
            <DesignIcon />
          </span>
          <h3 className="font-heading font-bold text-lg text-foreground">
            {companies.length} Results
          </h3>
        </div>

        {/* Company grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          aria-label={`Companies in ${activeCategory} category`}
        >
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <MiniCardSkeleton key={i} />)
            : companies.map((company) => (
                <MiniCompanyCard key={company.id} company={company} />
              ))}
        </div>

        {/* View more link */}
        {!isLoading && companies.length > 0 && (
          <div className="mt-8">
            <button
              className="flex items-center gap-2 font-body text-sm font-semibold
                text-primary hover:text-primary/80 transition-colors duration-200
                focus-visible:outline-none focus-visible:underline"
              aria-label={`View more ${CATEGORIES.find((c) => c.id === activeCategory)?.label} companies`}
            >
              View more {CATEGORIES.find((c) => c.id === activeCategory)?.label} companies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}





