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
     console.log("Delete clicked", issue);
  try {
    await deleteIssue.mutateAsync(issue.id);
     console.log("Delete success", result);
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
            onClick={() => {
              alert("Delete button clicked");
              console.log("Delete button clicked");
            }}
          >
            Delete
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}