// ABOUTME: Career timeline page showing professional history.
// ABOUTME: Displays career positions from Plural MJ back to early work.

import { type Locale, siteContent, t } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Trajetória — Mayra Jucá',
};

export default async function TrajetoriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const { title, subtitle, items } = siteContent.sections.trajetoria;

  return (
    <PortfolioSection
      title={t(title, locale)}
      subtitle={t(subtitle, locale)}
      items={items}
      locale={locale}
    />
  );
}
