import Welcome from "@/components/dashboard/welcome";
import StatsCards from "@/components/dashboard/statscards";
import RecentIssues from "@/components/dashboard/recentissues";

import useDashboardStats from "@/hooks/usedashboardstats";
import useRecentIssues from "@/hooks/userecentissues";

export default function DashboardPage() {
  const {
    statistics,
    isLoading: statisticsLoading,
  } = useDashboardStats();

  const {
    issues,
    isLoading: issuesLoading,
  } = useRecentIssues();

  return (
    <div className="space-y-6">
      <Welcome
        assignedToMe={statistics.assignedToMe}
        dueToday={statistics.dueToday}
      />

      <StatsCards
        statistics={statistics}
        isLoading={statisticsLoading}
      />

      <RecentIssues
        issues={issues}
        isLoading={issuesLoading}
      />
    </div>
  );
}