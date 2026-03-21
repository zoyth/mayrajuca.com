// ABOUTME: Mostras, Festivais e Seminários portfolio page.
// ABOUTME: Displays conference and festival appearances timeline.

import { type Locale, siteContent, t } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Mostras, Festivais e Seminários — Mayra Jucá',
};

export default async function MostrasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const { title, subtitle, items } = siteContent.sections.mostras;

  return (
    <PortfolioSection
      title={t(title, locale)}
      subtitle={t(subtitle, locale)}
      items={items}
      locale={locale}
    />
  );
}
