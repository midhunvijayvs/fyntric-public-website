import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "inverse" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_10px_40px_-10px] shadow-brand-500/70 hover:bg-brand-400 hover:shadow-brand-400/80",
  inverse: "bg-white text-ink-900 shadow-[0_10px_40px_-10px] shadow-white/30 hover:bg-brand-50",
  secondary: "border border-line-strong bg-tint text-foreground backdrop-blur hover:border-line-strong hover:bg-tint-strong",
  ghost: "text-accent hover:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type ButtonStyleProps = {
  variant?: Variant;
  size?: Size;
  /** Shows an arrow that nudges on hover. */
  withArrow?: boolean;
};

export function buttonClassName({ variant = "primary", size = "md" }: ButtonStyleProps = {}) {
  return cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
  );
}

function ButtonContent({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  return (
    <>
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      {withArrow && (
        <ArrowUpRight
          aria-hidden
          className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
}

type ButtonLinkProps = ButtonStyleProps & ComponentPropsWithoutRef<typeof Link>;

/** Internal navigation styled as a button. */
export function ButtonLink({ variant, size, withArrow, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(buttonClassName({ variant, size }), className)} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </Link>
  );
}

type ButtonProps = ButtonStyleProps & ComponentPropsWithoutRef<"button">;

export function Button({ variant, size, withArrow, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonClassName({ variant, size }), className)} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </button>
  );
}
