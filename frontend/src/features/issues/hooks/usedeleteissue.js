import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import issueService from "@/services/issue.service";

export default function useDeleteIssue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: issueService.deleteIssue,

    onSuccess: () => {
      toast.success("Issue deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["issues"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ??
        "Failed to delete issue."
      );
    },
  });
}