export default function LandingFooter() {
  return (
    <footer
      id="about"
      className="border-t py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">

        <p>
          © {new Date().getFullYear()} Mini Issue Tracker
        </p>

        <div className="flex gap-6">
          <span>React</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}