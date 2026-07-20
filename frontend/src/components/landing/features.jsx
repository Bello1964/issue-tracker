import {
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle2,
    title: "Issue Management",
    description:
      "Create, prioritize, assign and resolve issues with an intuitive workflow designed for productivity.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Assign work to teammates, monitor ownership, and keep everyone aligned on project progress.",
  },
  {
    icon: BarChart3,
    title: "Insightful Dashboard",
    description:
      "Track open, resolved, overdue and high-priority issues through a clean dashboard experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "JWT authentication with role-based authorization keeps your data protected.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-y bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm">
            Core Features
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to manage work
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Built with modern technologies and a thoughtful user experience to
            help individuals and teams stay organized from start to finish.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className={`group border transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl ${
                  index % 2 === 0
                    ? "bg-background"
                    : "bg-card"
                }`}
              >
                <CardContent className="flex h-full flex-col p-8">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">

                    <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />

                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}