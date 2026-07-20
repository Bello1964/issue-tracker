import { Link, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useauth";

import { Button } from "@/components/ui/button";

export default function LandingHeader() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          Mini Issue Tracker
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>

          <a
            href="#stats"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Statistics
          </a>

          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
        </nav>

        {/* Actions */}

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Button
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}