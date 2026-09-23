import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Veirakas | Private Yachts & Jet', template: '%s | Veirakas' },
  description: 'Private yachts, jets, helicopters and extraordinary destinations, arranged around you by a dedicated concierge.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.svg',
    apple: '/veirakas-logo.png',
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/veirakas-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

