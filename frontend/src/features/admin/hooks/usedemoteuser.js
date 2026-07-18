import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import userService from "@/services/user.service";

export default function useDemoteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.demoteUser,

    onSuccess: () => {
      toast.success("User demoted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ??
        "Failed to demote user."
      );
    },
  });
}