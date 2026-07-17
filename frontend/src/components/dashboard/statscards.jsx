import {
  Bug,
  CircleCheckBig,
  CircleDashed,
  ListTodo,
} from "lucide-react";

import StatCard from "./statcard";

export default function StatsCards({
  statistics,
}) {
  const cards = [
    {
      title: "Total Issues",
      value: statistics.total,
      description: "All tracked issues",
      icon: ListTodo,
    },
    {
      title: "Open",
      value: statistics.open,
      description: "Awaiting work",
      icon: Bug,
    },
    {
      title: "In Progress",
      value: statistics.inProgress,
      description: "Currently active",
      icon: CircleDashed,
    },
    {
      title: "Resolved",
      value: statistics.resolved,
      description: "Completed",
      icon: CircleCheckBig,
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          {...card}
        />
      ))}
    </section>
  );
}