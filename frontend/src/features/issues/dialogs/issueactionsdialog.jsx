import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import DeleteIssueDialog from "./deleteissuedialog";
import EditIssueDialog from "./editissuedialog";

export default function IssueActionsDialog({
  open,
  onOpenChange,
  issue,
}) {
  const navigate = useNavigate();

  const [deleteOpen, setDeleteOpen] =
    useState(false);
  const [editOpen, setEditOpen] =
  useState(false);

  const handleView = () => {
    onOpenChange(false);

    navigate(`/issues/${issue.id}`);
  };

  const handleEdit = () => {
    onOpenChange(false);
    setEditOpen(true);
    };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
      >
        <DialogContent className="sm:max-w-sm">

          <DialogHeader>
            <DialogTitle>
              Issue Actions
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">

            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleView}
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleEdit}
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit Issue
            </Button>

            <Button
              variant="destructive"
              className="w-full justify-start"
              onClick={() => {
                onOpenChange(false);
                setDeleteOpen(true);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Issue
            </Button>

          </div>

        </DialogContent>
      </Dialog>

     <EditIssueDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        issue={issue}
        />
      <DeleteIssueDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        issue={issue}
      />
    </>
  );
}