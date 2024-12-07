import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Creator Tip Platform',
  description: 'Decentralized Creator Tipping Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-100">
            <header className="p-4 bg-blue-600 text-white">
              <h1 className="text-2xl font-bold text-center">
                Creator Tip Platform
              </h1>
            </header>
            <main className="container mx-auto p-4">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}