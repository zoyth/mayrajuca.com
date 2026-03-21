// ABOUTME: Unified events page combining exhibitions, conferences, and festivals.
// ABOUTME: Displays all event participations in chronological order.

import { type Locale, siteContent, t } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Eventos — Mayra Jucá',
};

export default async function EventosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const { title, subtitle, items } = siteContent.sections.eventos;

  return (
    <PortfolioSection
      title={t(title, locale)}
      subtitle={t(subtitle, locale)}
      items={items}
      locale={locale}
    />
  );
}
