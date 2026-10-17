import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { developmentProcess } from "@/content/home";

export function ProcessSection() {
  return (
    <Section className="overflow-hidden">
      <Container className="max-w-5xl">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={
            <>
              Our Development <span className="text-gradient">Process</span>
            </>
          }
          description="A clear, collaborative path from first conversation to a product that keeps improving."
        />
        <ProcessTimeline steps={developmentProcess} />
      </Container>
    </Section>
  );
}
