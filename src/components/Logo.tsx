import Link from "next/link";

// Crisp CSS wordmark (sharper + faster than the low-res source logo image).
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const sub = variant === "light" ? "text-white/80" : "text-ink/70";
  return (
    <Link
      href="/"
      aria-label="Newby's Automotive Center — home"
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span className="font-display text-2xl font-extrabold tracking-tight sm:text-[1.7rem]">
        <span className="text-brand-red">NEWBY&rsquo;S</span>
      </span>
      <span className={`text-[0.62rem] font-bold uppercase tracking-[0.22em] ${sub}`}>
        Automotive Center
      </span>
    </Link>
  );
}
