import { Skeleton } from "@/components/ui/skeleton";

export default function IssueLoading() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="rounded-xl border p-5"
        >
          <Skeleton className="mb-3 h-5 w-56" />

          <Skeleton className="mb-2 h-4 w-full" />

          <Skeleton className="mb-5 h-4 w-2/3" />

          <div className="flex gap-4">
            <Skeleton className="h-4 w-24" />

            <Skeleton className="h-4 w-24" />

            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}