// ABOUTME: Teaching and training page.
// ABOUTME: Displays teaching roles, workshops, and educational initiatives.

import { type Locale, siteContent, t } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Formação — Mayra Jucá',
};

export default async function FormacaoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const { title, subtitle, items } = siteContent.sections.formacao;

  return (
    <PortfolioSection
      title={t(title, locale)}
      subtitle={t(subtitle, locale)}
      items={items}
      locale={locale}
    />
  );
}
