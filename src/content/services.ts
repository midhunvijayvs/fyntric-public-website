import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  Code2,
  Cpu,
  LayoutTemplate,
  Megaphone,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Users,
  Cloud,
} from "lucide-react";

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Short name used in navigation, cards and links. */
  name: string;
  /** One-line summary for cards. */
  summary: string;
  icon: LucideIcon;
  seo: { title: string; description: string };
  heading: string;
  hero: string;
  capabilities: string[];
  cta: string;
  faqs: Faq[];
  /** Slugs of related services for internal linking. */
  related: string[];
};

/** Shared across every service page, per the content document. */
export const serviceWhyChooseUs =
  "Custom requirements, scalable architecture, modern technologies, clear development process and ongoing support.";

export const serviceProcess = ["Discovery", "Planning", "Design", "Development", "Testing", "Deployment", "Support"];

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "High-performance websites and web applications built around your business requirements.",
    icon: Code2,
    seo: {
      title: "Web Development Company | Custom Web Development | Fyntric Tech",
      description:
        "Fyntric Tech provides custom web development services for businesses, startups and enterprises. Build scalable, secure and high-performance websites and web applications.",
    },
    heading: "Custom Web Development Company",
    hero: "Build high-performance websites and web applications around your business requirements.",
    capabilities: [
      "Business Website Development",
      "Custom Web Application Development",
      "SaaS Web Applications",
      "E-commerce Websites",
      "CRM Web Applications",
      "API Development",
      "Performance Optimization",
      "Responsive Development",
    ],
    cta: "Get Your Web Development Estimate",
    faqs: [
      {
        question: "What types of websites do you develop?",
        answer:
          "We develop business websites, e-commerce stores, web applications, dashboards and custom business platforms.",
      },
      {
        question: "Can you develop a website with Next.js?",
        answer: "Yes. Modern frameworks such as Next.js and React can be used where they fit the project requirements.",
      },
    ],
    related: ["saas-development", "ecommerce-development", "crm-development"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    summary: "Reliable, user-friendly Android and iOS applications that turn ideas into products.",
    icon: Smartphone,
    seo: {
      title: "Mobile App Development Company | Android & iOS | Fyntric Tech",
      description:
        "Build scalable Android and iOS mobile applications with Fyntric Tech for startups, businesses and enterprises.",
    },
    heading: "Mobile App Development Company",
    hero: "Turn your business idea into a reliable, user-friendly Android and iOS application.",
    capabilities: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "Business Applications",
      "E-commerce Apps",
      "Booking Applications",
      "Delivery Applications",
      "CRM and Customer Apps",
    ],
    cta: "Discuss Your Mobile App",
    faqs: [
      {
        question: "Do you develop both Android and iOS apps?",
        answer: "Yes. Projects can be developed for Android, iOS or both depending on the business requirement.",
      },
      {
        question: "Can you connect an app to an existing backend?",
        answer: "Yes. Mobile applications can connect to APIs, databases and existing business systems.",
      },
    ],
    related: ["web-development", "custom-software-development", "crm-development"],
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    summary: "Fast, flexible and conversion-focused Shopify stores, themes and integrations.",
    icon: ShoppingBag,
    seo: {
      title: "Shopify Development Company | Custom Shopify Store Development",
      description:
        "Fyntric Tech provides Shopify store development, theme customization, Liquid development, integrations and e-commerce solutions.",
    },
    heading: "Shopify Development Company",
    hero: "Build a fast, flexible and conversion-focused Shopify store for your business.",
    capabilities: [
      "Shopify Store Development",
      "Theme Customization",
      "Shopify Liquid Development",
      "App Integration",
      "Payment Integration",
      "Shipping Integration",
      "Product Customization",
      "Store Optimization",
    ],
    cta: "Get a Shopify Project Estimate",
    faqs: [
      {
        question: "Can you customize Shopify themes?",
        answer: "Yes. We can customize Shopify themes and implement business-specific functionality.",
      },
      {
        question: "Can you integrate payment and shipping systems?",
        answer: "Yes, subject to the capabilities and requirements of the selected providers and Shopify setup.",
      },
    ],
    related: ["ecommerce-development", "wordpress-development", "digital-marketing"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    summary: "Professional, fast and easy-to-manage WordPress and WooCommerce websites.",
    icon: LayoutTemplate,
    seo: {
      title: "WordPress Development Company | Custom WordPress Services",
      description:
        "Fyntric Tech provides professional WordPress development for business websites, e-commerce stores, custom functionality and optimization.",
    },
    heading: "WordPress Development Company",
    hero: "Create a professional, fast and manageable WordPress website tailored to your business.",
    capabilities: [
      "Business Websites",
      "WooCommerce Development",
      "Custom Theme Work",
      "Custom Functionality",
      "Plugin Integration",
      "Performance Optimization",
      "SEO-Friendly Structure",
      "Maintenance and Support",
    ],
    cta: "Start Your WordPress Project",
    faqs: [
      {
        question: "Can you build WooCommerce stores?",
        answer:
          "Yes. WooCommerce can be used for product catalogs, checkout, payments, shipping and other e-commerce requirements.",
      },
    ],
    related: ["web-development", "ecommerce-development", "digital-marketing"],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    summary: "Online stores designed around your products, customers and operations.",
    icon: ShoppingCart,
    seo: {
      title: "E-commerce Development Company | Online Store Development",
      description:
        "Build scalable e-commerce websites and applications with product, payment, shipping, inventory and automation integrations.",
    },
    heading: "E-commerce Development Company",
    hero: "Build an online store designed around your products, customers and operations.",
    capabilities: [
      "Online Store Development",
      "Product Catalogs",
      "Payment Integration",
      "Shipping Integration",
      "Inventory Integration",
      "Customer Accounts",
      "Order Management",
      "E-commerce Automation",
    ],
    cta: "Discuss Your E-commerce Project",
    faqs: [
      {
        question: "Can you integrate an existing payment gateway?",
        answer: "We can integrate supported payment gateways according to the platform and provider requirements.",
      },
    ],
    related: ["shopify-development", "wordpress-development", "web-development"],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    summary: "Software built around your workflow instead of bending your business to fit generic tools.",
    icon: Cpu,
    seo: {
      title: "Custom Software Development Company | Fyntric Tech",
      description:
        "Fyntric Tech develops custom software for businesses, startups and enterprises using scalable architecture and modern technologies.",
    },
    heading: "Custom Software Development Company",
    hero: "Build software around your workflow instead of changing your business to fit generic software.",
    capabilities: [
      "Business Management Software",
      "Workflow Applications",
      "Custom Dashboards",
      "Internal Tools",
      "API Integrations",
      "Third-Party Integrations",
      "Cloud Applications",
      "Scalable Architecture",
    ],
    cta: "Discuss Your Software Requirement",
    faqs: [
      {
        question: "Why choose custom software?",
        answer:
          "Custom software can be designed around your processes, roles, integrations and specific operational requirements.",
      },
    ],
    related: ["crm-development", "saas-development", "ai-automation"],
  },
  {
    slug: "crm-development",
    name: "CRM Development",
    summary: "CRMs shaped around your sales process, customer journey and operations.",
    icon: Users,
    seo: {
      title: "Custom CRM Development Company | CRM Software Development",
      description:
        "Fyntric Tech develops custom CRM software for sales, customer management, lead tracking, automation and analytics.",
    },
    heading: "Custom CRM Development Company",
    hero: "Build a CRM around your sales process, customer journey and business operations.",
    capabilities: [
      "Lead Management",
      "Customer Management",
      "Sales Pipeline",
      "Follow-up Management",
      "WhatsApp Integration",
      "Email Automation",
      "Task Management",
      "Sales Reports",
      "Analytics Dashboard",
      "Role-Based Access",
      "Workflow Automation",
    ],
    cta: "Build Your Custom CRM",
    faqs: [
      {
        question: "Can CRM software be customized?",
        answer: "Yes. Custom CRM platforms can be designed around specific sales, customer and operational workflows.",
      },
      {
        question: "Can CRM connect with other systems?",
        answer: "Yes. APIs and integrations can connect CRM platforms with supported third-party systems.",
      },
    ],
    related: ["custom-software-development", "ai-automation", "saas-development"],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    summary: "From MVP to multi-tenant platform, we turn software ideas into scalable SaaS products.",
    icon: Cloud,
    seo: {
      title: "SaaS Development Company | Custom SaaS Product Development",
      description:
        "Build scalable SaaS products with multi-tenant architecture, dashboards, subscriptions, APIs and cloud deployment.",
    },
    heading: "SaaS Development Company",
    hero: "Turn your software idea into a scalable SaaS product.",
    capabilities: [
      "SaaS MVP Development",
      "Custom SaaS Development",
      "Multi-Tenant Architecture",
      "Subscription Management",
      "Payment Integration",
      "Admin Dashboards",
      "API Development",
      "Cloud Deployment",
      "Third-Party Integrations",
    ],
    cta: "Discuss Your SaaS Idea",
    faqs: [
      {
        question: "Can you develop an MVP first?",
        answer: "Yes. A focused MVP can validate the core product before expanding into a larger SaaS platform.",
      },
    ],
    related: ["web-development", "custom-software-development", "ai-automation"],
  },
  {
    slug: "ai-automation",
    name: "AI Automation & AI Agents",
    summary: "Practical AI agents, chatbots and workflow automation that cut repetitive work.",
    icon: Bot,
    seo: {
      title: "AI Automation Company | AI Agents & Business Automation",
      description:
        "Automate business processes with AI agents, chatbots, RPA, workflow automation and intelligent systems from Fyntric Tech.",
    },
    heading: "AI Automation & AI Agent Development",
    hero: "Reduce repetitive work and improve operational efficiency with practical AI automation.",
    capabilities: [
      "AI Agents",
      "AI Chatbots",
      "WhatsApp Automation",
      "Lead Qualification",
      "Customer Support Automation",
      "RPA",
      "AI Data Analysis",
      "Automated Reports",
      "Workflow Automation",
      "CRM Automation",
      "Document Processing",
    ],
    cta: "Automate My Business",
    faqs: [
      {
        question: "What can AI automation do for a business?",
        answer:
          "AI automation can assist with repetitive communication, lead handling, document processing, reporting, customer support and workflow tasks.",
      },
      {
        question: "Can AI be integrated with existing software?",
        answer:
          "Where APIs or supported integrations are available, AI workflows can be connected to existing business systems.",
      },
    ],
    related: ["crm-development", "custom-software-development", "saas-development"],
  },
  {
    slug: "blockchain-development",
    name: "Blockchain Development",
    summary: "Web3 apps, smart contracts and blockchain integrations for real business needs.",
    icon: Blocks,
    seo: {
      title: "Blockchain Development Company | Web3 & Smart Contracts",
      description:
        "Fyntric Tech provides blockchain development services including Web3 applications, smart contracts, blockchain integration and decentralized applications.",
    },
    heading: "Blockchain Development Company",
    hero: "Build practical blockchain and Web3 solutions around real business or product requirements.",
    capabilities: [
      "Blockchain Application Development",
      "Smart Contract Development",
      "Web3 Development",
      "DApp Development",
      "Blockchain Integration",
      "Wallet Integration",
      "Tokenization Solutions",
      "Blockchain APIs",
    ],
    cta: "Discuss Your Blockchain Project",
    faqs: [
      {
        question: "What blockchain projects can you develop?",
        answer:
          "We can develop blockchain applications, Web3 interfaces, smart-contract-based solutions and integrations based on project requirements.",
      },
    ],
    related: ["custom-software-development", "web-development", "saas-development"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    summary: "SEO, Google and Meta Ads, and landing pages that attract qualified customers.",
    icon: Megaphone,
    seo: {
      title: "Digital Marketing Company | SEO, Google & Meta Ads | Fyntric Tech",
      description:
        "Grow your business with SEO, Google Ads, Meta Ads and performance marketing services from Fyntric Tech.",
    },
    heading: "Digital Marketing Services for Business Growth",
    hero: "Connect technology and performance marketing to attract qualified customers and grow your online presence.",
    capabilities: [
      "Search Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Landing Pages",
      "Lead Generation",
      "Social Media Marketing",
      "Performance Tracking",
      "Conversion Optimization",
    ],
    cta: "Discuss Your Marketing Goals",
    faqs: [
      {
        question: "Do you provide SEO and paid advertising?",
        answer:
          "Yes. Services can include SEO, Google Ads, Meta Ads, landing pages and performance-focused marketing depending on the business goal.",
      },
    ],
    related: ["web-development", "shopify-development", "ecommerce-development"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicePath(slug: string): string {
  return `/services/${slug}/`;
}
