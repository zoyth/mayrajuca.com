// ABOUTME: Landing page with hero, featured project, brief intro, and section navigation.
// ABOUTME: Designed to hook visitors and direct them deeper into the portfolio.

import Link from 'next/link';
import Image from 'next/image';
import { type Locale, siteContent, t } from '@/config/content';

const heroRole = { pt: 'Jornalista, cineasta e pesquisadora', en: 'Journalist, filmmaker and researcher' };
const heroTagline = {
  pt: 'Há mais de 30 anos usando a história oral e o audiovisual a serviço da memória, da cultura e das causas sociais.',
  en: 'For over 30 years, using oral history and audiovisual media in service of memory, culture and social causes.',
};
const heroCta = { pt: 'Conheça o trabalho →', en: 'Explore the work →' };
const featuredCta = { pt: 'Conheça o livro →', en: 'Discover the book →' };
const aboutCta = { pt: 'Conheça Mayra →', en: 'About Mayra →' };

function getSections(locale: Locale) {
  return [
    { title: t(siteContent.nav.editorial, locale), description: t(siteContent.sections.editorial.subtitle, locale), href: `/${locale}/editorial` },
    { title: t(siteContent.nav.audiovisual, locale), description: t(siteContent.sections.audiovisual.subtitle, locale), href: `/${locale}/audiovisual` },
    { title: t(siteContent.nav.eventos, locale), description: t(siteContent.sections.eventos.subtitle, locale), href: `/${locale}/eventos` },
    { title: t(siteContent.nav.formacao, locale), description: t(siteContent.sections.formacao.subtitle, locale), href: `/${locale}/formacao` },
    { title: t(siteContent.nav.trajetoria, locale), description: t(siteContent.sections.trajetoria.subtitle, locale), href: `/${locale}/trajetoria` },
  ];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const sections = getSections(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center">
        <Image
          src="/images/mayra-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
              Mayra Jucá
            </h1>
            <p className="font-heading text-lg sm:text-xl text-white/90 mb-6">
              {t(heroRole, locale)}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t(heroTagline, locale)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/sobre`}
                className="inline-block bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                {t(aboutCta, locale)}
              </Link>
              <Link
                href={`/${locale}/editorial`}
                className="inline-block border-2 border-white text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-white/10 transition-colors"
              >
                {t(heroCta, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-heading font-bold uppercase tracking-wider text-primary mb-8 text-center">
            {t(siteContent.featured.label, locale)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Link href={`/${locale}/o-super-8-no-ai-5`} className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                <Image
                  src="/images/super8-books.jpg"
                  alt="O Super-8 no AI-5 — livro"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </Link>
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-2">
                {siteContent.book.title}
              </h2>
              <p className="text-text-muted text-lg mb-6">
                {t(siteContent.book.subtitle, locale)}
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                {t(siteContent.book.description, locale)}
              </p>
              <p className="text-sm text-text-muted mb-6">
                {siteContent.book.publisher} · 2025
              </p>
              <Link
                href={`/${locale}/o-super-8-no-ai-5`}
                className="inline-block bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                {t(featuredCta, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden md:col-span-1">
              <Image
                src="/images/mayra-juca.webp"
                alt="Mayra Jucá"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-text-light mb-6">
                {t(siteContent.about.company, locale)}
              </p>
              <Link
                href={`/${locale}/sobre`}
                className="inline-block text-primary font-medium hover:opacity-80 transition-opacity"
              >
                {t(aboutCta, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-16 sm:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-center uppercase tracking-tight mb-12">
            {t(siteContent.areasTitle, locale)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {section.description}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-medium">
                  {t(siteContent.seeMore, locale)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
