"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { budgetOptions, contactCtas, contactMethodOptions, serviceOptions } from "@/content/contact";
import { cn } from "@/lib/cn";
import { buildWhatsAppUrl, formatEnquiryMessage } from "@/lib/whatsapp";

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-slate-500 transition-colors focus:border-brand-400 focus:bg-white/[0.06] focus:outline-none";

function Field({ label, name, required, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label}
        {required && <span className="ml-0.5 text-brand-300">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectInput({ name, options, placeholder, required }: { name: string; options: string[]; placeholder: string; required?: boolean }) {
  return (
    <select id={name} name={name} required={required} defaultValue="" className={cn(inputClassName, "appearance-none bg-ink-900")}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

/**
 * Project enquiry form. There is no backend: on submit the enquiry is formatted
 * and opened as a pre-filled WhatsApp message to the admin number in `contactConfig`.
 */
export function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "");

    const message = formatEnquiryMessage("New Project Enquiry – Website", [
      ["Name", value("name")],
      ["Company", value("company")],
      ["Email", value("email")],
      ["Phone / WhatsApp", value("phone")],
      ["Country", value("country")],
      ["Service Required", value("service")],
      ["Estimated Budget", value("budget")],
      ["Preferred Contact Method", value("contactMethod")],
      ["Project Description", value("description")],
    ]);

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setIsSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            role="status"
            className="flex min-h-[32rem] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 aria-hidden className="size-16 text-emerald-400" />
            <h3 className="mt-6 text-2xl font-semibold">Your enquiry is ready in WhatsApp</h3>
            <p className="mt-3 max-w-md text-slate-400">
              Press send in WhatsApp to deliver it to our team. If WhatsApp didn&apos;t open, check that pop-ups are allowed and try again.
            </p>
            <Button variant="secondary" className="mt-8" onClick={() => setIsSent(false)}>
              Send another enquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Field label="Name" name="name" required>
              <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={inputClassName} />
            </Field>
            <Field label="Company" name="company">
              <input id="company" name="company" autoComplete="organization" placeholder="Company name" className={inputClassName} />
            </Field>
            <Field label="Email" name="email" required>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClassName} />
            </Field>
            <Field label="Phone / WhatsApp" name="phone" required>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 98765 43210" className={inputClassName} />
            </Field>
            <Field label="Country" name="country">
              <input id="country" name="country" autoComplete="country-name" placeholder="India, UAE, Saudi Arabia…" className={inputClassName} />
            </Field>
            <Field label="Service Required" name="service" required>
              <SelectInput name="service" options={serviceOptions} placeholder="Select a service" required />
            </Field>
            <Field label="Estimated Budget" name="budget">
              <SelectInput name="budget" options={budgetOptions} placeholder="Select a range" />
            </Field>
            <Field label="Preferred Contact Method" name="contactMethod">
              <SelectInput name="contactMethod" options={contactMethodOptions} placeholder="How should we reach you?" />
            </Field>
            <Field label="Project Description" name="description" required className="sm:col-span-2">
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                placeholder="Tell us about your idea, business challenge or software requirement."
                className={cn(inputClassName, "resize-y")}
              />
            </Field>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">Submitting opens WhatsApp with your enquiry ready to send.</p>
              <Button type="submit" size="lg">
                <Send aria-hidden className="relative z-10 size-4" />
                {contactCtas.primary}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
