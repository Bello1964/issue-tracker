import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export default function ProfileHeader({
  user,
}) {
  const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`;

  return (
    <div className="rounded-xl border bg-card p-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">

        <Avatar className="h-28 w-28 border-4 border-primary/10">
          <AvatarFallback className="text-3xl font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col justify-center space-y-3 text-center md:text-left">

          <h1 className="text-3xl font-bold">
            {user.firstName} {user.lastName}
          </h1>

          <p className="text-muted-foreground">
            {user.email}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">

            <Badge>
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>

            <Badge variant="outline">
              {user.isDeleted ? "Inactive" : "Active"}
            </Badge>

          </div>

        </div>

      </div>
    </div>
  );
}