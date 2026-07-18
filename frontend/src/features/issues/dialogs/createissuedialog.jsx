// // comment

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";

// import IssueForm from "../forms/issueform";

// export default function CreateIssueDialog({
//   open,
//   onOpenChange,
// }) {
//   return (
//     <Dialog
//       open={open}
//       onOpenChange={onOpenChange}
//     >
//       <DialogContent className="flex max-h-[90vh] flex-col overflow-hidden p-0 sm:max-w-2xl">

//         {/* Header */}
//         <DialogHeader className="border-b bg-background px-6 py-4">
//           <DialogTitle>
//             Create Issue
//           </DialogTitle>
//         </DialogHeader>

//         {/* Scrollable body */}
//         <div className="flex-1 overflow-y-auto px-6 py-6">
//           <IssueForm />
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end gap-3 border-t bg-background px-6 py-4">

//           <Button
//             type="button"
//             variant="outline"
//             onClick={() => onOpenChange(false)}
//           >
//             Cancel
//           </Button>

//           <Button
//             type="submit"
//             form="create-issue-form"
//           >
//             Create Issue
//           </Button>

//         </div>

//       </DialogContent>
//     </Dialog>
//   );
// }

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import IssueForm from "../forms/issueform";

import useCreateIssue from "../hooks/usecreateissue";

export default function CreateIssueDialog({
  open,
  onOpenChange,
}) {
  const createIssue =
    useCreateIssue();

  const handleCreateIssue = async (
    payload
  ) => {
    try {
      await createIssue.mutateAsync(
        payload
      );

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="flex max-h-[90vh] flex-col overflow-hidden p-0 sm:max-w-2xl">

        <DialogHeader className="border-b bg-background px-6 py-4">
          <DialogTitle>
            Create Issue
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <IssueForm
            formId="create-issue-form"
            onSubmit={handleCreateIssue}
          />
        </div>

        <div className="flex justify-end gap-3 border-t bg-background px-6 py-4">

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            type="submit"
            form="create-issue-form"
            disabled={
              createIssue.isPending
            }
          >
            {createIssue.isPending
              ? "Creating..."
              : "Create Issue"}
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
}