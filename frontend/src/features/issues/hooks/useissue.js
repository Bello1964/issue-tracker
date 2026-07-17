import { useQuery } from "@tanstack/react-query";

import issueService from "@/services/issue.service";

export default function useIssue(issueId) {
  const query = useQuery({
    queryKey: ["issue", issueId],
    queryFn: () => issueService.getIssue(issueId),
    enabled: Boolean(issueId),
  });

  return {
    ...query,
    issue: query.data?.data?.issue ?? null,
  };
}