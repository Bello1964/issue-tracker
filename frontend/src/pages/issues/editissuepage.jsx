import { useNavigate, useParams } from "react-router-dom";

import IssueForm from "@/features/issues/forms/issueform";

import useIssue from "@/features/issues/hooks/useissue";

import IssueLoading from "@/features/issues/components/issueloading";

export default function EditIssuePage() {
  const navigate = useNavigate();

  const { issueId } = useParams();

  const {
    issue,
    isLoading,
    isError,
  } = useIssue(issueId);

  if (isLoading) {
    return <IssueLoading />;
  }

  if (isError || !issue) {
    navigate("/issues");

    return null;
  }

  return (
    <IssueForm
      mode="edit"
      issue={issue}
    />
  );
}