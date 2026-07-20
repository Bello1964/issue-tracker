import { useQuery } from "@tanstack/react-query";

import profileService from "../api/profile.service";

export default function useProfile() {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      profileService.getProfile(),
  });

  return {
    profile: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}