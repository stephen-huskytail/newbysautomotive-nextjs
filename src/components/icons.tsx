// Lightweight inline icons (no icon library → smaller bundle, faster LCP).
type P = { className?: string; size?: number };

export const PhoneIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.58 3.6a1 1 0 01-.25 1l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
);

export const PinIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" fill="currentColor" />
  </svg>
);

export const ClockIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.59l3.3 3.3-1.42 1.42L11 13V7h2v5.59z" fill="currentColor" />
  </svg>
);

export const CheckIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5L9 16.2z" fill="currentColor" />
  </svg>
);

export const ArrowIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockArrow = ArrowIcon;

// ── Brand glyphs (single-color, inherit currentColor) ───────────────────────
export const FacebookIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.22-1.36 1.38-1.36H16V5.5a19 19 0 00-2.1-.11c-2.08 0-3.5 1.27-3.5 3.6v2.01H8v2.8h2.4V21h3.1z" />
  </svg>
);

export const GoogleIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 11v2.8h3.95c-.16 1-1.15 2.95-3.95 2.95A4.25 4.25 0 1112 7.75c1.2 0 2.02.5 2.48.94l1.9-1.83C15.18 5.7 13.74 5 12 5a7 7 0 100 14c4.04 0 6.7-2.84 6.7-6.84 0-.46-.05-.81-.12-1.16H12z" />
  </svg>
);

export const YelpIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.2 3.5v8.1c0 .5-.6.8-1 .5L5.9 9.4c-.5-.3-.6-1-.2-1.5a8.8 8.8 0 014.3-3.1c.6-.2 1.2.2 1.2.7zM10.5 13.9c.4-.3 1 0 1 .5v3.4c0 .6-.6 1-1.2.7a8.7 8.7 0 01-2.6-1.9c-.4-.4-.3-1.1.2-1.4l2.6-1.3zM13.4 13.7l3.2.8c.6.1.8.9.4 1.4a8.7 8.7 0 01-2.4 2.1c-.5.3-1.2-.1-1.2-.7v-3c0-.5.5-.8 1-.6zM13.4 11.6c-.5.1-1-.3-.9-.8l.8-3.9c.1-.6.8-.9 1.3-.5a8.7 8.7 0 012.4 3c.3.5 0 1.2-.6 1.3l-3 .9zM12.2 12.6c.5-.1.5.6.1.7l-.2.05c-.4.1-.6-.5-.2-.7l.3-.1z" />
  </svg>
);

export const StarBadgeIcon = ({ className = "", size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 3l2.6 5.27 5.82.85-4.21 4.1.99 5.79L12 16.27 6.8 19l.99-5.79-4.21-4.1 5.82-.85L12 3z" />
  </svg>
);
