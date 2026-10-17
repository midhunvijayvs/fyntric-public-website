import { cn } from "@/lib/cn";

/** Soft glowing colour fields and grid used behind dark hero areas. Purely decorative. */
export function AmbientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent)]",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 animate-pulse-glow rounded-full bg-brand-500/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-violet/20 blur-[120px]" />
      <div className="absolute bottom-0 -left-40 h-[24rem] w-[24rem] rounded-full bg-accent-cyan/10 blur-[120px]" />
    </div>
  );
}
