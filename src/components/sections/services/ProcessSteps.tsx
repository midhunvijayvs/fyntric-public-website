import { Reveal } from "@/components/ui/Reveal";

/** Compact horizontal process strip used on service pages. */
export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
      {steps.map((step, index) => (
        <Reveal as="li" key={step} delay={index * 0.06}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-500 hover:border-brand-400/40">
            <span className="font-display text-4xl font-semibold text-foreground/10 transition-colors duration-500 group-hover:text-brand-400/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-6 font-medium text-foreground">{step}</p>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-brand-500 to-accent-cyan transition-transform duration-700 group-hover:scale-x-100"
            />
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
