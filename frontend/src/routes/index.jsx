import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protectedroute";
import PublicRoute from "./publicroute";
import AdminRoute from "./adminroute";

import DashboardLayout from "@/layouts/dashboardLayout";

import LandingPage from "@/pages/landing";

import LoginPage from "@/pages/auth/loginpage";
import RegisterPage from "@/pages/auth/registerpage";

import DashboardPage from "@/pages/dashboard/dashboardpage";

import IssuesPage from "@/pages/issues/issuespage";
import IssueDetailsPage from "@/pages/issues/issuedetailspage";
import EditIssuePage from "@/pages/issues/editissuepage";

import AdminUsersPage from "@/pages/admin/adminuserspage";

import ProfilePage from "@/pages/profile/profilepage";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Landing */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Authentication */}

      <Route element={<PublicRoute />}>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

      </Route>

      {/* Protected */}

      <Route element={<ProtectedRoute />}>

        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/issues"
            element={<IssuesPage />}
          />

          <Route
            path="/issues/:issueId"
            element={<IssueDetailsPage />}
          />

          <Route
            path="/issues/:issueId/edit"
            element={<EditIssuePage />}
          />

          <Route element={<AdminRoute />}>

            <Route
              path="/admin/users"
              element={<AdminUsersPage />}
            />

          </Route>

        </Route>

      </Route>

    </Routes>
  );
}