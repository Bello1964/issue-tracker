import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

export default function IssueEmpty({
  onCreate,
}) {

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
      <ClipboardList className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        No issues found
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Create your first issue to begin tracking bugs,
        features and tasks.
      </p>

      <Button
        className="mt-6"
        onClick={onCreate}
      >
        Create Issue
      </Button>
    </div>
  );
}