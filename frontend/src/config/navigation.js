import {
  LayoutDashboard,
  FolderKanban,
  Bug,
  Users,
  ChartColumn,
  Settings,
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
        title: "Projects",
        url: "/projects",
        icon: FolderKanban,
      },
      {
        title: "Issues",
        url: "/issues",
        icon: Bug,
      },
      {
        title: "Team",
        url: "/team",
        icon: Users,
      },
      {
        title: "Reports",
        url: "/reports",
        icon: ChartColumn,
      },
    ],
  },

  {
    label: "Preferences",
    items: [
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
];