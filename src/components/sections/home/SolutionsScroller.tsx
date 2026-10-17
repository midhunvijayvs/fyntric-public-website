"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessSolutions } from "@/content/home";

function SolutionCard({ solution, index }: { solution: (typeof businessSolutions)[number]; index: number }) {
  const Icon = solution.icon;
  return (
    <article className="group relative flex h-[22rem] w-[19rem] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-linear-to-b from-surface-2 to-surface p-8 sm:w-[24rem]">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-64 rounded-full bg-brand-500/20 blur-3xl transition-all duration-700 group-hover:bg-accent-cyan/25"
      />
      <div className="relative flex items-center justify-between">
        <span className="font-display text-sm text-subtle">0{index + 1}</span>
        <Icon aria-hidden className="size-8 text-accent transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
      </div>
      <div className="relative">
        <h3 className="text-2xl font-semibold">{solution.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{solution.description}</p>
      </div>
    </article>
  );
}

/**
 * Business solutions as a horizontal track.
 * On large screens the section pins and vertical scrolling moves the track sideways.
 */
export function SolutionsScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const heading = (
    <SectionHeading
      eyebrow="Business solutions"
      title={
        <>
          Platforms that run <span className="text-gradient">real operations</span>
        </>
      }
      description="Ready-to-shape business platforms, built around your users, workflows, data, integrations and reporting needs."
    />
  );

  return (
    <>
      {/* Pinned horizontal scroll for large screens */}
      <section ref={sectionRef} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <Container>{heading}</Container>
          <motion.div ref={trackRef} style={reduceMotion ? undefined : { x }} className="mt-14 flex w-max gap-6 pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {businessSolutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </motion.div>
          <Container className="mt-12">
            <div className="h-px w-full bg-tint-strong">
              <motion.div style={{ width: progressWidth }} className="h-px bg-linear-to-r from-brand-500 to-accent-cyan" />
            </div>
          </Container>
        </div>
      </section>

      {/* Swipeable track for small screens */}
      <section className="py-24 lg:hidden">
        <Container>{heading}</Container>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8">
          {businessSolutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
