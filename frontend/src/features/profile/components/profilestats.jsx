import {
  FileText,
  UserCheck,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import StatCard from "@/components/dashboard/statcard";

export default function ProfileStats({
  statistics,
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Created"
        value={statistics.created}
        icon={FileText}
        description="Issues you've created"
      />

      <StatCard
        title="Assigned"
        value={statistics.assigned}
        icon={UserCheck}
        description="Assigned to you"
      />

      <StatCard
        title="Resolved"
        value={statistics.resolved}
        icon={CheckCircle2}
        description="Completed issues"
      />

      <StatCard
        title="Open"
        value={statistics.open}
        icon={Clock3}
        description="Still active"
      />

    </div>
  );
}