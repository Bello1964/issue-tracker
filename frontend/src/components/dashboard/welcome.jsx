import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useauth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrentDate } from "@/lib/utils/date";

export default function Welcome() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent className="flex flex-col gap-8 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {formatCurrentDate()}
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Welcome back, {user?.firstName}! 
            </h1>

            <p className="mt-2 text-muted-foreground">
              Here's your workspace at a glance.
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold">
                12
              </p>

              <p className="text-sm text-muted-foreground">
                Assigned to you
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                4
              </p>

              <p className="text-sm text-muted-foreground">
                Due today
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => navigate("/issues")}>
            <Plus className="mr-2 h-4 w-4" />
            New Issue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}