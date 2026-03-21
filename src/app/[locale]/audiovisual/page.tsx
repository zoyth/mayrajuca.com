// ABOUTME: Audiovisual portfolio page showing films and documentaries.
// ABOUTME: Displays timeline of audiovisual work from 1994 to 2021.

import { type Locale, siteContent, t } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Audiovisual — Mayra Jucá',
};

export default async function AudiovisualPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const { title, subtitle, items } = siteContent.sections.audiovisual;

  return (
    <PortfolioSection
      title={t(title, locale)}
      subtitle={t(subtitle, locale)}
      items={items}
      locale={locale}
    />
  );
}
