import { Navigate, Outlet } from "react-router-dom";
import  useAuth  from "@/hooks/useauth";

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();
 
  if (isLoading) {
    return (
       <main className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </main>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}