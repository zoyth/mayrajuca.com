// ABOUTME: Dedicated page for the Revista História Oral interview article.
// ABOUTME: Displays article metadata, abstract, keywords, and links to the original publication.

import { type Locale, siteContent, t } from '@/config/content';

export const metadata = {
  title: 'Revista História Oral — Mayra Jucá',
  description: 'Entrevista com Steven High, fundador do COHDS na Concordia University',
};

const labels = {
  journal: { pt: 'Periódico', en: 'Journal', fr: 'Revue', es: 'Revista' },
  section: { pt: 'Seção', en: 'Section', fr: 'Section', es: 'Sección' },
  volume: { pt: 'Volume', en: 'Volume', fr: 'Volume', es: 'Volumen' },
  issue: { pt: 'Número', en: 'Issue', fr: 'Numéro', es: 'Número' },
  pages: { pt: 'Páginas', en: 'Pages', fr: 'Pages', es: 'Páginas' },
  published: { pt: 'Publicado em', en: 'Published', fr: 'Publié le', es: 'Publicado' },
  doi: { pt: 'DOI', en: 'DOI', fr: 'DOI', es: 'DOI' },
  issn: { pt: 'ISSN', en: 'ISSN', fr: 'ISSN', es: 'ISSN' },
  license: { pt: 'Licença', en: 'License', fr: 'Licence', es: 'Licencia' },
  keywords: { pt: 'Palavras-chave', en: 'Keywords', fr: 'Mots-clés', es: 'Palabras clave' },
  abstract: { pt: 'Resumo', en: 'Abstract', fr: 'Résumé', es: 'Resumen' },
  aboutInterviewee: { pt: 'Sobre o entrevistado', en: 'About the interviewee', fr: 'À propos de l\'interviewé', es: 'Sobre el entrevistado' },
  readOriginal: { pt: 'Ler na Revista História Oral', en: 'Read in Revista História Oral', fr: 'Lire dans Revista História Oral', es: 'Leer en Revista História Oral' },
  downloadPdf: { pt: 'Download PDF', en: 'Download PDF', fr: 'Télécharger PDF', es: 'Descargar PDF' },
  affiliation: { pt: 'Afiliação', en: 'Affiliation', fr: 'Affiliation', es: 'Afiliación' },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const article = siteContent.article;

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-wider text-text-muted mb-4">
            {article.journal} · v.{article.volume}, n.{article.issue} · {article.year}
          </p>
          <h1 className="font-heading font-black text-2xl sm:text-4xl leading-tight mb-4">
            {t(article.title, locale)}
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto my-6" />
          <p className="text-lg text-text-light leading-relaxed">
            {t(article.subtitle, locale)}
          </p>
          <div className="mt-8">
            <p className="font-medium">{article.author}</p>
            <p className="text-sm text-text-muted">{article.authorAffiliation}</p>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-6">
            {t(labels.abstract, locale)}
          </h2>
          <p className="text-text-light leading-relaxed text-lg">
            {t(article.abstract, locale)}
          </p>
        </div>
      </section>

      {/* About the interviewee */}
      <section className="py-16 sm:py-20 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-6">
            {t(labels.aboutInterviewee, locale)}
          </h2>
          <p className="text-text-light leading-relaxed text-lg">
            {t(article.aboutInterviewee, locale)}
          </p>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-6">
            {t(labels.keywords, locale)}
          </h2>
          <div className="flex flex-wrap gap-2">
            {article.keywords[locale].map((keyword) => (
              <span
                key={keyword}
                className="bg-surface text-text-light text-sm px-4 py-2 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Publication details + links */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              [labels.journal, article.journal],
              [labels.section, t(article.section, locale)],
              [labels.volume, article.volume],
              [labels.issue, article.issue],
              [labels.pages, article.pages],
              [labels.published, t(article.publishedDate, locale)],
              [labels.issn, article.issn],
              [labels.license, article.license],
            ].map(([label, value]) => (
              <div key={typeof label === 'string' ? label : t(label as Record<string, string>, locale)}>
                <p className="text-sm font-heading font-bold uppercase tracking-wider text-text-muted mb-1">
                  {typeof label === 'string' ? label : t(label as Record<string, string>, locale)}
                </p>
                <p className="text-text">{value as string}</p>
              </div>
            ))}
            <div>
              <p className="text-sm font-heading font-bold uppercase tracking-wider text-text-muted mb-1">
                {t(labels.doi, locale)}
              </p>
              <a
                href={`https://doi.org/${article.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                {article.doi}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://doi.org/${article.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              {t(labels.readOriginal, locale)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
