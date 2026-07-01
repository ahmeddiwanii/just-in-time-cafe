import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Dancing_Script, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-script',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0806',
}

export const metadata: Metadata = {
  title: 'Just In Time | Café - Restaurant à Beni Khalled',
  description: 'Café – Restaurant à Beni Khalled, Tunisie. Le bon moment à chaque instant.',
  metadataBase: new URL('https://justintime.tn'),
  openGraph: {
    title: 'Just In Time | Café - Restaurant',
    description: 'Café – Restaurant à Beni Khalled, Tunisie. Le bon moment à chaque instant.',
    locale: 'fr_TN',
    type: 'website',
    images: [{ url: '/salle.png', alt: 'Just In Time — café restaurant à Beni Khalled' }],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${playfair.variable} ${dancing.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
