import { useQuery } from "@tanstack/react-query";

import issueService from "@/services/issue.service";
import getSortOption from "../constants/issuesort";

export default function useIssues({
  page = 1,
  limit = 10,
  search = "",
  status = "all",
  priority = "all",
  sort = "newest",
}) {
  const params = {
    page,
    limit,
  };

  if (search.trim()) {
    params.search = search.trim();
  }

  if (status !== "all") {
    params.status = status;
  }

  if (priority !== "all") {
    params.priority = priority;
  }

  const selectedSort = getSortOption(sort);

  if (selectedSort) {
    params.sortBy = selectedSort.sortBy;
    params.order = selectedSort.order;
  }

  const query = useQuery({
    queryKey: ["issues", params],
    queryFn: () => issueService.getIssues(params),
    placeholderData: (previousData) => previousData,
  });

  return {
    ...query,
    issues: query.data?.data?.issues ?? [],
    pagination: query.data?.data?.pagination ?? {
      page: 1,
      limit,
      totalItems: 0,
      totalPages: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}
