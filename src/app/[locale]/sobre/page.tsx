// ABOUTME: About page with full bio, education, languages, and research affiliations.
// ABOUTME: Detailed profile of Mayra Jucá and Plural MJ.

import Image from 'next/image';
import { type Locale, siteContent, t } from '@/config/content';

export const metadata = {
  title: 'Sobre — Mayra Jucá',
};

export default async function SobrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;

  return (
    <>
      {/* Hero */}
      <section className="bg-accent py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
            {t(siteContent.nav.sobre, locale)}
          </h1>
          <div className="w-24 h-0.5 bg-text mx-auto mb-6" />
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            {t(siteContent.about.company, locale)}
          </p>
        </div>
      </section>

      {/* Plural MJ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="font-heading font-bold text-2xl tracking-wide">PLURAL</span>
            <span className="inline-block bg-primary text-white font-heading font-bold text-2xl px-2 ml-1">MJ</span>
          </div>
          <p className="text-lg leading-relaxed text-text-light">
            {t(siteContent.about.companyExtended, locale)}
          </p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-16 sm:py-24 bg-surface">
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
      <section className="py-16 sm:py-24">
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
    </>
  );
}
