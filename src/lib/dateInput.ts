// Ref callback for <input type="date"> — blocks past dates. Set client-side
// only (never in render): pages are ISR-cached, so a server-rendered min
// would go stale and cause hydration mismatches.
export function setMinToday(el: HTMLInputElement | null) {
  if (el) el.min = new Date().toISOString().slice(0, 10);
}
