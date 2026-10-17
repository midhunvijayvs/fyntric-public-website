import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { getServicePath, type Service } from "@/content/services";

/** Service summary card linking to the service's own page. */
export function ServiceCard({ service, showCapabilities = true }: { service: Service; showCapabilities?: boolean }) {
  const Icon = service.icon;
  return (
    <SpotlightCard className="h-full">
      <Link href={getServicePath(service.slug)} className="flex h-full flex-col p-8">
        <div className="flex items-start justify-between">
          <span className="grid size-14 place-items-center rounded-2xl border border-brand-400/30 bg-brand-500/10 text-accent transition-colors duration-500 group-hover/spot:bg-brand-500 group-hover/spot:text-white">
            <Icon aria-hidden className="size-6" />
          </span>
          <ArrowUpRight
            aria-hidden
            className="size-5 text-subtle transition-all duration-500 group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5 group-hover/spot:text-foreground"
          />
        </div>
        <h3 className="mt-8 text-2xl font-semibold">{service.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{service.summary}</p>
        {showCapabilities && (
          <ul className="mt-auto space-y-2 border-t border-line pt-6 text-sm text-body">
            {service.capabilities.slice(0, 4).map((capability) => (
              <li key={capability} className="flex items-center gap-2.5">
                <span aria-hidden className="size-1.5 rounded-full bg-accent-cyan" />
                {capability}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </SpotlightCard>
  );
}
