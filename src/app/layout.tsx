import type { Metadata } from "next"
import { Newsreader, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rinorobinson.com"),
  title: {
    default: "Rino Robinson — Technical Architect & Project Manager",
    template: "%s | Rino Robinson",
  },
  description:
    "PMP-certified Technical Architect and Project Manager with 11+ years of experience building scalable MERN stack products across healthcare, SaaS, and enterprise domains.",
  keywords: [
    "Technical Architect",
    "Project Manager",
    "PMP Certified",
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Full Stack Developer",
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
    title: "Rino Robinson — Technical Architect & Project Manager",
    description:
      "PMP-certified Technical Architect with 11+ years of MERN stack expertise. Speaker, leader, and builder of production-grade software.",
    siteName: "Rino Robinson Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rino Robinson — Technical Architect & Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rino Robinson — Technical Architect & Project Manager",
    description:
      "PMP-certified Technical Architect with 11+ years of MERN stack expertise. Building scalable systems, leading teams, delivering results.",
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
  jobTitle: "Technical Architect & Project Manager",
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
    "System Architecture",
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
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
