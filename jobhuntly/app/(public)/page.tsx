import HeroSection from "@/components/sections/hero-section";
import TrustedBrands from "@/components/sections/trusted-brands";

 export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBrands/>
      {/* You can add other sections here, like FeaturedJobs or Footer */}
    </main>
  );
}