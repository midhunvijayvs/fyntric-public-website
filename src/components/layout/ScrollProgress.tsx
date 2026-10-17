"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the top of the viewport showing reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r from-brand-500 via-accent-cyan to-accent-violet"
    />
  );
}
