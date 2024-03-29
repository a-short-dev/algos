import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css'
import ToastProvider from '@/providers/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Algos Crypto Mininig',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
