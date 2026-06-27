import { socialLinks } from "@/lib/site";
import { FacebookIcon, GoogleIcon, YelpIcon, StarBadgeIcon } from "./icons";

const ICONS = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  yelp: YelpIcon,
  surecritic: StarBadgeIcon,
} as const;

export function SocialLinks({
  className = "",
  size = 18,
  variant = "solid",
  buttonClassName = "h-9 w-9",
}: {
  className?: string;
  size?: number;
  variant?: "solid" | "ghost";
  buttonClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Newby's Automotive on ${s.label}`}
            title={s.label}
            className={`inline-flex items-center justify-center rounded-md transition ${buttonClassName} ${
              variant === "solid"
                ? "bg-brand-blue text-white hover:bg-brand-red"
                : "bg-white/10 text-white hover:bg-brand-red"
            }`}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
