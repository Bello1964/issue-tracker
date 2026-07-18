import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./protectedroute";
import PublicRoute from "./publicroute";

import DashboardLayout from "@/layouts/dashboardLayout";

import LoginPage from "@/pages/auth/loginpage";
import RegisterPage from "@/pages/auth/registerpage";
import RootRedirect from "./rootredirect";
import DashboardPage from "@/pages/dashboard/dashboardpage";
import IssuesPage from "@/pages/issues/issuespage";
import IssueDetailsPage from "@/pages/issues/issuedetailspage";
import EditIssuePage from "@/pages/issues/editissuepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<RootRedirect />}
      />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route  path="/dashboard"  element={<DashboardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/issues/:issueId" element={<IssueDetailsPage />} />
          <Route path="/issues/:issueId/edit"  element={<EditIssuePage />}  />
        </Route>
      </Route>

    </Routes>
  );
}
