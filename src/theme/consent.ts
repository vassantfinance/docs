/**
 * Shared consent helpers for the `va_consent` cookie.
 *
 * The cookie is scoped to the parent domain (`.vassantfinance.com`) so the
 * decision is shared across the marketing site and this docs subdomain — a
 * visitor only answers the banner once. The marketing site must read/write
 * the SAME cookie name and values ('granted' | 'denied') for this to work.
 */
export type ConsentValue = 'granted' | 'denied';

const COOKIE = 'va_consent';
const MAX_AGE = 60 * 60 * 24 * 180; // 180 days
const PARENT_DOMAIN = 'vassantfinance.com';

export function readConsent(): ConsentValue | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)va_consent=(granted|denied)(?:;|$)/);
  return match ? (match[1] as ConsentValue) : null;
}

export function writeConsent(value: ConsentValue): void {
  const {hostname, protocol} = window.location;
  // Only set the shared parent-domain cookie on real vassantfinance.com hosts;
  // on localhost the Domain attribute would be rejected, so omit it in dev.
  const onProd = hostname === PARENT_DOMAIN || hostname.endsWith('.' + PARENT_DOMAIN);
  const domain = onProd ? `; Domain=.${PARENT_DOMAIN}` : '';
  const secure = protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${domain}${secure}`;
}

/** Tell gtag about a consent change (Consent Mode v2). */
export function updateGtagConsent(value: ConsentValue): void {
  const gtag = (window as unknown as {gtag?: (...args: unknown[]) => void}).gtag;
  gtag?.('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}
