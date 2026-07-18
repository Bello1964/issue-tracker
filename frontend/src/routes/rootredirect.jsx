import { Navigate } from "react-router-dom";

import useAuth from "@/hooks/useauth";

export default function RootRedirect() {
  const {
    isLoading,
    isAuthenticated,
  } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Navigate
      to={
        isAuthenticated
          ? "/dashboard"
          : "/register"
      }
      replace
    />
  );
}