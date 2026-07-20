import { useQuery } from "@tanstack/react-query";

import userService from "@/services/user.service";

export default function useUsers() {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: userService.getUsers,
  });

  return {
    ...query,
    users: query.data?.data?.users ?? [],
  };
}
