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
      <div className="space-y-4">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
          />
        ))}
      </div>

      <IssuePagination
        pagination={pagination}
        onPageChange={onPageChange}
      />
    </div>
  );
}