// ABOUTME: Homepage with hero section, about Plural MJ, and about Mayra Jucá.
// ABOUTME: Entry point for the portfolio site, locale-aware.

import Link from 'next/link';
import Image from 'next/image';
import { type Locale, siteContent, t } from '@/config/content';

const heroLabel = { pt: 'Portfólio', en: 'Portfolio' };

function getSections(locale: Locale) {
  return [
    {
      title: t(siteContent.nav.editorial, locale),
      description: t(siteContent.sections.editorial.subtitle, locale),
      href: `/${locale}/editorial`,
    },
    {
      title: t(siteContent.nav.exposicoes, locale),
      description: t(siteContent.sections.exposicoes.subtitle, locale),
      href: `/${locale}/exposicoes-e-eventos`,
    },
    {
      title: t(siteContent.nav.audiovisual, locale),
      description: t(siteContent.sections.audiovisual.subtitle, locale),
      href: `/${locale}/audiovisual`,
    },
    {
      title: t(siteContent.nav.mostras, locale),
      description: t(siteContent.sections.mostras.subtitle, locale),
      href: `/${locale}/mostras-festivais-seminarios`,
    },
    {
      title: t(siteContent.nav.formativas, locale),
      description: t(siteContent.sections.formativas.subtitle, locale),
      href: `/${locale}/acoes-formativas`,
    },
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
      <section className="bg-primary text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.3em] text-sm mb-6 opacity-80">
            {t(heroLabel, locale)}
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl mb-4">
            Plural MJ LTDA
          </h1>
          <div className="w-24 h-0.5 bg-white/50 mx-auto my-6" />
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl">
            Mayra Jucá
          </h2>
        </div>
      </section>

      {/* About Plural MJ */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="font-heading font-bold text-2xl tracking-wide">
              PLURAL
            </span>
            <span className="inline-block bg-primary text-white font-heading font-bold text-2xl px-2 ml-1">
              MJ
            </span>
          </div>
          <p className="text-lg leading-relaxed text-text-light mb-6">
            {t(siteContent.about.company, locale)}
          </p>
          <p className="text-lg leading-relaxed text-text-light">
            {t(siteContent.about.companyExtended, locale)}
          </p>
        </div>
      </section>

      {/* About Mayra */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/mayra-juca.jpg"
                alt="Mayra Jucá"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-text-light mb-6">
                {t(siteContent.about.bio, locale)}
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                {t(siteContent.about.bioExtended, locale)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education + Languages */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-6">
                {t(siteContent.about.educationTitle, locale)}
              </h2>
              <div className="space-y-6">
                {siteContent.about.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-heading font-bold">
                      {t(edu.degree, locale)}
                    </p>
                    <p className="text-text-light text-sm">
                      {typeof edu.institution === 'string' ? edu.institution : t(edu.institution, locale)} · {edu.year}
                    </p>
                    {'thesis' in edu && edu.thesis && (
                      <p className="text-text-muted text-sm italic mt-1">
                        {t(edu.thesis, locale)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-6">
                {t(siteContent.about.languagesTitle, locale)}
              </h2>
              <div className="space-y-3">
                {siteContent.about.languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <span className="font-medium">{t(lang.lang, locale)}</span>
                    <span className="text-text-muted text-sm">{t(lang.level, locale)}</span>
                  </div>
                ))}
              </div>
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
