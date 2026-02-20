"use client";

import Image from "next/image";
import { useState } from "react";
import { Company } from "@/lib/types";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const RECOMMENDED_COMPANIES: Company[] = [
  {
    id: "1",
    name: "Nomad",
    logo: "/logos/nomad.svg",
    description:
      "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    jobCount: 3,
    tags: [{ label: "Business Service", color: "yellow" }],
  },
  {
    id: "2",
    name: "Discord",
    logo: "/logos/discord.svg",
    description:
      "We'd love to work with someone like you. We care about creating a delightful experience.",
    jobCount: 3,
    tags: [{ label: "Business Service", color: "yellow" }],
  },
  {
    id: "3",
    name: "Maze",
    logo: "/logos/maze.svg",
    description:
      "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
    jobCount: 3,
    tags: [{ label: "Business Service", color: "yellow" }],
  },
  {
    id: "4",
    name: "Udacity",
    logo: "/logos/udacity.svg",
    description:
      "Udacity is a new type of online university that teaches the actual programming skills.",
    jobCount: 3,
    tags: [{ label: "Business Service", color: "yellow" }],
  },
  {
    id: "5",
    name: "Webflow",
    logo: "/logos/webflow.svg",
    description:
      "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    jobCount: 3,
    tags: [
      { label: "Business Service", color: "yellow" },
      { label: "Technology", color: "purple" },
    ],
  },
  {
    id: "6",
    name: "Foundation",
    logo: "/logos/foundation.svg",
    description:
      "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    jobCount: 3,
    tags: [
      { label: "Business Service", color: "yellow" },
      { label: "Crypto", color: "purple" },
    ],
  },
];

// ─── Tag Badge ────────────────────────────────────────────────────────────────

const TAG_STYLES: Record<string, string> = {
  yellow: "border-accent-yellow text-accent-yellow",
  purple: "border-accent-purple text-accent-purple",
  blue: "border-accent-blue text-accent-blue",
  green: "border-accent-green text-accent-green",
  red: "border-accent-red text-accent-red",
};

function TagBadge({
  label,
  color,
}: {
  label: string;
  color: keyof typeof TAG_STYLES;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-sm border text-xs font-semibold font-body
        ${TAG_STYLES[color] ?? TAG_STYLES.yellow}`}
    >
      {label}
    </span>
  );
}

// ─── Company Card ─────────────────────────────────────────────────────────────

function CompanyCard({ company }: { company: Company }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="group bg-background border-2 border-border hover:border-primary
        transition-all duration-300 hover:shadow-lg p-6 flex flex-col gap-4 cursor-pointer
        focus-within:border-primary focus-within:shadow-lg"
      aria-label={`${company.name} - ${company.jobCount} jobs available`}
    >
      {/* Top row: logo + job count */}
      <div className="flex items-start justify-between">
        {/* Logo */}
        <div
          className="w-14 h-14 relative shrink-0 flex items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          {!imgError ? (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              fill
              className="object-contain"
              onError={() => setImgError(true)}
              sizes="56px"
            />
          ) : (
            <div className="w-full h-full bg-primary flex items-center justify-center rounded">
              <span className="text-white font-heading font-bold text-xl">
                {company.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Job count */}
        <span className="font-body text-sm text-neutral-60" aria-label={`${company.jobCount} open jobs`}>
          {company.jobCount} Jobs
        </span>
      </div>

      {/* Company name */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
          {company.name}
        </h3>
        <p className="font-body text-sm text-neutral-60 leading-relaxed line-clamp-3">
          {company.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {company.tags.map((tag, i) => (
          <TagBadge key={i} label={tag.label} color={tag.color} />
        ))}
      </div>
    </article>
  );
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────

function CompanyCardSkeleton() {
  return (
    <div className="bg-background border-2 border-border p-6 flex flex-col gap-4 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 bg-neutral-20 rounded" />
        <div className="w-12 h-4 bg-neutral-20 rounded" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-32 h-5 bg-neutral-20 rounded" />
        <div className="w-full h-4 bg-neutral-20 rounded" />
        <div className="w-3/4 h-4 bg-neutral-20 rounded" />
      </div>
      <div className="flex gap-2 mt-auto pt-2">
        <div className="w-28 h-7 bg-neutral-20 rounded" />
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface RecommendedCompaniesSectionProps {
  companies?: Company[];
  isLoading?: boolean;
}

export function RecommendedCompaniesSection({
  companies = RECOMMENDED_COMPANIES,
  isLoading = false,
}: RecommendedCompaniesSectionProps) {
  return (
    <section aria-labelledby="recommended-companies-heading" className="w-full">
      {/* Section header */}
      <div className="mb-8">
        <h2
          id="recommended-companies-heading"
          className="font-heading font-bold text-2xl text-foreground"
        >
          Recommended Companies
        </h2>
        <p className="font-body text-sm text-neutral-60 mt-1">
          Based on your profile, company preferences, and recent activity
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
        aria-label="Recommended companies"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} role="listitem">
                <CompanyCardSkeleton />
              </div>
            ))
          : companies.map((company) => (
              <div key={company.id} role="listitem">
                <CompanyCard company={company} />
              </div>
            ))}
      </div>
    </section>
  );
}