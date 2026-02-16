import HeroSection from "@/components/sections/hero-section";
import TrustedBrands from "@/components/sections/trusted-brands";
import { CategoryGrid } from "@/components/sections/category-grid";
import { CTABanner } from "@/components/sections/cta-banner";

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
    </main>
    </>
  );
}