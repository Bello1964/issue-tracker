import { useQuery } from "@tanstack/react-query";

import issueService from "@/services/issue.service";

export default function useIssueActivities(issueId) {
  const query = useQuery({
    queryKey: ["issue", issueId, "activities"],
    queryFn: () =>
      issueService.getIssueActivities(issueId),
    enabled: Boolean(issueId),
  });

  return {
    ...query,
    activities:
      query.data?.data?.activities ?? [],
  };
}