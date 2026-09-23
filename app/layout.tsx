import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Veirakas | Private Yachts & Jet', template: '%s | Veirakas' }, description: 'Private yachts, jets, helicopters and extraordinary destinations, arranged around you by a dedicated concierge.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
