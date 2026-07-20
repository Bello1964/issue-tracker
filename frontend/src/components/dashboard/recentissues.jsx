import { useNavigate } from "react-router-dom";
import {
  Calendar,
  ChevronRight,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  formatShortDate,
  isOverdue,
} from "@/lib/utils/date";

function getStatusVariant(status) {
  switch (status) {
    case "resolved":
      return "default";

    case "in_progress":
      return "secondary";

    default:
      return "outline";
  }
}

function getPriorityVariant(priority) {
  switch (priority) {
    case "high":
      return "destructive";

    case "medium":
      return "secondary";

    default:
      return "outline";
  }
}

function formatStatus(status) {
  return status.replace("_", " ");
}

export default function RecentIssues({
  issues,
}) {
  const navigate = useNavigate();

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>
        Recent Issues
      </CardTitle>

      <Link
        to="/issues"
        className="text-sm font-medium text-primary transition-colors hover:underline"
      >
        View all →
      </Link>
    </CardHeader>

      <CardContent className="space-y-4">
        {issues.map((issue) => {
          const overdue =
            issue.status !== "resolved" &&
            isOverdue(issue.dueDate);

          return (
            <button
              key={issue.id}
              onClick={() =>
                navigate(`/issues/${issue.id}`)
              }
              className="group w-full rounded-xl border bg-background p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">

                <div className="space-y-3 flex-1">

                  <h3 className="line-clamp-1 text-lg font-semibold group-hover:text-primary">
                    {issue.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    <Badge
                      variant={getStatusVariant(
                        issue.status
                      )}
                    >
                      {formatStatus(issue.status)}
                    </Badge>

                    <Badge
                      variant={getPriorityVariant(
                        issue.priority
                      )}
                    >
                      {issue.priority}
                    </Badge>

                    {overdue && (
                      <Badge variant="destructive">
                        Overdue
                      </Badge>
                    )}

                  </div>

                  <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">

                    <div className="flex items-center gap-2">

                      <User className="h-4 w-4" />

                      <span>
                        {issue.assignee
                          ? `${issue.assignee.firstName} ${issue.assignee.lastName}`
                          : "Unassigned"}
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Calendar className="h-4 w-4" />

                      <span>
                        Updated {formatShortDate(issue.updatedAt)}
                      </span>

                    </div>

                  </div>

                </div>

                <ChevronRight className="mt-1 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />

              </div>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}