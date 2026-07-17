import { Bell, Menu, Search } from "lucide-react";

import useAuth from "@/hooks/useauth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

const handleLogout = async () => {
  await logout();
  navigate("/login", { replace: true });
};
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">

        <SidebarTrigger />

        <Separator
          orientation="vertical"
          className="h-6"
        />

        <div>
          <h1 className="text-lg font-semibold">
            Dashboard
          </h1>

          <p className="text-sm text-muted-foreground">
            Welcome back, {user?.firstName}
          </p>
        </div>

      </div>

      <div className="hidden w-full max-w-sm items-center md:flex">

        <div className="relative w-full">

          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />

        <Input
          placeholder="Search issues, projects..."
          className="pl-9"
        />

        </div>

      </div>

      <div className="flex items-center gap-2">

        <Button
        size="icon"
        variant="ghost"
        className="relative"
        >
         <Bell className="h-5 w-5" />
         <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
     </Button>

<DropdownMenu>
<DropdownMenuTrigger className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
  <Avatar>
    <AvatarFallback>
      {user?.firstName?.[0]}
      {user?.lastName?.[0]}
    </AvatarFallback>
  </Avatar>
</DropdownMenuTrigger>

  <DropdownMenuContent align="end" className="w-64">
    <DropdownMenuLabel>
      <div className="space-y-1">
        <p className="font-medium">
          {user?.firstName} {user?.lastName}
        </p>

        <p className="text-xs text-muted-foreground">
          {user?.email}
        </p>
      </div>
    </DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuItem onClick={() => navigate("/profile")}>
      <User className="mr-2 h-4 w-4" />
      Profile
    </DropdownMenuItem>

    <DropdownMenuItem onClick={() => navigate("/settings")}>
      <Settings className="mr-2 h-4 w-4" />
      Settings
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem
      onClick={handleLogout}
      className="text-destructive focus:text-destructive"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </header>
  );
}