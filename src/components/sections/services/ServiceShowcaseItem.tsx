"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getServicePath, type Service } from "@/content/services";
import { cn } from "@/lib/cn";
import { Stage, serviceIllustrations } from "./illustrations";

/** The plain fields this client component needs (icons are functions and can't cross from the server). */
export type ShowcaseService = Pick<Service, "slug" | "name" | "hero" | "capabilities" | "cta">;

type ServiceShowcaseItemProps = {
  service: ShowcaseService;
  index: number;
  total: number;
};

/** How many capabilities to preview; the full list lives on the service page. */
const CAPABILITY_PREVIEW = 6;

/** One service: a large animated illustration beside its pitch, alternating sides down the page. */
export function ServiceShowcaseItem({ service, index, total }: ServiceShowcaseItemProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [80, -80]);
  const illustrationScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.88, 1, 1, 0.94],
  );
  const numberY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [60, -60]);

  const illustration = serviceIllustrations[service.slug];
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      ref={ref}
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className="relative scroll-mt-40 py-16 sm:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          style={{ y: illustrationY, scale: illustrationScale }}
          className={cn("relative", reversed && "lg:order-2")}
        >
          {illustration && (
            <Stage gradient={illustration.gradient}>
              <illustration.Scene />
            </Stage>
          )}
        </motion.div>

        <div className="relative">
          <motion.span
            aria-hidden
            style={{ y: numberY }}
            className="pointer-events-none absolute -top-28 right-0 hidden font-display text-[7rem] leading-none font-bold sm:-top-36 text-transparent select-none [-webkit-text-stroke:1.5px_var(--theme-line-strong)] sm:text-[9rem] lg:block"
          >
            {number}
          </motion.span>
          <Reveal className="relative">
            <p className="font-mono text-sm text-accent">
              {number} <span className="text-subtle">/ {String(total).padStart(2, "0")}</span>
            </p>
            <h2 id={`${service.slug}-title`} className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              {service.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">{service.hero}</p>
          </Reveal>
          <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
            {service.capabilities.slice(0, CAPABILITY_PREVIEW).map((capability, capabilityIndex) => (
              <Reveal
                as="li"
                key={capability}
                delay={capabilityIndex * 0.05}
                y={16}
                className="flex gap-3 text-sm text-body"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/10 text-accent">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {capability}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2} className="relative mt-10 flex flex-wrap gap-3">
            <ButtonLink href={getServicePath(service.slug)} withArrow>
              Explore {service.name}
            </ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">
              {service.cta}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
