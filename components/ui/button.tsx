import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type BaseProps = { children: ReactNode; variant?: "primary" | "ghost"; className?: string };

/** Premium glass button used for primary calls to action. */
export function Button({ children, variant = "primary", className, ...props }: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClasses(variant, className)} {...props}>{children}</button>;
}

/** Anchor styled as the shared premium glass button. */
export function ButtonLink({ children, variant = "primary", className, ...props }: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={buttonClasses(variant, className)} {...props}>{children}</a>;
}

function buttonClasses(variant: "primary" | "ghost", className?: string) {
  return cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-tight transition duration-300 ease-out hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#c7a45b]/30 active:scale-95",
    variant === "primary" ? "bg-[#0f3328] text-white shadow-2xl shadow-[#0f3328]/20 hover:bg-[#154637]" : "liquid-glass text-foreground hover:bg-white/60",
    className,
  );
}
