// ABOUTME: Audiovisual portfolio page showing films and documentaries.
// ABOUTME: Displays timeline of audiovisual work from 1994 to 2021.

import { siteContent } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Audiovisual — Mayra Jucá',
  description: siteContent.sections.audiovisual.subtitle.pt,
};

export default function AudiovisualPage() {
  const { title, subtitle, items } = siteContent.sections.audiovisual;
  return (
    <PortfolioSection
      title={title.pt}
      subtitle={subtitle.pt}
      items={items}
    />
  );
}
