import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

/** Reusable liquid-glass panel with luxury radius and depth. */
export function GlassCard({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={cn("liquid-glass rounded-[28px] p-6", className)} {...props}>{children}</div>;
}
