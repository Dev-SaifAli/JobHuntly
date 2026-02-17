"use client"
import { JobRow } from "@/components/features/job/job-row";
import { ArrowRight } from "lucide-react";

const latestJobs = [
  {
    id: "1",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: "/logos/nomad.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "2",
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: "/logos/netlify.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "3",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    logo: "/logos/dropbox.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "4",
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    logo: "/logos/maze.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "5",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: "/logos/terraform.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "6",
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: "/logos/udacity.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "7",
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: "/logos/packer.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
  {
    id: "8",
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: "/logos/webflow.svg",
    type: "Full-Time",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "purple" as const },
    ],
  },
];

export function LatestJobs() {
  return (
    <section className="py-16 px-4 bg-background sm:px-6 lg:px-10 xl:px-24 bg-[#F8F8FD] transition-colors duration-500 dark:bg-[#202430]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading text-3xl  text-neutral-100 dark:text-neutral-10 md:text-4xl lg:text-5xl">
            Latest{" "}
            <span className="text-accent-blue">jobs open</span>
          </h2>

          
           <a href="#"
            className="group flex items-center gap-2 font-body text-sm font-medium text-brand-primary transition-all hover:gap-3 md:text-base"
          >
            Show all jobs
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {latestJobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onClick={() => console.log(`Clicked: ${job.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}