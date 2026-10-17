import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/home";

export function Industries() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Industries <span className="text-gradient">We Serve</span>
            </>
          }
          description="We understand the workflows behind each sector and build technology that fits how these businesses actually run."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-tint-strong sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal as="li" key={industry.title} delay={(index % 3) * 0.07} className="bg-background">
                <div className="group flex h-full items-center gap-5 p-7 transition-colors duration-500 hover:bg-brand-500/[0.08]">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-tint text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="text-lg font-medium text-foreground">{industry.title}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
