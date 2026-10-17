"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";

const statement =
  "We help businesses turn ideas, processes and operational challenges into scalable digital products that work, grow and last.";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}

/** Large positioning statement whose words light up as the reader scrolls through it. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = statement.split(" ");

  return (
    <section aria-label="Our positioning" className="relative py-28 sm:py-40">
      <Container>
        <p
          ref={ref}
          className="max-w-5xl font-display text-3xl leading-[1.2] font-medium tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {words.map((word, i) => (
            <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>
      </Container>
    </section>
  );
}
