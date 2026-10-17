"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoMark from "@/assets/brand/logo-mark.png";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeHero } from "@/content/home";
import { services } from "@/content/services";
import { primaryCta } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Words of the H1 that get the gradient highlight. */
const highlighted = new Set(["AI", "&", "Digital", "Solutions"]);

function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % words.length), 2200);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="relative inline-grid h-7 min-w-36 overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-gradient font-semibold whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Orbiting rings of service icons around the brand mark. Decorative. */
function OrbitVisual() {
  const inner = services.slice(0, 5);
  const outer = services.slice(5);

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-[30%] animate-pulse-glow rounded-full bg-brand-500/40 blur-3xl" />

      {/* Outer ring */}
      <div className="absolute inset-0 animate-spin-reverse rounded-full border border-white/10">
        {outer.map((service, i) => {
          const angle = (i / outer.length) * 2 * Math.PI;
          const Icon = service.icon;
          return (
            <div
              key={service.slug}
              className="absolute size-12"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%`, translate: "-50% -50%" }}
            >
              <div className="glass grid size-full animate-spin-slow place-items-center rounded-2xl text-brand-200 [animation-duration:60s]">
                <Icon className="size-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Inner ring */}
      <div className="absolute inset-[18%] animate-spin-slow rounded-full border border-dashed border-brand-400/30">
        {inner.map((service, i) => {
          const angle = (i / inner.length) * 2 * Math.PI;
          const Icon = service.icon;
          return (
            <div
              key={service.slug}
              className="absolute size-11"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%`, translate: "-50% -50%" }}
            >
              <div className="grid size-full animate-spin-reverse place-items-center rounded-full border border-brand-400/40 bg-ink-800 text-accent-cyan shadow-[0_0_24px_-4px] shadow-brand-500/60 [animation-duration:40s]">
                <Icon className="size-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Core */}
      <div className="absolute inset-[36%] grid place-items-center rounded-full border border-white/15 bg-ink-900/80 shadow-[0_0_80px_-10px] shadow-brand-500/70 backdrop-blur">
        <Image src={logoMark} alt="" className="w-1/2" sizes="120px" />
      </div>

      {/* Floating status chips */}
      <div className="glass absolute top-[8%] -left-[4%] animate-float rounded-2xl px-4 py-3 text-xs shadow-2xl">
        <p className="flex items-center gap-2 font-medium text-white">
          <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" /> AI agent online
        </p>
        <p className="mt-1 text-slate-400">Qualifying new leads…</p>
      </div>
      <div className="glass absolute -right-[2%] bottom-[14%] animate-float rounded-2xl px-4 py-3 text-xs shadow-2xl [animation-delay:-3s]">
        <p className="font-medium text-white">Deployment ✓</p>
        <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-linear-to-r from-brand-500 to-accent-cyan" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const words = homeHero.heading.split(" ");

  return (
    <section
      ref={sectionRef}
      className="noise relative isolate flex min-h-svh items-center overflow-hidden pt-32 pb-28"
    >
      <AmbientBackground />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <motion.div style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow>{homeHero.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="mt-7 text-[2.5rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl xl:text-[4.25rem]">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${highlighted.has(word) ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease }}
                >
                  {word}
                </motion.span>
                {i < words.length - 1 && " "}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {homeHero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href={primaryCta.href} size="lg" withArrow>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/services/" size="lg" variant="secondary">
              Explore Services
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex items-center gap-3 text-sm text-slate-400"
          >
            <span className="h-px w-10 bg-linear-to-r from-transparent to-brand-400" />
            We build <RotatingWord words={homeHero.rotatingWords} />
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          style={reduceMotion ? undefined : { scale: visualScale, rotate: visualRotate }}
          className="hidden px-6 lg:block"
        >
          <OrbitVisual />
        </motion.div>
      </Container>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-slate-500 uppercase sm:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-brand-400"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
