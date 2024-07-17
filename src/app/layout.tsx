import type { Metadata } from 'next';
import { Playfair } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

const lato = Playfair({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Filmes Online | Hydrah tecnologia',
  description: 'site criado para exibir os filmes mais assistidos',
  keywords:
    'Resenha de filmes Crítica de filmes, Cinema, Filmes em cartaz, Estreias de cinema, Trailers de filmes, Gêneros de filmes',
  robots: 'index, follow',
  icons: 'img/favicon_film_online.svg',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
