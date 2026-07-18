import { Link, useLocation } from "react-router-dom";

import useAuth from "@/hooks/useauth";
import { dashboardNavigation } from "@/config/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function AppSidebar() {
  const location = useLocation();
  const { user } = useAuth();
 const { setOpenMobile } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
            TS
          </div>

          <div>
            <p className="font-semibold">
              Issue Tracker
            </p>

            <p className="text-xs text-muted-foreground">
              Team Workspace
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {dashboardNavigation.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>
              {group.label}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items
                  .filter((item) => {
                    if (!item.adminOnly) {
                      return true;
                    }
                    return user?.role === "admin";
                  })
                  .map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Link 
                    to={item.url}
                    onClick={() => setOpenMobile(false)}
                    >
                    <SidebarMenuButton
                      isActive={location.pathname === item.url}
                    >
                        <item.icon />
                        <span>{item.title}</span>
                    </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t">
      <div className="space-y-4 p-4">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </div>

          <div className="min-w-0">
            <p className="truncate font-medium">
              {user?.firstName} {user?.lastName}
            </p>

            <p className="truncate text-xs text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </SidebarFooter>
    </Sidebar>
  );
}