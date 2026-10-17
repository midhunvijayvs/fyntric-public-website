import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small pill label shown above section headings. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3.5 py-1.5 text-xs font-medium tracking-[0.18em] text-accent uppercase",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_2px] shadow-accent-cyan/60" />
      {children}
    </span>
  );
}
