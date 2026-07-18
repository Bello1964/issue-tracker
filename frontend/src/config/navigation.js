import {
  LayoutDashboard,
  Bug,
  ShieldCheck,
} from "lucide-react";

export const dashboardNavigation = [
  {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Issues",
        url: "/issues",
        icon: Bug,
      },
      {
        title: "User Management",
        url: "/admin/users",
        icon: ShieldCheck,
        adminOnly: true,
      },
    ],
  },
];