import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  LogOut,
} from "lucide-react";

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
  useSidebar,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";

import LogoutDialog from "./logoutdialog";

export default function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const {
    setOpenMobile,
  } = useSidebar();

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [isLoggingOut, setIsLoggingOut] =
    useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      await logout();

      navigate("/login", {
        replace: true,
      });

      setDialogOpen(false);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
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

                      return (
                        user?.role === "admin"
                      );
                    })
                    .map((item) => (
                      <SidebarMenuItem
                        key={item.title}
                      >
                        <Link
                          to={item.url}
                          onClick={() =>
                            setOpenMobile(false)
                          }
                        >
                          <SidebarMenuButton
                            isActive={
                              location.pathname ===
                              item.url
                            }
                          >
                            <item.icon />

                            <span>
                              {item.title}
                            </span>
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
            <div
              onClick={() => navigate("/profile")}
              className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </div>

              <div className="min-w-0">
                <p className="truncate font-medium">
                  {user?.firstName}{" "}
                  {user?.lastName}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </div>

            <Button
              variant="destructive"
              className="w-full"
              onClick={() =>
                setDialogOpen(true)
              }
            >
              <LogOut className="mr-2 h-4 w-4" />
              Signout
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>

      <LogoutDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        isPending={isLoggingOut}
        onConfirm={handleLogout}
      />
    </>
  );
}