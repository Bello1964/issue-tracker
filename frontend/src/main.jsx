import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import "./styles/index.css";

import App from "./App";
import QueryProvider from "./providers/queryprovider";
import AuthProvider from "./providers/authprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <TooltipProvider delayDuration={0}>
            <App />
             <Toaster
              richColors
              position="top-right"
              closeButton
            />
          </TooltipProvider>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);