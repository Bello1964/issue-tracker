import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import EditIssueDialog from "@/features/issues/dialogs/editissuedialog";
import DeleteIssueDialog from "@/features/issues/dialogs/deleteissuedialog";
import { Button } from "@/components/ui/button";

import useIssue from "@/features/issues/hooks/useissue";
import useIssueActivities from "@/features/issues/hooks/useissueactivities";

import IssueDetails from "@/features/issues/components/issuedetails";
import IssueActivity from "@/features/issues/components/issueactivity";
import IssueLoading from "@/features/issues/components/issueloading";

import SectionCard from "@/components/common/sectioncard";

export default function IssueDetailsPage() {
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const { issueId } = useParams();
  
  const {
    issue,
    isLoading,
    isError,
  } = useIssue(issueId);

  const {
    activities,
    isLoading: activitiesLoading,
  } = useIssueActivities(issueId);

  if (isLoading) {
    return <IssueLoading />;
  }

  if (isError || !issue) {
    return (
      <div className="space-y-6">

        <Button
          variant="outline"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <SectionCard>
          <div className="py-10 text-center">
            <h2 className="text-lg font-semibold">
              Issue not found
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              The requested issue could not be loaded.
            </p>
          </div>
        </SectionCard>

      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="space-y-2">

          <Button
            variant="ghost"
            className="w-fit px-0"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              {issue.title}
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Issue ID: {issue.id}
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <Button
            variant="outline"
            onClick={() => setEditOpen(true)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>

          <Button
            variant="destructive"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>

        </div>

      </div>

      {/* Details */}

      <IssueDetails issue={issue} />

      {/* Activity */}

      <SectionCard title="Activity">

        {activitiesLoading ? (
          <p className="text-sm text-muted-foreground">
            Loading activity...
          </p>
        ) : (
          <IssueActivity
            activities={activities}
          />
        )}

      </SectionCard>

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

    </div>

    
  );
}