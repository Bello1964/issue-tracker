import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionCard from "@/components/common/sectioncard";

import useAuth from "@/hooks/useauth";

export default function QuickActions() {
  const { logout } = useAuth();

  return (
    <SectionCard title="Quick Actions">

      <div className="space-y-3">

        <Button
        variant="secondary"
        disabled
        className="w-full"
        >
        Edit Profile (Coming Soon)
        </Button>

        <Button
        variant="secondary"
        disabled
        className="w-full"
        >
        Change Password (Coming Soon)
        </Button>

        <Button
          variant="destructive"
          className="w-full justify-start"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>

      </div>

    </SectionCard>
  );
}