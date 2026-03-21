// ABOUTME: Root layout that redirects to the Portuguese locale.
// ABOUTME: Handles the base route and global styles.

import './globals.css';
import { redirect } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export const metadata = {
  title: 'Mayra Jucá — Plural MJ',
  description:
    'Portfólio de Mayra Jucá — jornalista, cineasta e pesquisadora. Projetos de memória, produção audiovisual e ações formativas.',
};
