// ABOUTME: Locale-aware layout with header and footer.
// ABOUTME: Wraps all pages with consistent navigation and branding in PT or EN.

import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';
import { LanguageSwitcher } from '@/components/language-switcher';
import { type Locale, locales, siteContent, t } from '@/config/content';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function getNavLinks(locale: Locale) {
  return [
    { href: `/${locale}`, label: t(siteContent.nav.home, locale) },
    { href: `/${locale}/editorial`, label: t(siteContent.nav.editorial, locale) },
    { href: `/${locale}/exposicoes-e-eventos`, label: t(siteContent.nav.exposicoes, locale) },
    { href: `/${locale}/audiovisual`, label: t(siteContent.nav.audiovisual, locale) },
    { href: `/${locale}/mostras-festivais-seminarios`, label: t(siteContent.nav.mostras, locale) },
    { href: `/${locale}/acoes-formativas`, label: t(siteContent.nav.formativas, locale) },
    { href: `/${locale}/contato`, label: t(siteContent.nav.contato, locale) },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'pt') as Locale;
  const navLinks = getNavLinks(locale);

  return (
    <html lang={locale === 'pt' ? 'pt-BR' : 'en'}>
      <body className="flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href={`/${locale}`} className="font-heading font-bold text-xl text-primary">
                Mayra Jucá
              </Link>
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <LanguageSwitcher locale={locale} />
              </nav>
              <div className="lg:hidden flex items-center gap-3">
                <LanguageSwitcher locale={locale} />
                <MobileNav links={navLinks} />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Plural MJ</h3>
                <p className="text-sm opacity-80">
                  {t(siteContent.footer.tagline, locale)}
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">
                  {t(siteContent.footer.links, locale)}
                </h3>
                <ul className="space-y-2">
                  {navLinks.slice(1).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">
                  {t(siteContent.footer.contact, locale)}
                </h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <a href="mailto:mayrajuca@gmail.com" className="hover:opacity-100">
                      mayrajuca@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@mayrajuca_Plural"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-100"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/Mayra_Juca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-100"
                    >
                      @Mayra_Juca
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
              © {new Date().getFullYear()} {t(siteContent.footer.copyright, locale)}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
