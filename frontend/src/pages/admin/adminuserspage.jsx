import { useMemo, useState } from "react";
import { Search, RefreshCw } from "lucide-react";

import useUsers from "@/hooks/useusers";

import UserTable from "@/features/admin/components/usertable";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");

  const {
    users,
    isLoading,
    refetch,
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
      <div>
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-muted-foreground">
          Manage administrator privileges for your workspace.
        </p>
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

        <Button
          variant="outline"
          onClick={refetch}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>

      </div>

      <UserTable
        users={filteredUsers}
        isLoading={isLoading}
      />
    </div>
  );
}