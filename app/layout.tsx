import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Optimize font loading with display swap for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Ayan Khan | Portfolio',
  description: 'Professional portfolio showcasing my work in design, UI/UX, cloud computing, web development, open source, and mentoring.',
  keywords: 'portfolio, web development, UI/UX, cloud computing, open source, Ayan Khan',
  authors: [{ name: 'Ayan Khan' }],
  creator: 'Ayan Khan',
  publisher: 'Ayan Khan',
  robots: 'index, follow',
  openGraph: {
    title: 'Ayan Khan | Portfolio',
    description: 'Professional portfolio showcasing my work in design, UI/UX, cloud computing, web development, open source, and mentoring.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ayan Khan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayan Khan | Portfolio',
    description: 'Professional portfolio showcasing my work in design, UI/UX, cloud computing, web development, open source, and mentoring.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          as="style" 
        />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
          as="style" 
        />
        
        {/* Fallback fonts */}
        <noscript>
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
            rel="stylesheet" 
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
            rel="stylesheet" 
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

