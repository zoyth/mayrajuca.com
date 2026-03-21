// ABOUTME: Client-side language toggle between PT and EN.
// ABOUTME: Swaps the locale segment in the current URL path.

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/config/content';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const otherLocale: Locale = locale === 'pt' ? 'en' : 'pt';
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={otherPath}
      className="text-sm font-medium border border-current px-2 py-1 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors"
      lang={otherLocale}
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
