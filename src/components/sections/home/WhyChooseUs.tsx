import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { whyChooseUs } from "@/content/home";

export function WhyChooseUs() {
  return (
    <Section>
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why Fyntric Tech"
            title={
              <>
                Engineered for <span className="text-gradient">business outcomes</span>
              </>
            }
            description="We combine product thinking with solid engineering, so what we build is useful on day one and keeps scaling after launch."
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={(index % 2) * 0.1} className={index % 2 === 1 ? "sm:translate-y-12" : ""}>
                <SpotlightCard className="h-full p-8">
                  <Icon aria-hidden className="size-7 text-highlight" />
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
