import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rinorobinson.com"),
  title: {
    default: "Rino Robinson — Technical Project Manager",
    template: "%s | Rino Robinson",
  },
  description:
    "PMP-certified Technical Project Manager with 12+ years in IT. I turn unclear requirements into MERN-stack products that ship on time, pass audits and stay maintainable after handover.",
  keywords: [
    "Technical Project Manager",
    "Project Manager",
    "PMP Certified",
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Data Migration",
    "Rocketlane",
    "Chennai",
    "India",
    "Healthcare Technology",
    "AI Applications",
    "Stakeholder Management",
    "Agile",
  ],
  authors: [{ name: "Rino Robinson", url: "https://linkedin.com/in/rinorobinson" }],
  creator: "Rino Robinson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinorobinson.com",
    title: "Rino Robinson — Technical Project Manager",
    description:
      "PMP-certified Technical Project Manager with 12+ years in IT. Delivery led by someone who reads the code.",
    siteName: "Rino Robinson Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rino Robinson — Technical Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rino Robinson — Technical Project Manager",
    description:
      "PMP-certified Technical Project Manager with 12+ years in IT. Delivery led by someone who reads the code.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/favicon.png" },
  alternates: {
    canonical: "https://rinorobinson.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rino Robinson",
  jobTitle: "Technical Project Manager",
  email: "rlrino102@gmail.com",
  telephone: "+918012828581",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com/in/rinorobinson"],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Project Management",
    "Data Migration",
    "MERN Stack",
    "AI Applications",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Project Management Professional (PMP)",
    credentialCategory: "Certification",
    recognizedBy: {
      "@type": "Organization",
      name: "Project Management Institute",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Scroll reveals are framer-motion, which ships opacity:0 in the markup.
            Without JS those sections would never appear, so force them visible. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>`,
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  )
}
