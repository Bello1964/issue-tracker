import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">

          <h2 className="text-4xl font-bold">
            Ready to start tracking issues?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            Organize projects, collaborate with your team,
            and stay productive using a clean modern workflow.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="mt-8"
            onClick={() => navigate("/register")}
          >
            Create Free Account

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </div>

      </div>
    </section>
  );
}