import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionCard({
  title,
  children,
}) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}