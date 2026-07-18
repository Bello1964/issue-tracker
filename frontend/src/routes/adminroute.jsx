import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@/hooks/useauth";

export default function AdminRoute() {
  const {
    user,
    isLoading,
  } = useAuth();

  if (isLoading) {
    return null;
  }

  if (user?.role !== "admin") {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <Outlet />;
}