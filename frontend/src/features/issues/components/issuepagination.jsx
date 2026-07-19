import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function IssuePagination({
  pagination,
  onPageChange,
}) {
  if (
    !pagination ||
    pagination.totalPages <= 1
  ) {
    return null;
  }

  const pages = Array.from(
    { length: pagination.totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">

      <Button
        variant="outline"
        disabled={!pagination.hasPreviousPage}
        onClick={() =>
          onPageChange(pagination.page - 1)
        }
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <div className="flex flex-wrap items-center justify-center gap-2">

        {pages.map((page) => (
          <Button
            key={page}
            size="icon"
            variant={
              page === pagination.page
                ? "default"
                : "outline"
            }
            onClick={() =>
              onPageChange(page)
            }
          >
            {page}
          </Button>
        ))}

      </div>

      <Button
        variant="outline"
        disabled={!pagination.hasNextPage}
        onClick={() =>
          onPageChange(pagination.page + 1)
        }
      >
        Next
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>

    </div>
  );
}