import LandingHeader from "@/components/landing/landingheader";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Stats from "@/components/landing/stats";
import CTA from "@/components/landing/cta";
import LandingFooter from "@/components/landing/landingfooter";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-150px] top-[300px] h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      </div>

      <LandingHeader />

      <main className="relative z-10">
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>

      <LandingFooter />
    </div>
  );
}