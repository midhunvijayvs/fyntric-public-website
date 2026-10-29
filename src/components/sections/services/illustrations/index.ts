import type { ComponentType } from "react";
import { AiScene } from "./AiScene";
import { BlockchainScene } from "./BlockchainScene";
import { CrmScene } from "./CrmScene";
import { CustomSoftwareScene } from "./CustomSoftwareScene";
import { EcommerceScene } from "./EcommerceScene";
import { MarketingScene } from "./MarketingScene";
import { MobileScene } from "./MobileScene";
import { SaasScene } from "./SaasScene";
import { ShopifyScene } from "./ShopifyScene";
import { WebScene } from "./WebScene";
import { WordPressScene } from "./WordPressScene";

export { Stage } from "./Stage";

type ServiceIllustration = {
  Scene: ComponentType;
  /** Backdrop gradient for the illustration stage. */
  gradient: string;
};

/** Animated illustration for each service, keyed by service slug. */
export const serviceIllustrations: Record<string, ServiceIllustration> = {
  "web-development": {
    Scene: WebScene,
    gradient: "from-brand-600 via-brand-400 to-accent-cyan",
  },
  "mobile-app-development": {
    Scene: MobileScene,
    gradient: "from-accent-violet via-indigo-500 to-brand-500",
  },
  "shopify-development": {
    Scene: ShopifyScene,
    gradient: "from-emerald-500 via-teal-400 to-cyan-400",
  },
  "wordpress-development": {
    Scene: WordPressScene,
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
  },
  "ecommerce-development": {
    Scene: EcommerceScene,
    gradient: "from-orange-400 via-rose-400 to-pink-500",
  },
  "custom-software-development": {
    Scene: CustomSoftwareScene,
    gradient: "from-indigo-600 via-brand-500 to-accent-cyan",
  },
  "crm-development": {
    Scene: CrmScene,
    gradient: "from-brand-500 via-indigo-500 to-accent-violet",
  },
  "saas-development": {
    Scene: SaasScene,
    gradient: "from-cyan-400 via-brand-400 to-brand-600",
  },
  "ai-automation": {
    Scene: AiScene,
    gradient: "from-accent-violet via-purple-500 to-fuchsia-500",
  },
  "blockchain-development": {
    Scene: BlockchainScene,
    gradient: "from-teal-500 via-cyan-600 to-indigo-600",
  },
  "digital-marketing": {
    Scene: MarketingScene,
    gradient: "from-pink-500 via-rose-400 to-orange-400",
  },
};
