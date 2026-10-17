import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

/** Grid of service capabilities. */
export function CapabilitiesGrid({ capabilities }: { capabilities: string[] }) {
  return (
    <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((capability, index) => (
        <Reveal as="li" key={capability} delay={(index % 3) * 0.07}>
          <div className="glass group flex h-full items-center gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/40">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-accent-cyan transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
              <Check aria-hidden className="size-5" />
            </span>
            <span className="font-medium text-white">{capability}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
