import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import DashboardPreview from "./dashboardpreview";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">

        {/* Left Side */}

        <div className="flex-1 space-y-8 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Modern Issue Tracking Platform
          </div>

          <div className="space-y-6">

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Track issues.
              <br />
              Collaborate.
              <br />
              Deliver faster.
            </h1>

            <p className="mx-auto max-w-xl text-lg leading-8 text-muted-foreground lg:mx-0">
              A clean, modern issue tracking system built for developers,
              project managers, and growing teams. Create issues, assign work,
              monitor progress, and stay organized from one beautiful dashboard.
            </p>

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Button
              size="lg"
              className="px-8"
              onClick={() => navigate("/register")}
            >
              Get Started

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>

          </div>

          {/* Tech Stack */}

          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground lg:justify-start">

            <span className="font-medium text-foreground">
              Built with
            </span>

            <span>React</span>

            <span>•</span>

            <span>Express</span>

            <span>•</span>

            <span>MongoDB</span>

            <span>•</span>

            <span>TailwindCSS</span>

          </div>

          {/* Highlights */}

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground lg:justify-start">

            <div>✓ JWT Authentication</div>

            <div>✓ Role-Based Access</div>

            <div>✓ Responsive Design</div>

            <div>✓ Activity History</div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">

          <div className="transition-all duration-500 hover:scale-[1.02] hover:rotate-0">

            <div className="rotate-2 rounded-2xl border bg-background p-3 shadow-2xl">

              <DashboardPreview />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}