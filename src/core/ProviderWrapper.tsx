import { ReactNode } from "react";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <HydrationOverlay>
      {children}
      <SpeedInsights />
      <Toaster />
    </HydrationOverlay>
  );
}
