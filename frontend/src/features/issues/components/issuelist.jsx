import IssueCard from "./issuecard";
import IssueEmpty from "./issueempty";
import IssueLoading from "./issueloading";
import IssuePagination from "./issuepagination";
import { useNavigate } from "react-router-dom";
export default function IssueList({
  issues,
  pagination,
  isLoading,
  onPageChange,
}) {

const navigate = useNavigate();

if (isLoading) {
  return <IssueLoading />;
}

  if (!issues.length) {
    return <IssueEmpty
        onCreate={() => navigate("/issues/new")}
      />;
  }

  return (
 <div className="space-y-6">

  <div className="flex items-center justify-between">

    <p className="text-sm text-muted-foreground">

      Showing{" "}

      {(pagination.page - 1) *
        pagination.limit +
        1}
         –
      {Math.min(
        pagination.page *
          pagination.limit,
        pagination.totalPages
      )}

      {" "}of{" "}

      {pagination.total}

      {" "}issues

    </p>

  </div>
      <div className="space-y-4">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
          />
        ))}
      </div>

      {pagination.totalPages > 1 && (
        <IssuePagination
          pagination={pagination}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}