import { useState } from "react";
import RoleActionDialog from "../dialogs/roleactiondialog";
import useAuth from "@/hooks/useauth";
import usePromoteUser from "@/features/admin/hooks/usepromoteuser";
import useDemoteUser from "@/features/admin/hooks/usedemoteuser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck, User} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UserTable({
  users,
  isLoading,
}) {
  const { user: currentUser } = useAuth();
  const promoteUser = usePromoteUser();
  const demoteUser = useDemoteUser();

  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogAction, setDialogAction] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  if (isLoading) {
    return (
      <p className="text-muted-foreground">
        Loading users...
      </p>
    );
  }

  if (!users.length) {
    return (
      <p className="text-muted-foreground">
        No users found.
      </p>
    );
  }

  return (
    <>
      {/* Desktop */}

      <div className="hidden overflow-hidden rounded-xl border lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => {
              const isCurrentUser =
                currentUser.id === user.id;

              const isAdmin =
                user.role === "admin";

              return (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                        {user.firstName[0]}
                        {user.lastName[0]}
                      </div>

                      <div>
                        <p className="font-medium">
                          {user.firstName}{" "}
                          {user.lastName}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    {user.email}
                  </TableCell>

                  <TableCell>
                    <Badge
                    variant={
                        isAdmin
                        ? "default"
                        : "secondary"
                    }
                    className="gap-1"
                    >
                    {isAdmin ? (
                        <>
                        <ShieldCheck className="h-3 w-3" />
                        Administrator
                        </>
                    ) : (
                        <>
                        <User className="h-3 w-3" />
                        User
                        </>
                    )}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    {!isAdmin && (
                      <Button
                        size="sm"
                        onClick={() => {
                        setSelectedUser(user);
                        setDialogAction("promote");
                        setDialogOpen(true);
                        }}
                        disabled={
                          promoteUser.isPending
                        }
                      >
                       {promoteUser.isPending
                        ? "Making..."
                        : "Make Admin"}
                      </Button>
                    )}

                    {isAdmin &&
                      !isCurrentUser && (
                        <Button
                          size="sm"
                          variant="destructive"
                        onClick={() => {
                        setSelectedUser(user);
                        setDialogAction("demote");
                        setDialogOpen(true);
                        }}
                          disabled={
                            demoteUser.isPending
                          }
                        >
                          {demoteUser.isPending
                            ? "Removing..."
                            : "Remove Admin"}
                        </Button>
                      )}

                    {isCurrentUser && (
                      <Badge variant="outline">
                        You
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}

      <div className="grid gap-4 lg:hidden">
        {users.map((user) => {
          const isCurrentUser =
            currentUser.id === user.id;

          const isAdmin =
            user.role === "admin";

          return (
            <Card
              key={user.id}
              className="space-y-4 p-5"
            >
              <div>
                <h3 className="font-semibold">
                  {user.firstName}{" "}
                  {user.lastName}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {user.email}
                </p>

                <Badge
                variant={
                    isAdmin
                    ? "default"
                    : "secondary"
                }
                className="gap-1"
                >
                {isAdmin ? (
                    <>
                    <ShieldCheck className="h-3 w-3" />
                    Administrator
                    </>
                ) : (
                    <>
                    <User className="h-3 w-3" />
                    User
                    </>
                )}
                </Badge>
              </div>

              {!isAdmin && (
                <Button
                  className="w-full"
                onClick={() => {
                setSelectedUser(user);
                setDialogAction("promote");
                setDialogOpen(true);
                }}
                  disabled={
                    promoteUser.isPending
                  }
                >
                 {promoteUser.isPending
                ? "Making..."
                : "Make Admin"}
                </Button>
              )}

              {isAdmin &&
                !isCurrentUser && (
                  <Button
                    className="w-full"
                    variant="destructive"
                    onClick={() => {
                    setSelectedUser(user);
                    setDialogAction("demote");
                    setDialogOpen(true);
                    }}
                    disabled={
                      demoteUser.isPending
                    }
                  >
                    {demoteUser.isPending
                    ? "Removing..."
                    : "Remove Admin"}
                  </Button>
                )}

              {isCurrentUser && (
                <Badge variant="outline">
                  You
                </Badge>
              )}
            </Card>
          );
        })}
      </div>

      {selectedUser && (
        <RoleActionDialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            user={selectedUser}
            action={dialogAction}
            isPending={
            promoteUser.isPending ||
            demoteUser.isPending
            }
            onConfirm={() => {
            if (dialogAction === "promote") {
                promoteUser.mutate(selectedUser.id, {
                onSuccess: () => setDialogOpen(false),
                });
            } else {
                demoteUser.mutate(selectedUser.id, {
                onSuccess: () => setDialogOpen(false),
                });
            }
            }}
        />
        )}
    </>
  );
}