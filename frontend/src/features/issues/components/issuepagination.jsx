import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function IssuePagination({
  pagination,
  onPageChange,
}) {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
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

      <span className="text-sm text-muted-foreground">
        Page {pagination.page} of {pagination.totalPages}
      </span>

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