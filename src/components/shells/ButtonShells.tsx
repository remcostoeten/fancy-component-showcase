"use client";

import HoverCard from "@/app/HoverCard";
import { cn } from "@/core/helpers/utils";
import { LucideClipboard } from "lucide-react";
import { ReactNode } from "react";
export const ButtonShells = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <HoverCard
      className={cn(
        "p-4 bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className,
      )}
    >
      <LucideClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
    </HoverCard>
  );
};
