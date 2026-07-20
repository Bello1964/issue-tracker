import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  to,
}) {
  const navigate = useNavigate();

  const clickable = Boolean(to);

  return (
    <Card
      onClick={() => clickable && navigate(to)}
      className={[
        "transition-all duration-200",
        clickable
          ? "cursor-pointer hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          : "hover:shadow-md",
      ].join(" ")}
    >
      <CardContent className="flex items-start justify-between p-6">

        <div className="space-y-2">

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="text-3xl font-bold tracking-tight">
            {value}
          </h3>

          {description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )}

          {clickable && (
            <div className="flex items-center gap-1 pt-1 text-xs font-medium text-primary">
              View issues
              <ChevronRight className="h-3 w-3" />
            </div>
          )}

        </div>

        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}

      </CardContent>
    </Card>
  );
}