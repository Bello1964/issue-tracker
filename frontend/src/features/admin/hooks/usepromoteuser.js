import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import userService from "@/services/user.service";

export default function usePromoteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.promoteUser,

    onSuccess: () => {
      toast.success("User promoted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ??
        "Failed to promote user."
      );
    },
  });
}