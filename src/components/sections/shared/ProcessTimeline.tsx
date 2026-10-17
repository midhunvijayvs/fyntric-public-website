"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Step = { title: string; description?: string };

/** Vertical timeline whose connecting line fills as the reader scrolls. Alternates sides on desktop. */
export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative mt-16 space-y-10 md:space-y-0">
      <div aria-hidden className="absolute top-0 bottom-0 left-6 w-px bg-tint-strong md:left-1/2">
        <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-linear-to-b from-brand-500 via-accent-cyan to-accent-violet" />
      </div>

      {steps.map((step, index) => {
        const isRight = index % 2 === 1;
        return (
          <li key={step.title} className="relative grid md:grid-cols-2 md:py-6">
            <span className="absolute top-1 left-6 z-10 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-brand-400/50 bg-surface font-display text-sm font-semibold text-foreground shadow-[0_0_30px_-4px] shadow-brand-500/70 md:top-1/2 md:left-1/2 md:-translate-y-1/2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Reveal className={cn("pl-20 md:pl-0", isRight ? "md:col-start-2 md:pl-20" : "md:pr-20 md:text-right")}>
              <h3 className="text-xl font-semibold sm:text-2xl">{step.title}</h3>
              {step.description && <p className="mt-2 leading-relaxed text-muted">{step.description}</p>}
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
