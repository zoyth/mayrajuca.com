// ABOUTME: Portuguese locale layout with header and footer.
// ABOUTME: Wraps all Portuguese pages with consistent navigation and branding.

import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

const navLinks = [
  { href: '/pt', label: 'Início' },
  { href: '/pt/editorial', label: 'Editorial' },
  { href: '/pt/exposicoes-e-eventos', label: 'Exposições e Eventos' },
  { href: '/pt/audiovisual', label: 'Audiovisual' },
  { href: '/pt/mostras-festivais-seminarios', label: 'Mostras e Seminários' },
  { href: '/pt/acoes-formativas', label: 'Ações Formativas' },
  { href: '/pt/contato', label: 'Contato' },
];

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/pt" className="font-heading font-bold text-xl text-primary">
                Mayra Jucá
              </Link>
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <MobileNav links={navLinks} />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Plural MJ</h3>
                <p className="text-sm opacity-80">
                  Memória · Audiovisual · Formação
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Links</h3>
                <ul className="space-y-2">
                  {navLinks.slice(1).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Contato</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <a href="mailto:mayrajuca@gmail.com" className="hover:opacity-100">
                      mayrajuca@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@mayrajuca_Plural"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-100"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/Mayra_Juca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-100"
                    >
                      @Mayra_Juca
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
              © {new Date().getFullYear()} Plural MJ LTDA. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
