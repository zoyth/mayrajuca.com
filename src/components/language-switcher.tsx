// ABOUTME: Client-side language selector dropdown for PT, EN, FR, ES.
// ABOUTME: Swaps the locale segment in the current URL path.

'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale, locales } from '@/config/content';

const localeLabels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  fr: 'FR',
  es: 'ES',
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-medium border border-current px-2 py-1 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center gap-1"
        aria-expanded={open}
      >
        {localeLabels[locale]}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-16">
          {locales.filter((l) => l !== locale).map((l) => (
            <Link
              key={l}
              href={pathname.replace(`/${locale}`, `/${l}`)}
              onClick={() => setOpen(false)}
              className="block px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-surface transition-colors text-center"
              lang={l}
            >
              {localeLabels[l]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
