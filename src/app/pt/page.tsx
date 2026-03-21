// ABOUTME: Homepage with hero section, about Plural MJ, and about Mayra Jucá.
// ABOUTME: Entry point for the portfolio site.

import Link from 'next/link';
import { siteContent } from '@/config/content';

const sections = [
  {
    title: 'Editorial',
    description: '+20 anos de experiência na coordenação de projetos de livros de memórias, biografias e livros de autoria coletiva.',
    href: '/pt/editorial',
  },
  {
    title: 'Exposições e Eventos',
    description: '+20 anos atuando na concepção de projetos e eventos audiovisuais, culturais e de pesquisa.',
    href: '/pt/exposicoes-e-eventos',
  },
  {
    title: 'Audiovisual',
    description: '+30 anos de carreira como produtora e pesquisadora de audiovisual, roteirista e diretora.',
    href: '/pt/audiovisual',
  },
  {
    title: 'Mostras e Seminários',
    description: 'Participações como apresentadora, comentadora, mediadora e palestrante em dezenas de eventos.',
    href: '/pt/mostras-festivais-seminarios',
  },
  {
    title: 'Ações Formativas',
    description: '+20 anos de atuação em projetos de cursos e oficinas de audiovisual.',
    href: '/pt/acoes-formativas',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.3em] text-sm mb-6 opacity-80">
            Portfólio
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl mb-4">
            Plural MJ LTDA
          </h1>
          <div className="w-24 h-0.5 bg-white/50 mx-auto my-6" />
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl">
            Mayra Jucá
          </h2>
        </div>
      </section>

      {/* About Plural MJ */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="font-heading font-bold text-2xl tracking-wide">
              PLURAL
            </span>
            <span className="inline-block bg-primary text-white font-heading font-bold text-2xl px-2 ml-1">
              MJ
            </span>
          </div>
          <p className="text-lg leading-relaxed text-text-light mb-6">
            {siteContent.about.company.pt}
          </p>
          <p className="text-lg leading-relaxed text-text-light">
            À frente da empresa está a jornalista, cineasta e pesquisadora Mayra Jucá, cuja carreira no terceiro setor e no campo da comunicação e cultura, com foco em audiovisual e memória, completou 30 anos em 2024.
          </p>
        </div>
      </section>

      {/* About Mayra */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] bg-accent rounded-lg flex items-center justify-center text-text-muted">
              <span className="text-sm">Foto de Mayra Jucá</span>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-text-light mb-6">
                {siteContent.about.bio.pt}
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                {siteContent.about.bioExtended.pt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-16 sm:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-center uppercase tracking-tight mb-12">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {section.description}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-medium">
                  Ver mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
