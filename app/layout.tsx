import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { RegionProvider } from "@/components/region-context"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Fibraxx Internet - Fibra Óptica de Alta Velocidade",
    template: "%s | Fibraxx Internet",
  },
  description:
    "Internet Fibra Óptica ultrarrápida e estável em Padre Paraíso, Itaobim, Jequitinhonha, Almenara e região. Planos a partir de 60MB com WiFi de qualidade.",
  keywords: [
    "internet fibra óptica",
    "Padre Paraíso",
    "Itaobim",
    "Jequitinhonha",
    "Almenara",
    "internet rápida",
    "FibraxxTV",
    "FibraxxFilmes",
  ],
  authors: [{ name: "Fibraxx Internet" }],
  creator: "Fibraxx Internet",
  publisher: "Fibraxx Internet",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fibraxx.vercel.app",
    title: "Fibraxx Internet - Fibra Óptica de Alta Velocidade",
    description:
      "Internet Fibra Óptica ultrarrápida e estável em Padre Paraíso, Itaobim, Jequitinhonha, Almenara e região.",
    siteName: "Fibraxx Internet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibraxx Internet",
    description: "Internet Fibra Óptica ultrarrápida e estável",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <RegionProvider>{children}</RegionProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
