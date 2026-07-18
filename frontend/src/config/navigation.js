import {
  LayoutDashboard,
  Bug,
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
    ],
  },
];