import HeroSection from "@/components/sections/hero-section";
import TrustedBrands from "@/components/sections/trusted-brands";
import { CategoryGrid } from "@/components/sections/category-grid";

 export default function Home() {
  return (
    <>
    <header>
      <HeroSection />
    </header>
    <main>
    <TrustedBrands/>
    <CategoryGrid/>
    </main>
    </>
  );
}