import { useQuery } from "@tanstack/react-query";

import issueService from "@/services/issue.service";
import getSortOption from "@/features/issues/constants/issuesort";

export default function useRecentIssues() {
  const selectedSort = getSortOption("newest");

  const query = useQuery({
    queryKey: ["dashboard", "recent-issues"],
    queryFn: () =>
      issueService.getIssues({
        page: 1,
        limit: 5,
        sortBy: selectedSort?.sortBy,
        order: selectedSort?.order,
      }),
  });

  return {
    ...query,
    issues: query.data?.data?.issues ?? [],
    pagination: query.data?.data?.pagination ?? null,
  };
}