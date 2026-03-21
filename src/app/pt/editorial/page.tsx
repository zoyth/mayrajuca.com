// ABOUTME: Editorial portfolio page showing books and publications.
// ABOUTME: Displays timeline of editorial work from 2006 to 2025.

import { siteContent } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Editorial — Mayra Jucá',
  description: siteContent.sections.editorial.subtitle.pt,
};

export default function EditorialPage() {
  const { title, subtitle, items } = siteContent.sections.editorial;
  return (
    <PortfolioSection
      title={title.pt}
      subtitle={subtitle.pt}
      items={items}
    />
  );
}
