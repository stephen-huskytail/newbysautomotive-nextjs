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
