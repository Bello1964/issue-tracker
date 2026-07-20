import { useEffect, useState } from "react";
import {
  useSearchParams,
} from "react-router-dom";

import IssueToolbar from "@/features/issues/components/issuetoolbar";
import IssueList from "@/features/issues/components/issuelist";
import useDebounce from "@/hooks/usedebounce.js"
import useIssues from "@/features/issues/hooks/useissues";

export default function IssuesPage() {
  const [searchParams, setSearchParams] =
    useSearchParams();


  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  const [status, setStatus] = useState(
    searchParams.get("status") ?? "all"
  );

  const [priority, setPriority] = useState(
    searchParams.get("priority") ?? "all"
  );

  const [sort, setSort] = useState(
    searchParams.get("sort") ?? "newest"
  );


  const [page, setPage] = useState(
    Number(searchParams.get("page")) || 1
  );


  /*
    Whenever filters change:
    1. Reset pagination
    2. Update URL
  */

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setPage(1);

    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (status !== "all") {
      params.status = status;
    }

    if (priority !== "all") {
      params.priority = priority;
    }

    if (sort !== "newest") {
      params.sort = sort;
    }


    setSearchParams(params);

  }, [
    search,
    status,
    priority,
    sort,
    setSearchParams,
    debouncedSearch,
  ]);



  const {
    issues,
    pagination,
    isLoading,
  } = useIssues({
    page,
    limit: 10,
    search:debouncedSearch,
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
