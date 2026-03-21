// ABOUTME: Contact page with all contact information.
// ABOUTME: Displays email, social media, phone, and website links.

import { type Locale, siteContent, t } from '@/config/content';

export const metadata = {
  title: 'Contato — Mayra Jucá',
};

const phoneLabel = { pt: 'Celular', en: 'Phone' };

const contactItems = [
  {
    label: { pt: 'Website', en: 'Website' },
    value: siteContent.contact.website,
    href: `https://${siteContent.contact.website}`,
  },
  {
    label: { pt: 'E-mail', en: 'Email' },
    value: siteContent.contact.email,
    href: `mailto:${siteContent.contact.email}`,
  },
  {
    label: { pt: 'YouTube', en: 'YouTube' },
    value: siteContent.contact.youtube.replace('https://www.youtube.com/', ''),
    href: siteContent.contact.youtube,
    external: true,
  },
  {
    label: { pt: 'Instagram', en: 'Instagram' },
    value: siteContent.contact.instagram,
    href: `https://www.instagram.com/${siteContent.contact.instagram.replace('@', '')}`,
    external: true,
  },
  {
    label: phoneLabel,
    value: siteContent.contact.phone,
    href: `tel:+55${siteContent.contact.phone.replace(/\s/g, '')}`,
  },
];

export default async function ContatoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;

  return (
    <section className="bg-primary text-white min-h-[80vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
        <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight mb-4">
          {t(siteContent.contact.title, locale)}
        </h1>
        <div className="w-16 h-0.5 bg-white/50 mx-auto mb-12" />

        <div className="space-y-8">
          {contactItems.map((item) => (
            <div key={item.value}>
              <p className="font-heading font-bold text-sm uppercase tracking-wider opacity-80 mb-1">
                {t(item.label, locale)}
              </p>
              <a
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-lg hover:opacity-80 transition-opacity underline underline-offset-4"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
