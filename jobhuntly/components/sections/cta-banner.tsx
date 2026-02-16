import Button from "../ui/button";
import Image from "next/image";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#202430] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative">

          {/* SVG Background Shape - Behind Everything */}

          <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:right-0 -mx-4 sm:-mx-6 lg:-mx-10 xl:-mx-24">
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
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="font-heading text-white  text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Start posting
                <br />
                jobs today
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-body">
                Start posting jobs for only $10.
              </p>

              <Button variant="white" size="lg">
  Sign Up For Free
</Button>
            </div>

            {/* Right Dashboard Preview */}
            <div className="relative">
              <div className="relative aspect-4/3 lg:aspect-16/11 w-full">
                {/* Dashboard Container */}
                <div className="absolute inset-0 bg-white  shadow-2xl overflow-hidden">
                  {/* Option 1: Use real image */}
                  <Image
                    src="/dashboard-preview.svg"
                    alt="Company Dashboard"
                    fill
                    
                  />

                  {/* Option 2: Mock Dashboard */}
                  <div className="p-4 md:p-6 h-full">
                   
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full" />
                        <span className="font-bold text-xs md:text-sm text-neutral-100">JobHuntly</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium">
                          + Post a job
                        </div>
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-neutral-20 rounded-full" />
                      </div>
                    </div>

                   
                    <div className="space-y-3 md:space-y-4">
                     
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-neutral-100 mb-1">Good morning, Maria</h3>
                        <p className="text-xs md:text-sm text-neutral-60">Here is what's happening with your job listings from July 19 - July 25.</p>
                      </div>

                    
                      <div className="bg-neutral-10 rounded-lg p-3 md:p-4">
                        <p className="text-xs text-neutral-60 mb-1">Company Visitors</p>
                        <div className="flex items-end justify-between mb-3">
                          <h4 className="text-2xl md:text-3xl font-bold text-neutral-100">21,457</h4>
                          <div className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            5,678
                          </div>
                        </div>
                        
                        
                        <div className="flex items-end gap-1 h-12 md:h-16">
                          {[35, 45, 30, 40, 80, 50, 45].map((height, i) => (
                            <div
                              key={i}
                              className={`w-full rounded-t ${
                                i === 4 ? 'bg-primary' : 'bg-neutral-20'
                              }`}
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-60 mt-1">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </div>

                   
                      <div>
                        <h5 className="font-semibold text-sm text-neutral-100 mb-2">Recent Applicants</h5>
                        <div className="flex items-center gap-2 bg-neutral-10 p-2 rounded-lg">
                          <div className="w-8 h-8 bg-neutral-20 rounded-full flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="w-20 h-2 bg-neutral-20 rounded mb-1" />
                            <div className="w-24 h-1.5 bg-neutral-20 rounded" />
                          </div>
                          <div className="text-xs text-neutral-60">Email</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}