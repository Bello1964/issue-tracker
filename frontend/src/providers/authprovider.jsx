import { useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import AuthContext from "@/contexts/authcontext";
import authService from "@/services/auth.service";

export default function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["current-user"],
    queryFn: authService.getCurrentUser,
    retry: false,
  });

  const login = useCallback(async (credentials) => {
    await authService.login(credentials);

    await refetch();
  }, [refetch]);

  const logout = useCallback(async () => {
    await authService.logout();

    queryClient.setQueryData(["current-user"], null);
  }, [queryClient]);

  return (
    <AuthContext.Provider
      value={{
        user: data?.data?.user ?? null,
        isLoading,
        isAuthenticated: !!data?.data?.user,
        isError,
        login,
        logout,
        refreshUser: refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}