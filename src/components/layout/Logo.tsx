import Image from "next/image";
import Link from "next/link";
import logoLight from "@/assets/brand/logo-light.png";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/** Brand logo (light variant for the dark theme), linking home. */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label={`${siteConfig.legalName} home`} className={cn("inline-flex shrink-0", className)}>
      <Image
        src={logoLight}
        alt={`${siteConfig.legalName} logo`}
        priority={priority}
        className="h-9 w-auto sm:h-10"
        sizes="220px"
      />
    </Link>
  );
}
