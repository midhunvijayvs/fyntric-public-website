import Image from "next/image";
import Link from "next/link";
import logoColor from "@/assets/brand/logo-color.png";
import logoLight from "@/assets/brand/logo-light.png";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/** Brand logo linking home: full-colour version in light theme, white-text version in dark theme. */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  const alt = `${siteConfig.legalName} logo`;
  return (
    <Link href="/" aria-label={`${siteConfig.legalName} home`} className={cn("inline-flex shrink-0", className)}>
      <Image src={logoColor} alt={alt} priority={priority} className="h-9 w-auto sm:h-10 dark:hidden" sizes="220px" />
      <Image src={logoLight} alt={alt} priority={priority} className="hidden h-9 w-auto sm:h-10 dark:block" sizes="220px" />
    </Link>
  );
}
