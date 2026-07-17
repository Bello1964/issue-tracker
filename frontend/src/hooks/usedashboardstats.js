import { useQuery } from "@tanstack/react-query";

import dashboardService from "@/services/dashboard.service";

const defaultStatistics = {
  total: 0,
  open: 0,
  inProgress: 0,
  resolved: 0,
  lowPriority: 0,
  mediumPriority: 0,
  highPriority: 0,
  overdue: 0,
};

export default function useDashboardStats() {
  const query = useQuery({
    queryKey: ["dashboard", "statistics"],
    queryFn: dashboardService.getIssueStats,
  });

  return {
    ...query,
    statistics:
      query.data?.data?.statistics ?? defaultStatistics,
  };
}