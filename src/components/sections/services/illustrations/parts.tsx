import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Shared building blocks for the service illustrations. Purely decorative.
 * Looping motion uses the CSS animations in globals.css (animate-bob, animate-grow-x…),
 * which the browser runs off the main thread and pauses for reduced-motion users.
 */

/** Inline style that offsets a looping CSS animation so siblings don't move in lockstep. */
export function delay(seconds: number) {
  return { animationDelay: `${seconds}s` };
}

/** Rounded app/browser panel that follows the light or dark theme. */
export function Panel({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/40 bg-surface shadow-2xl shadow-ink-950/25 dark:border-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Browser window chrome with traffic lights and an address bar. */
export function BrowserWindow({ url, className, children }: { url: string; className?: string; children?: ReactNode }) {
  return (
    <Panel className={className}>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="ml-2 flex-1 truncate rounded-full bg-tint-strong px-3 py-0.5 text-[9px] text-subtle">
          {url}
        </span>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </Panel>
  );
}

/** Phone frame with a notch. */
export function Phone({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border-[5px] border-ink-900 bg-surface p-2 shadow-2xl shadow-ink-950/30 dark:border-ink-700",
        className,
      )}
    >
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-ink-900/80 dark:bg-white/20" />
      {children}
    </div>
  );
}

/** Skeleton text line (pass a bg-* class to recolour it). `grow` animates it filling in, like content loading. */
export function Line({ className, grow, delay: wait = 0 }: { className?: string; grow?: boolean; delay?: number }) {
  return (
    <div
      className={cn(
        "h-1.5 rounded-full",
        !className?.includes("bg-") && "bg-foreground/12",
        grow && "origin-left animate-grow-x",
        className,
      )}
      style={grow ? delay(wait) : undefined}
    />
  );
}

/** Small floating badge with an icon, bobbing gently (a CSS animation, so it stays smooth with many on screen). */
export function Chip({
  icon: Icon,
  label,
  tone = "text-brand-500",
  className,
  delay: wait = 0,
}: {
  icon: LucideIcon;
  label: string;
  tone?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "flex animate-bob items-center gap-2 rounded-xl border border-white/50 bg-surface/95 px-3 py-2 text-[10px] font-semibold whitespace-nowrap text-foreground shadow-xl shadow-ink-950/20 backdrop-blur sm:text-xs dark:border-white/10",
        className,
      )}
      style={{ ...delay(wait), animationDuration: "4s" }}
    >
      <Icon className={cn("size-3.5 sm:size-4", tone)} />
      {label}
    </div>
  );
}

/** Gradient block standing in for an image. */
export function ImageBlock({
  className,
  gradient = "from-brand-400 to-accent-violet",
}: {
  className?: string;
  gradient?: string;
}) {
  return <div className={cn("rounded-lg bg-linear-to-br", gradient, className)} />;
}
