import {
  CalendarDays,
  Clock3,
  MoreVertical,
  User,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ISSUE_PRIORITY_UI,
  ISSUE_STATUS_UI,
} from "../constants/issueui";

import { formatDate } from "@/lib/utils/date";
import DeleteIssueDialog from "../dialogs/deleteissuedialog";

export default function IssueCard({ issue }) {
  const priority =
    ISSUE_PRIORITY_UI[issue.priority] ??
    ISSUE_PRIORITY_UI.low;

  const status =
    ISSUE_STATUS_UI[issue.status] ??
    ISSUE_STATUS_UI.open;

  const navigate = useNavigate();
  const [deleteOpen, setDeleteOpen] = useState(false);
  return (
  <>
    <Card
      // onClick={() => navigate(`/issues/${issue.id}`)}
      className="cursor-pointer transition-all hover:border-primary hover:shadow-md"
    >
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold">
              {issue.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {issue.description || "No description provided."}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical className="h-4 w-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/issues/${issue.id}`);
                }}
              >
                View Details
              </DropdownMenuItem>

                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(`/issues/${issue.id}/edit`);
                  }}
                >
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                className="text-destructive"
                onSelect={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDeleteOpen(true);
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant={priority.variant}>
            {priority.label}
          </Badge>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>
              {issue.assignee
                ? `${issue.assignee.firstName} ${issue.assignee.lastName}`
                : "Unassigned"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>
              {issue.dueDate
                ? formatDate(issue.dueDate)
                : "No due date"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            <span>
              Created {formatDate(issue.createdAt)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            <span>
              Updated {formatDate(issue.updatedAt)}
            </span>
          </div>
        </div>

        <div className="border-t pt-4 text-sm text-muted-foreground">
          Created by{" "}
          <span className="font-medium text-foreground">
            {issue.createdBy.firstName}{" "}
            {issue.createdBy.lastName}
          </span>
        </div>
      </CardContent>
    </Card>

    <DeleteIssueDialog
      open={deleteOpen}
      onOpenChange={setDeleteOpen}
      issue={issue}
    />
  </>
 );
}