import {
  BarChart3,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: BarChart3,
    value: "10+",
    label: "Core Features",
  },
  {
    icon: Users,
    value: "2",
    label: "User Roles",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "JWT Protected",
  },
  {
    icon: MonitorSmartphone,
    value: "Responsive",
    label: "Desktop & Mobile",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24"
    >
<div className="mx-auto max-w-7xl px-6">

  <div className="mx-auto mb-14 max-w-3xl text-center">
    <h2 className="text-4xl font-bold">
      Built with modern engineering practices
    </h2>

    <p className="mt-4 text-lg text-muted-foreground">
      Developed as a production-style full-stack application using React,
      Express, MongoDB and JWT authentication.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {stats.map((stat) => {
      const Icon = stat.icon;

      return (
        <div
          key={stat.label}
          className="group rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-primary" />
          </div>

          <h3 className="text-4xl font-bold">
            {stat.value}
          </h3>

          <p className="mt-3 text-muted-foreground">
            {stat.label}
          </p>
        </div>
      );
    })}

  </div>

</div>
    </section>
  );
}