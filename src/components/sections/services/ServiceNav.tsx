"use client";

import { useLenis } from "lenis/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type ServiceNavProps = {
  items: { slug: string; name: string }[];
};

/** Height of the fixed site header plus this bar, so jumps land below both. */
const SCROLL_OFFSET = -150;

/** Sticky bar of service chips that highlights the service in view and jumps to any service. */
export function ServiceNav({ items }: ServiceNavProps) {
  const [active, setActive] = useState(items[0]?.slug);
  const lenis = useLenis();
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollY } = useScroll();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  // Mirror the site header, which slides away while scrolling down, so the bar never leaves a gap.
  useMotionValueEvent(scrollY, "change", (current) => {
    setIsHeaderHidden(current > 320 && current > (scrollY.getPrevious() ?? 0));
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((item) => {
      const section = document.getElementById(item.slug);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible when the bar scrolls sideways on small screens.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (!list || !chip) return;
    list.scrollTo({
      left: chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  function jumpTo(slug: string) {
    const section = document.getElementById(slug);
    if (!section) return;
    if (lenis) lenis.scrollTo(section, { offset: SCROLL_OFFSET });
    else section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      aria-label="Services"
      className={cn(
        "sticky z-30 border-y border-line bg-background/90 backdrop-blur-xl transition-[top] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        isHeaderHidden ? "top-0" : "top-20",
      )}
    >
      <Container>
        <ul
          ref={listRef}
          className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <li key={item.slug} data-slug={item.slug} className="shrink-0">
              <a
                href={`#${item.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  jumpTo(item.slug);
                }}
                aria-current={active === item.slug ? "true" : undefined}
                className={cn(
                  "relative block rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                  active === item.slug ? "text-white" : "text-muted hover:text-foreground",
                )}
              >
                {active === item.slug && (
                  <motion.span
                    layoutId="service-nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-500 shadow-lg shadow-brand-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
