import { Badge } from "@/components/ui/badge";

import SectionCard from "@/components/common/sectioncard";
import DetailRow from "@/components/common/detailrow";

import {
  ISSUE_PRIORITY_UI,
  ISSUE_STATUS_UI,
} from "../constants/issueui";

import {
  formatDateTime,
  formatLongDate,
  isOverdue,
} from "@/lib/utils/date";

export default function IssueDetails({ issue }) {
  if (!issue) return null;

  const overdue =
    issue.status !== "resolved" &&
    isOverdue(issue.dueDate);

  const priority =
    ISSUE_PRIORITY_UI[issue.priority] ??
    ISSUE_PRIORITY_UI.low;

  const status =
    ISSUE_STATUS_UI[issue.status] ??
    ISSUE_STATUS_UI.open;

  return (
    <SectionCard title="Issue Information">
      <div className="space-y-6">

        <div>
          <h2 className="text-2xl font-bold">
            {issue.title}
          </h2>

          <p className="mt-3 whitespace-pre-wrap text-muted-foreground">
            {issue.description || "No description provided."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge variant={priority.variant}>
            {priority.label}
          </Badge>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <div>
          <DetailRow
            label="Created By"
            value={`${issue.createdBy.firstName} ${issue.createdBy.lastName}`}
          />

          <DetailRow
            label="Assigned To"
            value={
              issue.assignee
                ? `${issue.assignee.firstName} ${issue.assignee.lastName}`
                : "Unassigned"
            }
          />

          <DetailRow
            label="Due Date"
            value={
              issue.dueDate
                ? (
                    <div className="flex items-center gap-2">
                      <span
                        className={
                          overdue
                            ? "font-semibold text-red-600"
                            : ""
                        }
                      >
                        {formatLongDate(issue.dueDate)}
                      </span>

                      {overdue && (
                        <Badge variant="destructive">
                          Overdue
                        </Badge>
                      )}
                    </div>
                  )
                : "No due date"
            }
          />

          <DetailRow
            label="Created"
            value={formatDateTime(issue.createdAt)}
          />

          <DetailRow
            label="Updated"
            value={formatDateTime(issue.updatedAt)}
          />
        </div>

      </div>
    </SectionCard>
  );
}