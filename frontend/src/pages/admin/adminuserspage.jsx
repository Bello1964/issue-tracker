import { useMemo, useState } from "react";
import { Search} from "lucide-react";
import useUsers from "@/features/users/hooks/useAllUsers";
import UserTable from "@/features/admin/components/usertable";
import { Input } from "@/components/ui/input";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");

  const {
    users,
    isLoading,
  } = useUsers();

  const filteredUsers = useMemo(() => {
  const value = search.toLowerCase();

  return users
    .filter((user) => {
      return (
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
      );
    })
    .sort((a, b) => {
      if (a.role === b.role) {
        return a.firstName.localeCompare(b.firstName);
      }

      return a.role === "admin" ? -1 : 1;
    });
}, [users, search]);

  return (
    <div className="space-y-6">
    <div className="space-y-2">
    <h1 className="text-3xl font-bold">
        User Management
    </h1>

    <p className="text-muted-foreground">
        Manage administrator privileges for your workspace.
    </p>

    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <span>
        Total Users:{" "}
        <strong>{users.length}</strong>
        </span>

        <span>
        Administrators:{" "}
        <strong>
            {users.filter(user => user.role === "admin").length}
        </strong>
        </span>

        <span>
        Standard Users:{" "}
        <strong>
            {users.filter(user => user.role === "user").length}
        </strong>
        </span>
    </div>
    </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search users..."
            className="pl-10"
          />
        </div>
      </div>

      <UserTable
        users={filteredUsers}
        isLoading={isLoading}
      />
    </div>
  );
}