import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import IssueForm from "../forms/issueform";

import useUpdateIssue from "../hooks/useupdateissue";

export default function EditIssueDialog({
  open,
  onOpenChange,
  issue,
}) {
  const updateIssue =
    useUpdateIssue();

  const handleUpdateIssue = async (
    payload
  ) => {
    try {
      await updateIssue.mutateAsync({
        issueId: issue.id,
        payload,
      });

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!issue) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="flex max-h-[90vh] flex-col overflow-hidden p-0 sm:max-w-2xl">

        <DialogHeader className="border-b bg-background px-6 py-4">
          <DialogTitle>
            Edit Issue
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <IssueForm
            formId="edit-issue-form"
            defaultValues={issue}
            onSubmit={handleUpdateIssue}
          />
        </div>

        <div className="flex justify-end gap-3 border-t bg-background px-6 py-4">

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            type="submit"
            form="edit-issue-form"
            disabled={
              updateIssue.isPending
            }
          >
            {updateIssue.isPending
              ? "Saving..."
              : "Save Changes"}
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
}