import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Vertical rhythm wrapper for page sections. */
export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={cn("relative py-24 sm:py-32", className)} {...props} />;
}
