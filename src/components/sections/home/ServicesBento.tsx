import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { getServicePath, services, type Service } from "@/content/services";
import { cn } from "@/lib/cn";

/** Grid footprint for highlighted services; everything else is a 1×1 tile. */
const layout: Record<string, string> = {
  "web-development": "lg:col-span-2 lg:row-span-2",
  "ai-automation": "lg:col-span-2",
  "digital-marketing": "lg:col-span-2",
};

/** Decorative editor window shown inside the featured tile. */
function CodeWindow() {
  const lines = [
    ["w-24 bg-accent-violet/70", "w-32 bg-brand-400/70"],
    ["w-10 bg-transparent", "w-20 bg-accent-cyan/70", "w-28 bg-white/20"],
    ["w-10 bg-transparent", "w-36 bg-brand-300/60"],
    ["w-10 bg-transparent", "w-16 bg-accent-cyan/70", "w-24 bg-white/20"],
    ["w-16 bg-accent-violet/70"],
  ];
  return (
    <div aria-hidden data-theme="dark" className="mt-8 hidden overflow-hidden rounded-2xl border border-line bg-background/90 lg:block">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-amber-300/70" />
        <span className="size-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-subtle">app/page.tsx</span>
      </div>
      <div className="space-y-3 p-5">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="w-4 text-right font-mono text-[10px] leading-2 text-subtle">{i + 1}</span>
            {line.map((bar, j) => (
              <span
                key={j}
                className={`h-2 rounded-full ${bar} origin-left transition-transform duration-700 group-hover/spot:scale-x-110`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceTile({ service, featured }: { service: Service; featured: boolean }) {
  const Icon = service.icon;
  return (
    <SpotlightCard className="h-full">
      <Link href={getServicePath(service.slug)} className="flex h-full flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between">
          <span className="grid size-12 place-items-center rounded-2xl border border-brand-400/30 bg-brand-500/10 text-accent transition-colors duration-500 group-hover/spot:bg-brand-500 group-hover/spot:text-white">
            <Icon aria-hidden className="size-6" />
          </span>
          <ArrowUpRight
            aria-hidden
            className="size-5 text-subtle transition-all duration-500 group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5 group-hover/spot:text-foreground"
          />
        </div>
        <h3 className={cn("mt-8 font-semibold", featured ? "text-3xl" : "text-xl")}>{service.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{service.summary}</p>
        {featured && <CodeWindow />}
        {featured && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-8">
            {service.capabilities.slice(0, 6).map((capability) => (
              <li key={capability} className="rounded-full border border-line px-3 py-1 text-xs text-body">
                {capability}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </SpotlightCard>
  );
}

export function ServicesBento() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Our Technology <span className="text-gradient">Services</span>
              </>
            }
            description="From websites and mobile apps to SaaS platforms, AI agents and Web3 products, one team takes your idea from strategy to launch."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/services/" variant="secondary" withArrow>
              View all services
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-flow-dense auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={(index % 4) * 0.06} className={layout[service.slug]}>
              <ServiceTile service={service} featured={service.slug === "web-development"} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
