import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://estudioscerbo.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Estudio Contable Scerbo | Asesoramiento Integral Personalized",
    template: "%s | Estudio Contable Scerbo",
  },
  description: "Estudio contable offering comprehensive accounting and business consulting services in Mar del Plata. Specializing in monotributistas, responsible entities, and business management.",
  keywords: [
    "estudio contable",
    "contador público",
    "asesoramiento contable",
    "monotributista",
    "responsable inscripto",
    "sociedades comerciales",
    "cooperativas",
    "contabilidad",
    "impuestos",
    "liquidación de sueldos",
    "Mar del Plata",
    "General Pirán",
    "Buenos Aires",
    "contadora pública",
  ],
  authors: [{ name: "Paula Scerbo", url: "https://www.linkedin.com/in/paula-scerbo-12162618a/" }],
  creator: "Paula Scerbo",
  publisher: "Estudio Contable Scerbo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Estudio Contable Scerbo",
    title: "Estudio Contable Scerbo | Asesoramiento Integral Personalized",
    description: "Estudio contable offering comprehensive accounting and business consulting services in Mar del Plata. Specializing in monotributistas, responsible entities, and business management.",
    images: [
      {
        url: "/logo-removebg.png",
        width: 1200,
        height: 630,
        alt: "Estudio Contable Scerbo - Asesoramiento contable integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable Scerbo | Asesoramiento Integral Personalized",
    description: "Estudio contable offering comprehensive accounting and business consulting services in Mar del Plata.",
    images: ["/logo-removebg.png"],
    creator: "@cdrapaulalscerbo",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      es: SITE_URL,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}