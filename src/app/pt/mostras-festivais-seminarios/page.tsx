// ABOUTME: Mostras, Festivais e Seminários portfolio page.
// ABOUTME: Displays conference and festival appearances timeline.

import { siteContent } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Mostras, Festivais e Seminários — Mayra Jucá',
  description: siteContent.sections.mostras.subtitle.pt,
};

export default function MostrasPage() {
  const { title, subtitle, items } = siteContent.sections.mostras;
  return (
    <PortfolioSection
      title={title.pt}
      subtitle={subtitle.pt}
      items={items}
    />
  );
}
