import {
  CalendarDays,
  Clock3,
  MoreVertical,
  User,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

import {
  ISSUE_PRIORITY_UI,
  ISSUE_STATUS_UI,
} from "../constants/issueui";

import {formatShortDate,isOverdue} from "@/lib/utils/date";
import IssueActionsDialog from "../dialogs/issueactionsdialog";
export default function IssueCard({ issue }) {
  const priority =
    ISSUE_PRIORITY_UI[issue.priority] ??
    ISSUE_PRIORITY_UI.low;

  const status =
    ISSUE_STATUS_UI[issue.status] ??
    ISSUE_STATUS_UI.open;
  
  const overdue =issue.status !== "resolved" && isOverdue(issue.dueDate);
  const navigate = useNavigate();
  const [actionsOpen, setActionsOpen] = useState(false);
  return (
  <>
      <Card
        onClick={() =>
          navigate(`/issues/${issue.id}`)
        }
        className={`cursor-pointer transition-all hover:border-primary hover:shadow-md ${
          overdue
            ? "border-red-500 border-2"
            : ""
        }`}
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

          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setActionsOpen(true);
            }}
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
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

      <div className="flex items-center gap-2">

        <span
          className={
            overdue
              ? "font-medium text-red-600"
              : "text-muted-foreground"
          }
        >
          {issue.dueDate
            ? formatShortDate(issue.dueDate)
            : "No due date"}
        </span>

        {overdue && (
          <Badge variant="destructive">
            Overdue
          </Badge>
        )}

      </div>
    </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            <span>
              Created {formatShortDate(issue.createdAt)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            <span>
              Updated {formatShortDate(issue.updatedAt)}
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

    <IssueActionsDialog
      open={actionsOpen}
      onOpenChange={setActionsOpen}
      issue={issue}
    />
  </>
 );
}