// ABOUTME: Dedicated page for the book "O Super-8 no AI-5".
// ABOUTME: Displays book details, endorsements, launch events, and purchase info.

import Image from 'next/image';
import { type Locale, siteContent, t } from '@/config/content';

export const metadata = {
  title: 'O Super-8 no AI-5 — Mayra Jucá',
  description: 'O Super-8 no AI-5: memórias de cinema e juventude na década de 1970',
};

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const book = siteContent.book;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm mb-4 opacity-80">
            {book.author}
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-6xl mb-4">
            {book.title}
          </h1>
          <div className="w-24 h-0.5 bg-white/50 mx-auto my-6" />
          <p className="text-xl sm:text-2xl font-heading opacity-90">
            {t(book.subtitle, locale)}
          </p>
          <p className="mt-6 text-sm uppercase tracking-wider opacity-60">
            {book.publisher}
          </p>
        </div>
      </section>

      {/* Book cover + description */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/super8-ai5-capa.jpg"
                alt="O Super-8 no AI-5 — capa do livro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-text-light mb-8">
                {t(book.description, locale)}
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-text-light leading-relaxed">
                {t(book.quote, locale)}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Launch events */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-center mb-12">
            {t(book.launchesTitle, locale)}
          </h2>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-md mb-10">
            <Image
              src="/images/super8-bienal-rio.png"
              alt="O Super-8 no AI-5 — Bienal do Livro Rio 2025"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <div className="space-y-6">
            {book.launches.map((launch, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start bg-white p-6 rounded-lg shadow-sm"
              >
                <span className="flex-shrink-0 bg-primary text-white font-heading font-bold text-sm px-4 py-2">
                  {t(launch.date, locale)}
                </span>
                <p className="text-text-light">
                  {t(launch.location, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-center mb-12">
            {t(book.endorsementsTitle, locale)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {book.endorsements.map((endorsement) => (
              <div
                key={endorsement.name}
                className="bg-accent p-6 rounded-lg text-center"
              >
                <p className="font-heading font-bold text-lg">
                  {endorsement.name}
                </p>
                <p className="text-text-muted text-sm mt-1">
                  {endorsement.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press coverage */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-center mb-12">
            {t(book.pressTitle, locale)}
          </h2>
          <div className="space-y-4">
            {book.press.map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <span className="flex-shrink-0 bg-primary text-white font-heading font-bold text-xs uppercase px-3 py-1.5 tracking-wide rounded">
                  {item.outlet}
                </span>
                <div className="flex-1">
                  <p className="text-text-light text-sm leading-relaxed">
                    {t(item.title, locale)}
                  </p>
                  {'author' in item && item.author && (
                    <p className="text-text-muted text-xs mt-1">{item.author}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film stills gallery */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/pira-sergio-peo.jpg"
                alt="Pira, filme de Sérgio Péo"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/super8-film-still.png"
                alt="Still de filme Super-8"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/super8-graffiti.png"
                alt="Arte urbana dos anos 1970"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purchase info */}
      <section className="py-16 sm:py-24 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight mb-8">
            {t(book.purchaseTitle, locale)}
          </h2>
          <div className="space-y-4">
            <p className="text-text-light text-lg">
              {t(book.purchase.store, locale)}
            </p>
            <p>
              <a
                href={`mailto:${book.purchase.email}`}
                className="text-primary font-medium text-lg underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {book.purchase.email}
              </a>
            </p>
          </div>
          <p className="mt-8 text-sm text-text-muted">
            {t(book.publisherNote, locale)}
          </p>
        </div>
      </section>
    </>
  );
}
