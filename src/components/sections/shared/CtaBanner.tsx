import { MessageCircle } from "lucide-react";
import { ButtonLink, buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { primaryCta } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type CtaBannerProps = {
  heading: string;
  text?: string;
  buttonLabel?: string;
};

/** Closing conversion panel used at the end of every page. */
export function CtaBanner({ heading, text, buttonLabel = primaryCta.label }: CtaBannerProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="noise relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-br from-brand-600 via-ink-800 to-ink-900 px-6 py-20 text-center sm:px-16 sm:py-28">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
              <div className="absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-white/10" />
              <div className="absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 animate-spin-reverse rounded-full border border-dashed border-white/15" />
              <div className="absolute -top-20 -left-20 size-80 rounded-full bg-accent-cyan/30 blur-[100px]" />
              <div className="absolute -right-20 -bottom-20 size-80 rounded-full bg-accent-violet/30 blur-[100px]" />
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">{heading}</h2>
            {text && <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-100/80">{text}</p>}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href={primaryCta.href} size="lg" variant="inverse" withArrow>
                {buttonLabel}
              </ButtonLink>
              <a
                href={buildWhatsAppUrl("Hi Fyntric Tech, I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ variant: "secondary", size: "lg" })}
              >
                <MessageCircle aria-hidden className="size-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
