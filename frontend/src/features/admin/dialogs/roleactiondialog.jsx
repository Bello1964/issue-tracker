import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function RoleActionDialog({
  open,
  onOpenChange,
  user,
  action,
  onConfirm,
  isPending,
}) {
  const promoting = action === "promote";

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            {promoting
              ? "Make Administrator"
              : "Remove Administrator"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {promoting
              ? `Are you sure you want to grant administrator privileges to ${user.firstName} ${user.lastName}?`
              : `Are you sure you want to remove administrator privileges from ${user.firstName} ${user.lastName}?`}
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            disabled={isPending}
          >
            {promoting
              ? "Make Admin"
              : "Remove Admin"}
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}