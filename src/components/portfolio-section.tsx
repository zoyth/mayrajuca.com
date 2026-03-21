// ABOUTME: Reusable portfolio timeline section component.
// ABOUTME: Displays a list of portfolio items with year badges, matching the PDF layout.

import type { Locale } from '@/config/content';
import { t } from '@/config/content';

interface PortfolioItem {
  year: string;
  title: Record<string, string>;
  description: Record<string, string>;
  image?: string;
}

interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  locale: Locale;
}

export function PortfolioSection({
  title,
  subtitle,
  items,
  locale,
}: PortfolioSectionProps) {
  return (
    <div>
      <section className="bg-accent py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
            {title}
          </h1>
          <div className="w-24 h-0.5 bg-text mx-auto mb-6" />
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {items.map((item, index) => (
              <article
                key={index}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8"
              >
                <div className="flex-shrink-0 flex items-start gap-3">
                  <span className="inline-block bg-primary text-white font-heading font-bold text-sm uppercase px-4 py-2 tracking-wide">
                    {title}
                  </span>
                  <span className="inline-block bg-white border-2 border-primary text-primary font-heading font-bold text-sm px-4 py-2">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-xl mb-2">
                    {t(item.title, locale)}
                  </h2>
                  <p className="text-text-light leading-relaxed">
                    {t(item.description, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
