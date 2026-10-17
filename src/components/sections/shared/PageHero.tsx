"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  /** Optional actions such as CTA buttons. */
  children?: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Intro block for inner pages: breadcrumbs, the page's single H1 and a short description. */
export function PageHero({ eyebrow, title, description, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="noise relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <AmbientBackground />
      <Container className="relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Breadcrumbs items={breadcrumbs} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-10"
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {description}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
