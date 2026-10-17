import { services } from "@/content/services";

export const contactSeo = {
  title: "Contact Fyntric Tech | Start Your Technology Project",
  description:
    "Contact Fyntric Tech to discuss web, mobile app, CRM, SaaS, AI automation, blockchain or custom software development.",
};

export const contactIntro = {
  heading: "Let's Build Your Next Digital Product",
  text: "Tell us about your idea, business challenge or software requirement. Our team can help define the right technology approach.",
};

export const serviceOptions = [...services.map((service) => service.name), "Business Solution (CRM, Loyalty, Orders…)", "Not sure yet"];

export const budgetOptions = [
  "Under ₹1 Lakh / $1,500",
  "₹1–5 Lakh / $1,500–6,000",
  "₹5–15 Lakh / $6,000–18,000",
  "Above ₹15 Lakh / $18,000",
  "Not decided yet",
];

export const contactMethodOptions = ["WhatsApp", "Phone Call", "Email"];

export const contactCtas = {
  primary: "Send Project Enquiry",
  secondary: "Book a Consultation",
};
