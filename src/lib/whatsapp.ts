import { contactConfig } from "@/config/site";

/** Builds a wa.me link that opens a chat with the admin, pre-filled with `message`. */
export function buildWhatsAppUrl(message: string, phone: string = contactConfig.whatsappNumber): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Formats labelled form values as a readable WhatsApp message. Empty values are left out. */
export function formatEnquiryMessage(title: string, fields: Array<[label: string, value: string]>): string {
  const lines = fields
    .filter(([, value]) => value.trim() !== "")
    .map(([label, value]) => `*${label}:* ${value.trim()}`);

  return [`*${title}*`, "", ...lines].join("\n");
}
