export default function DetailRow({
  label,
  value,
}) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b last:border-b-0">
      <p className="text-sm font-medium text-muted-foreground">
        {label}
      </p>

      <div className="text-sm">
        {value ?? "—"}
      </div>
    </div>
  );
}