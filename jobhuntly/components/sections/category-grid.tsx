// components/sections/category-grid.tsx
"use client";

import { useState } from "react";
import { CategoryCard } from "@/components/features/job/category-card";
import { 
  PencilRuler , 
  TrendingUp, 
  Megaphone, 
  Wallet, 
  Monitor, 
  Code, 
  Briefcase, 
  Users,
  ArrowRight 
} from "lucide-react";
import { CONTAINER } from "@/lib/constants";

const categories = [
  { id: "design", icon: PencilRuler , title: "Design", jobCount: 235 },
  { id: "sales", icon: TrendingUp, title: "Sales", jobCount: 756 },
  { id: "marketing", icon: Megaphone, title: "Marketing", jobCount: 140 },
  { id: "finance", icon: Wallet, title: "Finance", jobCount: 325 },
  { id: "technology", icon: Monitor, title: "Technology", jobCount: 436 },
  { id: "engineering", icon: Code, title: "Engineering", jobCount: 542 },
  { id: "business", icon: Briefcase, title: "Business", jobCount: 211 },
  { id: "hr", icon: Users, title: "Human Resource", jobCount: 346 },
];

export function CategoryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("marketing");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    // TODO: Add your filtering logic here
    console.log(`Filtering jobs for: ${categoryId}`);
  };

  return (
    <section className="py-16 px-4 bg-background transition-colors duration-500  sm:px-6 lg:px-10 xl:px-24">
      <div className={CONTAINER}>
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Explore by{" "}
            <span className="text-accent-blue">category</span>
          </h2>

          
            <a href="#"
            className="group flex items-center gap-2 font-body text-sm font-medium text-brand-primary transition-all hover:gap-3 md:text-base"
          >
            Show all jobs
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              jobCount={category.jobCount}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}