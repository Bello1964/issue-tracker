import { useMutation, useQueryClient } from "@tanstack/react-query";

import issueService from "@/services/issue.service";

export default function useCreateIssue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: issueService.createIssue,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard", "recent-issues"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard", "statistics"],
      });
    },
  });
}