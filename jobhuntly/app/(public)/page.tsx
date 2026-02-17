import HeroSection from "@/components/sections/hero-section";
import TrustedBrands from "@/components/sections/trusted-brands";
import { CategoryGrid } from "@/components/sections/category-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { FeaturedJobs } from "@/components/sections/featured-jobs";

 export default function Home() {
  return (
    <>
    <header>
      <HeroSection />
    </header>
    <main>
    <TrustedBrands/>
    <CategoryGrid/>
    <CTABanner/>
    <FeaturedJobs />
    </main>
    </>
  );
}