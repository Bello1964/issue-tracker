import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function getStatusVariant(status) {
  switch (status) {
    case "Resolved":
      return "default";
    case "In Progress":
      return "secondary";
    default:
      return "outline";
  }
}

function getPriorityVariant(priority) {
  switch (priority) {
    case "Critical":
      return "destructive";
    case "High":
      return "destructive";
    case "Medium":
      return "secondary";
    default:
      return "outline";
  }
}

export default function RecentIssues({ issues }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Issues</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="flex flex-col gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50 md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-1">
              <h3 className="font-medium">
                {issue.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {issue.id}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={getStatusVariant(issue.status)}>
                {issue.status}
              </Badge>

              <Badge variant={getPriorityVariant(issue.priority)}>
                {issue.priority}
              </Badge>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                Assigned to{" "}
                {issue.assignee
                  ? `${issue.assignee.firstName} ${issue.assignee.lastName}`
                  : "Unassigned"}
              </p>

              <p>
                Updated on {new Date(issue.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}