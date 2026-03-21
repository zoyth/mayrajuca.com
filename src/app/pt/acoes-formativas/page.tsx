// ABOUTME: Ações Formativas portfolio page showing teaching and training work.
// ABOUTME: Displays timeline of educational and training initiatives.

import { siteContent } from '@/config/content';
import { PortfolioSection } from '@/components/portfolio-section';

export const metadata = {
  title: 'Ações Formativas — Mayra Jucá',
  description: siteContent.sections.formativas.subtitle.pt,
};

export default function FormativasPage() {
  const { title, subtitle, items } = siteContent.sections.formativas;
  return (
    <PortfolioSection
      title={title.pt}
      subtitle={subtitle.pt}
      items={items}
    />
  );
}
