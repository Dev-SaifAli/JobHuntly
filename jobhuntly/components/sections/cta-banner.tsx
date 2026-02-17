import { CONTAINER } from "@/lib/constants";
import Button from "../ui/button";
import Image from "next/image";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className={CONTAINER}>
        <div className="relative py-12 md:py-16 lg:py-20">

          {/* SVG Background - breaks out of container */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-10 xl:-mx-24">
            <svg
              viewBox="0 0 1192 414"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z"
                fill="#4640DE"
              />
            </svg>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Start posting
                <br />
                jobs today
              </h2>

              <p className="text-lg md:text-xl text-white/90 font-body">
                Start posting jobs for only $10.
              </p>

              <Button variant="white" size="lg">
                Sign Up For Free
              </Button>
            </div>

            {/* Right Dashboard Preview */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11]">
              <div className="absolute inset-0 bg-white shadow-2xl overflow-hidden rounded-tl-lg rounded-bl-lg">
                <Image
                  src="/dashboard-preview.svg"
                  alt="Company Dashboard"
                  fill
                  className="object-cover object-left-top"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}