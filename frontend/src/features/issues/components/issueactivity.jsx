import { Clock3 } from "lucide-react";

import ACTIVITY_ACTIONS from "../constants/activityactions";

import { formatDate } from "@/lib/utils/date";

export default function IssueActivity({
  activities,
}) {
  if (!activities.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No activity yet.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex gap-4"
        >
          <div className="mt-2 h-2 w-2 rounded-full bg-primary" />

          <div className="space-y-1">
            <p className="font-medium">
              {activity.user.firstName}{" "}
              {activity.user.lastName}
            </p>

            <p className="text-sm text-muted-foreground">
              {ACTIVITY_ACTIONS[
                activity.action
              ] ?? activity.action}
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock3 className="h-3 w-3" />

              {formatDate(activity.createdAt)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}