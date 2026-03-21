// ABOUTME: Client-side mobile navigation toggle.
// ABOUTME: Hamburger menu for small screens with slide-down nav links.

'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2"
        aria-label="Menu"
        aria-expanded={open}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-text-light hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
