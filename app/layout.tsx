import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "1337 Portfolio",
  description: "A modern portfolio showcasing my work and skills as a developer",
  generator: "Web Empire",
  applicationName: "1337 Portfolio",
  authors: [{ name: "Ayoub Mzian" }],
  keywords: ["portfolio", "developer", "web development", "projects", "skills"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://1337.ma",
    title: "1337 Portfolio",
    description: "A modern portfolio showcasing my work and skills as a developer",
    siteName: "1337 Portfolio",
    images: [
      {
        url: "/zbi.ico",
        width: 1200,
        height: 630,
        alt: "1337 Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1337 Portfolio",
    description: "A modern portfolio showcasing my work and skills as a developer",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/zbi.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
