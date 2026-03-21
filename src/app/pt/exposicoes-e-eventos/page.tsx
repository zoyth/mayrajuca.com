// ABOUTME: Exposições e Eventos portfolio page.
// ABOUTME: Displays exhibitions and events timeline.

import { siteContent } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Exposições e Eventos — Mayra Jucá',
  description: siteContent.sections.exposicoes.subtitle.pt,
};

export default function ExposicoesPage() {
  const { title, subtitle, items } = siteContent.sections.exposicoes;
  return (
    <PortfolioSection
      title={title.pt}
      subtitle={subtitle.pt}
      items={items}
    />
  );
}
