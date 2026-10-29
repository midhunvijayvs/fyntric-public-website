import { Container } from "@/components/ui/Container";
import type { Service } from "@/content/services";
import { ServiceNav } from "./ServiceNav";
import { ServiceShowcaseItem } from "./ServiceShowcaseItem";

/** Every service as a large illustrated feature, with a sticky bar to jump between them. */
export function ServiceShowcase({ services }: { services: Service[] }) {
  return (
    <>
      <ServiceNav items={services.map(({ slug, name }) => ({ slug, name }))} />
      <Container className="overflow-x-clip">
        {services.map((service, index) => (
          <ServiceShowcaseItem
            key={service.slug}
            service={{
              slug: service.slug,
              name: service.name,
              hero: service.hero,
              capabilities: service.capabilities,
              cta: service.cta,
            }}
            index={index}
            total={services.length}
          />
        ))}
      </Container>
    </>
  );
}
