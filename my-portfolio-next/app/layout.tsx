import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Developer Portfolio',
  description: 'A modern, single-page responsive developer portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body>{children}</body>
    </html>
  );
}