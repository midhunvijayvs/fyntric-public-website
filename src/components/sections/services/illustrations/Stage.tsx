"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { createContext, useContext, useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Pointer = { x: MotionValue<number>; y: MotionValue<number> };

const PointerContext = createContext<Pointer | null>(null);

type StageProps = {
  /** Tailwind gradient classes for the backdrop, e.g. "from-brand-500 to-accent-violet". */
  gradient: string;
  children: ReactNode;
  className?: string;
};

/**
 * Framed, glowing backdrop for a service illustration.
 * It tilts in 3D towards the pointer, and <Layer> children shift with it for a parallax effect.
 */
export function Stage({ gradient, children, className }: StageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 18 });
  const y = useSpring(rawY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <PointerContext.Provider value={{ x, y }}>
      <div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn("group/stage relative [perspective:1200px]", className)}
      >
        <motion.div
          aria-hidden
          style={{ rotateX, rotateY }}
          className={cn(
            "relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-linear-to-br p-6 shadow-[0_40px_80px_-30px_rgb(10_95_224_/_0.45)] sm:p-10",
            gradient,
          )}
        >
          <div className="bg-grid absolute inset-0 opacity-60 [--theme-grid-line:rgb(255_255_255/0.12)]" />
          <div className="absolute -top-1/3 -right-1/4 size-[70%] rounded-full bg-white/25 blur-3xl transition-transform duration-1000 group-hover/stage:scale-125" />
          <div className="absolute -bottom-1/3 -left-1/4 size-[60%] rounded-full bg-ink-900/30 blur-3xl" />
          <div className="relative size-full">{children}</div>
        </motion.div>
      </div>
    </PointerContext.Provider>
  );
}

/** Moves its children with the pointer; higher depth moves further, so it reads as closer. */
export function Layer({ depth = 1, className, children }: { depth?: number; className?: string; children: ReactNode }) {
  const pointer = useContext(PointerContext);
  const fallback = useMotionValue(0);
  const x = useTransform(pointer?.x ?? fallback, (value) => value * depth * 28);
  const y = useTransform(pointer?.y ?? fallback, (value) => value * depth * 28);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
