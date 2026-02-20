// app/(public)/jobs/all-jobs-section.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { CONTAINER } from "@/lib/constants";
// ─── Types ──────────────────────────────────────────────────────────────────
import { Job, FilterGroup } from "@/lib/types";
import { MobileFilterDrawer } from "./mobile-filter-drawer";



// ─── Mock Data ───────────────────────────────────────────────────────────────

const JOBS: Job[] = [
  {
    id: "1",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: "/logos/nomad.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" },
      { label: "Design", color: "purple" },
    ],
    applied: 5,
    capacity: 10,
    datePosted: new Date("2025-01-15"),
    salary: 3500,
    level: "Entry Level",
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    logo: "/logos/dropbox.svg",
    type: "Full-Time",
    categories: [
      { label: "Design", color: "green" },
      { label: "Business", color: "purple" },
    ],
    applied: 2,
    capacity: 10,
    datePosted: new Date("2025-01-20"),
    salary: 4000,
    level: "Mid Level",
  },
  {
    id: "3",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: "/logos/terraform.svg",
    type: "Remote",
    categories: [
      { label: "Technology", color: "red" },
      { label: "Engineering", color: "blue" },
    ],
    applied: 8,
    capacity: 12,
    datePosted: new Date("2025-01-10"),
    salary: 5000,
    level: "Senior Level",
  },
  {
    id: "4",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    logo: "/logos/revolut.svg",
    type: "Part-Time",
    categories: [{ label: "Marketing", color: "yellow" }],
    applied: 0,
    capacity: 10,
    datePosted: new Date("2025-01-25"),
    salary: 2000,
    level: "Entry Level",
  },
  {
    id: "5",
    title: "Lead Engineer",
    company: "Canva",
    location: "Ankara, Turkey",
    logo: "/logos/canva.svg",
    type: "Full-Time",
    categories: [
      { label: "Engineering", color: "blue" },
      { label: "Technology", color: "red" },
    ],
    applied: 5,
    capacity: 10,
    datePosted: new Date("2025-01-12"),
    salary: 6000,
    level: "Director",
  },
  {
    id: "6",
    title: "Product Designer",
    company: "ClassPass",
    location: "Berlin, Germany",
    logo: "/logos/classpass.svg",
    type: "Contract",
    categories: [{ label: "Design", color: "green" }],
    applied: 5,
    capacity: 10,
    datePosted: new Date("2025-01-18"),
    salary: 3200,
    level: "Mid Level",
  },
  {
    id: "7",
    title: "Customer Manager",
    company: "Pitch",
    location: "Berlin, Germany",
    logo: "/logos/pitch.svg",
    type: "Internship",
    categories: [
      { label: "Business", color: "purple" },
      { label: "Sales", color: "blue" },
    ],
    applied: 3,
    capacity: 10,
    datePosted: new Date("2025-01-22"),
    salary: 1200,
    level: "Entry Level",
  },
];

const FILTER_GROUPS: FilterGroup[] = [
  {
    label: "Type of Employment",
    key: "type",
    options: [
      { label: "Full-time", count: 3, value: "Full-Time" },
      { label: "Part-Time", count: 1, value: "Part-Time" },
      { label: "Remote", count: 1, value: "Remote" },
      { label: "Internship", count: 1, value: "Internship" },
      { label: "Contract", count: 1, value: "Contract" },
    ],
  },
  {
    label: "Categories",
    key: "categories",
    options: [
      { label: "Design", count: 3, value: "Design" },
      { label: "Sales", count: 1, value: "Sales" },
      { label: "Marketing", count: 2, value: "Marketing" },
      { label: "Business", count: 2, value: "Business" },
      { label: "Engineering", count: 2, value: "Engineering" },
      { label: "Technology", count: 2, value: "Technology" },
    ],
  },
  {
    label: "Job Level",
    key: "level",
    options: [
      { label: "Entry Level", count: 3, value: "Entry Level" },
      { label: "Mid Level", count: 2, value: "Mid Level" },
      { label: "Senior Level", count: 1, value: "Senior Level" },
      { label: "Director", count: 1, value: "Director" },
    ],
  },
  {
    label: "Salary Range",
    key: "salary",
    options: [
      { label: "$700 - $1000", count: 1, value: "700-1000" },
      { label: "$1000 - $1500", count: 1, value: "1000-1500" },
      { label: "$1500 - $2000", count: 1, value: "1500-2000" },
      { label: "$3000 or above", count: 4, value: "3000+" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FilterSection({
  group,
  activeFilters,
  onToggle,
}: {
  group: FilterGroup;
  activeFilters: Map<string, Set<string>>;
  onToggle: (key: string, value: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const checked = activeFilters.get(group.key) || new Set<string>();

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <span className="font-body font-bold text-lg text-foreground">
          {group.label}
        </span>
        <svg
          className={`w-4 h-4 text-neutral-60 transition-transform duration-200 ${
            open ? "" : "rotate-180"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {open && (
        <div className="flex flex-col gap-3">
          {group.options.map((opt) => {
            const isChecked = checked.has(opt.value);
            return (
              <label
                key={opt.value}
                className="flex items-center gap-3 cursor-pointer group/item"
              >
                <div
                  onClick={() => onToggle(group.key, opt.value)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-150 cursor-pointer
                  ${
                    isChecked
                      ? "bg-primary border-primary"
                      : "border-neutral-40 bg-white group-hover/item:border-primary"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-body text-sm text-neutral-80 group-hover/item:text-neutral-100 transition-colors flex-1">
                  {opt.label}
                  <span className="text-neutral-40 ml-1">({opt.count})</span>
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

function  CapacityBar({
  applied,
  capacity,
}: {
  applied: number;
  capacity: number;
}) {
  const pct = capacity > 0 ? Math.round((applied / capacity) * 100) : 0;
  return (
    <div className="flex flex-col items-end gap-1">
      <div className="w-full min-w-[80px] max-w-[128px] h-1.5 bg-neutral-20 overflow-hidden">
        <div
          className="h-full bg-accent-green transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="font-body text-xs text-neutral-60">
        <span className="font-bold text-neutral-100">{applied} applied</span> of{" "}
        {capacity} capacity
      </p>
    </div>
  );
}

function JobListRow({ job }: { job: Job }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-md
  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6">
      {/* Logo */}
      <div className="w-16 h-16 relative shrink-0   flex items-center justify-center overflow-hidden">
        {!imageError ? (
          <Image
            src={job.logo}
            alt={job.company}
            fill
            className="object-contain p-2"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary text-white font-heading text-xl font-bold">
            {job.company.charAt(0)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {job.title}
        </h3>
        <p className="font-body text-sm text-neutral-60">
          {job.company}
          <span className="mx-2 text-neutral-40">•</span>
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
              variant="outline"
              shape="pill"
            />
          ))}
        </div>
      </div>

      {/* Right: Apply + Capacity */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-3 shrink-0">
        <Button variant="primary" size="md" className="w-35">Apply</Button>
        <CapacityBar applied={job.applied} capacity={job.capacity} />
      </div>
    </div>
  );
}

function JobGridCard({ job }: { job: Job }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border-border border-2 hover:border-primary transition-all duration-300 hover:shadow-md  p-6 flex flex-col gap-4">
      {/* Logo */}
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 relative shrink-0  flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-contain p-2"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary text-white font-heading text-lg font-bold">
              {job.company.charAt(0)}
            </div>
          )}
        </div>
        <Badge label={job.type} color="green" variant="outline" shape="rounded" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {job.title}
        </h3>
        <p className="font-body text-sm text-neutral-60">
          {job.company}
          <span className="mx-2 text-neutral-40">•</span>
          {job.location}
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
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

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-auto pt-4 border-t border-border gap-3">
        <CapacityBar applied={job.applied} capacity={job.capacity} />
        <Button variant="primary" size="md" className="w-35">Apply</Button>
      </div>
    </div>
  );
}

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    
    if (current > 3) pages.push("...");
    
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (current < total - 2) pages.push("...");
    
    pages.push(total);
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-10 h-10 flex items-center justify-center border border-border rounded text-neutral-60 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {getPageNumbers().map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="w-10 h-10 flex items-center justify-center text-neutral-40 font-body text-sm"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onChange(page as number)}
            className={`w-10 h-10 flex items-center justify-center font-body text-sm font-semibold border rounded transition-all
            ${
              current === page
                ? "bg-primary border-primary text-white"
                : "border-border text-neutral-60 hover:border-primary hover:text-primary"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-10 h-10 flex items-center justify-center border border-border rounded text-neutral-60 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function AllJobsSection() {
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sort, setSort] = useState("Most relevant");
  const [activeFilters, setActiveFilters] = useState<Map<string, Set<string>>>(
    new Map()
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const clearAllFilters = ()=> setActiveFilters(new Map());


  const JOBS_PER_PAGE = 5;

  // Filter jobs based on active filters
  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      // Type filter
      const typeFilters = activeFilters.get("type");
      if (typeFilters && typeFilters.size > 0) {
        if (!typeFilters.has(job.type)) return false;
      }

      // Category filter
      const catFilters = activeFilters.get("categories");
      if (catFilters && catFilters.size > 0) {
        const hasMatch = job.categories.some((cat) =>
          catFilters.has(cat.label)
        );
        if (!hasMatch) return false;
      }

      // Level filter
      const levelFilters = activeFilters.get("level");
      if (levelFilters && levelFilters.size > 0) {
        if (!levelFilters.has(job.level)) return false;
      }

      // Salary filter
      const salaryFilters = activeFilters.get("salary");
      if (salaryFilters && salaryFilters.size > 0) {
        let matchSalary = false;
        salaryFilters.forEach((range) => {
          if (range === "700-1000" && job.salary >= 700 && job.salary <= 1000)
            matchSalary = true;
          if (
            range === "1000-1500" &&
            job.salary > 1000 &&
            job.salary <= 1500
          )
            matchSalary = true;
          if (
            range === "1500-2000" &&
            job.salary > 1500 &&
            job.salary <= 2000
          )
            matchSalary = true;
          if (range === "3000+" && job.salary >= 3000) matchSalary = true;
        });
        if (!matchSalary) return false;
      }

      return true;
    });
  }, [activeFilters]);

  // Sort jobs
  const sortedJobs = useMemo(() => {
    const sorted = [...filteredJobs];
    if (sort === "Newest first") {
      sorted.sort(
        (a, b) => b.datePosted.getTime() - a.datePosted.getTime()
      );
    } else if (sort === "Oldest first") {
      sorted.sort(
        (a, b) => a.datePosted.getTime() - b.datePosted.getTime()
      );
    } else if (sort === "Salary: High to Low") {
      sorted.sort((a, b) => b.salary - a.salary);
    }
    return sorted;
  }, [filteredJobs, sort]);

  // Paginate jobs
  const totalPages = Math.ceil(sortedJobs.length / JOBS_PER_PAGE);
  const startIdx = (page - 1) * JOBS_PER_PAGE;
  const endIdx = startIdx + JOBS_PER_PAGE;
  const paginatedJobs = sortedJobs.slice(startIdx, endIdx);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [activeFilters, sort]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const toggleFilter = (key: string, value: string) => {
    setActiveFilters((prev) => {
      const newMap = new Map(prev);
      const existing = newMap.get(key) || new Set<string>();
      const newSet = new Set(existing);

      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }

      if (newSet.size === 0) {
        newMap.delete(key);
      } else {
        newMap.set(key, newSet);
      }

      return newMap;
    });
  };

  return (
    <section className={`${CONTAINER} py-10`}>
      <div className="flex gap-0 lg:gap-8">
        {/* ── Sidebar Filters ── */}
        <aside className="w-64 shrink-0 hidden lg:block">
          {FILTER_GROUPS.map((group) => (
            <div key={group.label}>
              <FilterSection
                group={group}
                activeFilters={activeFilters}
                onToggle={toggleFilter}
              />
              <div className="border-t border-border mb-6" />
            </div>
          ))}
        </aside>

        {/* ── Main Content ── */}
        <div className="flex-1 min-w-0">
          <button
  onClick={() => setDrawerOpen(true)}
  className="lg:hidden flex items-center gap-2 border border-border px-4 py-2 font-body text-sm text-neutral-80 mb-4"
>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 10h12M9 16h6" />
  </svg>
  Filters
  {Array.from(activeFilters.values()).reduce((sum, s) => sum + s.size, 0) > 0 && (
    <span className="bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full ml-1">
      {Array.from(activeFilters.values()).reduce((sum, s) => sum + s.size, 0)}
    </span>
  )}
</button>
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-heading text-3xl text-foreground">
                All Jobs
              </h3>
              <p className="font-body text-sm text-neutral-60 mt-0.5">
                Showing {sortedJobs.length} results
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="font-body text-sm text-neutral-60">
                  Sort by:
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-body text-sm font-semibold text-foreground border border-border bg-transparent rounded px-3 py-1.5 focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option>Most relevant</option>
                  <option>Newest first</option>
                  <option>Oldest first</option>
                  <option>Salary: High to Low</option>
                </select>
              </div>

              {/* View mode toggles */}
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded transition-all ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "text-neutral-60 hover:text-neutral-100"
                  }`}
                  aria-label="Grid view"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <rect x="1" y="1" width="6" height="6" rx="0.5" />
                    <rect x="9" y="1" width="6" height="6" rx="0.5" />
                    <rect x="1" y="9" width="6" height="6" rx="0.5" />
                    <rect x="9" y="9" width="6" height="6" rx="0.5" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded transition-all ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "text-neutral-60 hover:text-neutral-100"
                  }`}
                  aria-label="List view"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <rect x="1" y="2" width="14" height="2.5" rx="0.5" />
                    <rect x="1" y="6.75" width="14" height="2.5" rx="0.5" />
                    <rect x="1" y="11.5" width="14" height="2.5" rx="0.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Job list/grid */}
          {paginatedJobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-neutral-60">
                No jobs found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                  : "flex flex-col gap-4"
              }
            >
              {paginatedJobs.map((job) =>
                viewMode === "list" ? (
                  <JobListRow key={job.id} job={job} />
                ) : (
                  <JobGridCard key={job.id} job={job} />
                )
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              current={page}
              total={totalPages}
              onChange={setPage}
            />
          )}
        </div>
        <MobileFilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filterGroups={FILTER_GROUPS}
        activeFilters={activeFilters}
        onToggle={toggleFilter}
        onClear={clearAllFilters}
      />
      </div>
    </section>
  );
}