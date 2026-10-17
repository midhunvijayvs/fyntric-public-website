import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "@/content/home";

function TechPill({ name }: { name: string }) {
  return (
    <span className="glass flex items-center gap-3 rounded-full px-7 py-4 font-display text-xl font-medium whitespace-nowrap text-white sm:text-2xl">
      <span aria-hidden className="size-2 rounded-full bg-brand-400" />
      {name}
    </span>
  );
}

export function TechStack() {
  const half = Math.ceil(technologies.length / 2);

  return (
    <section aria-labelledby="tech-heading" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Technologies"
          title={<span id="tech-heading">Built on a modern, proven stack</span>}
          description="We choose the right tools for each product, from Next.js and Flutter to cloud infrastructure and commerce platforms."
        />
      </Container>
      <div className="mt-16 space-y-4">
        <Marquee duration={35}>
          {technologies.slice(0, half).map((name) => (
            <TechPill key={name} name={name} />
          ))}
          {technologies.slice(0, half).map((name) => (
            <TechPill key={`${name}-repeat`} name={name} />
          ))}
        </Marquee>
        <Marquee duration={35} reverse>
          {technologies.slice(half).map((name) => (
            <TechPill key={name} name={name} />
          ))}
          {technologies.slice(half).map((name) => (
            <TechPill key={`${name}-repeat`} name={name} />
          ))}
        </Marquee>
      </div>
      <p className="sr-only">Technologies: {technologies.join(", ")}.</p>
    </section>
  );
}
