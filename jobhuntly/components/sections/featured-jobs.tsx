"use client";

import { JobCard } from "@/components/features/job/job-card";
import { ArrowRight } from "lucide-react";

const featuredJobs = [
  {
    id: "1",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma...",
    type: "Full Time" as const,
    logo: "/logos/revolut.svg",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "green" as const },
    ],
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t...",
    type: "Full Time" as const,
    logo: "/logos/dropbox.svg",
    categories: [
      { label: "Design", color: "green" as const },
      { label: "Business", color: "purple" as const },
    ],
  },
  {
    id: "3",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t...",
    type: "Full Time" as const,
    logo: "/logos/pitch.svg",
    categories: [
      { label: "Marketing", color: "yellow" as const },
    ],
  },
  {
    id: "4",
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi...",
    type: "Full Time" as const,
    logo: "/logos/blinklist.svg",
    categories: [
      { label: "Design", color: "green" as const },
    ],
  },
  {
    id: "5",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    type: "Full Time" as const,
    logo: "/logos/classpass.svg",
    categories: [
      { label: "Marketing", color: "yellow" as const },
      { label: "Design", color: "green" as const },
    ],
  },
  {
    id: "6",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n...",
    type: "Full Time" as const,
    logo: "/logos/canva.svg",
    categories: [
      { label: "Design", color: "green" as const },
      { label: "Business", color: "purple" as const },
    ],
  },
  {
    id: "7",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    type: "Full Time" as const,
    logo: "/logos/godaddy.svg",
    categories: [
      { label: "Marketing", color: "yellow" as const },
    ],
  },
  {
    id: "8",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi...",
    type: "Full Time" as const,
    logo: "/logos/twitter.svg",
    categories: [
      { label: "Technology", color: "red" as const },
    ],
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-16 px-4 bg-background sm:px-6 lg:px-10 xl:px-24 bg-[#F8F8FD] transition-colors duration-500 dark:bg-[#202430]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading text-3xl text-neutral-100 dark:text-neutral-10 text-foreground md:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="text-accent-blue">jobs</span>
          </h2>

          
          <a  href="#"
            className="group flex items-center gap-2 font-body text-sm font-medium text-primary transition-all hover:gap-3 md:text-base"
          >
            Show all jobs
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredJobs.map((job) => (
            <JobCard
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