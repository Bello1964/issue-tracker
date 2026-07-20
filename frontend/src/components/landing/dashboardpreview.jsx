import dashboardPreview from "@/assets/dashboard-preview.png";

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-3xl">

      {/* Background Glow */}
      <div className="absolute inset-0 scale-110 rounded-[40px] bg-primary/10 blur-3xl" />

      {/* Browser Window */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 border-b bg-muted/60 px-5 py-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-4 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
            issue-tracker-1-1hml.onrender.com
          </div>

        </div>

        {/* Dashboard Screenshot */}
        <img
          src={dashboardPreview}
          alt="Issue Tracker Dashboard"
          className="block w-full transition-transform duration-700 hover:scale-[1.015]"
          draggable={false}
        />

      </div>

    </div>
  );
}