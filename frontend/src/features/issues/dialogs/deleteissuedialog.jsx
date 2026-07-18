import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useDeleteIssue from "../hooks/usedeleteissue";
export default function DeleteIssueDialog({
  open,
  onOpenChange,
  issue,
}) {

  const navigate = useNavigate();
  const deleteIssue = useDeleteIssue();

const handleDelete = async () => {
  console.log("STEP 1 - Button clicked");
  console.log("Issue:", issue);

  try {
    await deleteIssue.mutateAsync(issue.id);
    onOpenChange(false);
    navigate("/issues");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">

        <DialogHeader>
          <DialogTitle>
            Delete Issue
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          Are you sure you want to delete{" "}
          <strong>{issue.title}</strong>?
          <br />
          This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteIssue.isPending}
          >
            {deleteIssue.isPending
              ? "Deleting..."
              : "Delete"}
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}