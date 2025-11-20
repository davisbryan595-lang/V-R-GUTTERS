import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

export const metadata: Metadata = {
  title: 'V&R Gutter Cleaning | Gutter Cleaning & Roofing Rhode Island',
  description: 'Professional gutter cleaning, gutter guard installation, roofing repairs, and exterior house washing in Charlestown, North Scituate, Coventry, and West Warwick, Rhode Island.',
  keywords: 'gutter cleaning, gutter guard, roofing, exterior washing, Rhode Island',
  openGraph: {
    title: 'V&R Gutter Cleaning | Professional Services in Rhode Island',
    description: 'Trusted gutter cleaning and exterior services across RI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "V&R Gutter Cleaning",
            "description": "Professional gutter cleaning and exterior services",
            "telephone": "774-849-1854",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Charlestown",
                "addressRegion": "RI",
                "postalCode": "02813"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "North Scituate",
                "addressRegion": "RI",
                "postalCode": "02857"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Coventry",
                "addressRegion": "RI",
                "postalCode": "02816"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "West Warwick",
                "addressRegion": "RI",
                "postalCode": "02893"
              }
            ],
            "sameAs": ["https://www.facebook.com"],
            "areaServed": ["Charlestown", "North Scituate", "Coventry", "West Warwick"]
          })
        }} />
      </head>
      <body className="bg-white">
        <Navbar />
        {children}
        <FloatingCallButton />
        <Footer />
      </body>
    </html>
  )
}
