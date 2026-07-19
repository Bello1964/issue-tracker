import { useEffect, useState } from "react";

import IssueToolbar from "@/features/issues/components/issuetoolbar";
import IssueList from "@/features/issues/components/issuelist";

import useIssues from "@/features/issues/hooks/useissues";

export default function IssuesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [
    search,
    status,
    priority,
    sort,
  ]);

  const {
    issues,
    pagination,
    isLoading,
  } = useIssues({
    page,
    limit: 10,
    search,
    status,
    priority,
    sort,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Issues
        </h1>

        <p className="mt-1 text-muted-foreground">
          Browse, filter, and manage issues across your workspace.
        </p>
      </div>

      <IssueToolbar
        search={search}
        status={status}
        priority={priority}
        sort={sort}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onPriorityChange={setPriority}
        onSortChange={setSort}
      />

      <IssueList
        issues={issues}
        pagination={pagination}
        isLoading={isLoading}
        onPageChange={setPage}
      />
    </div>
  );
}