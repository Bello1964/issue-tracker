import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import issueService from "@/services/issue.service";

export default function useUpdateIssue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: issueService.updateIssue,

    onSuccess: (data, variables) => {
      toast.success("Issue updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });

      queryClient.invalidateQueries({
        queryKey: ["issue", variables.issueId],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update issue."
      );
    },
  });
}