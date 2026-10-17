import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds for one full loop. */
  duration?: number;
  className?: string;
};

/** Infinite horizontal ticker. Content is duplicated so the loop is seamless; pauses on hover. */
export function Marquee({ children, reverse, duration = 40, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max shrink-0 animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        <div aria-hidden className="flex gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
