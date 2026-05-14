import type { Metadata } from "next";
import { OtherServicesList } from "@/components/other-services";

export const metadata: Metadata = {
  title: "Otros Servicios Contables | Estudio Contable Scerbo",
  description: "Servicios profesionales adicionales: liquidación de impuestos, constitución de sociedades, auditoría externa, planificación fiscal, tributación internacional y más en General Pirán, Buenos Aires.",
  keywords: [
    "liquidación de impuestos",
    "constitución de sociedades",
    "auditoría externa",
    "planificación fiscal",
    "tributación internacional",
    "certificaciones contables",
    "liquidación de sueldos",
  ],
  openGraph: {
    title: "Otros Servicios Contables | Estudio Contable Scerbo",
    description: "Servicios profesionales adicionales: liquidación de impuestos, auditoría, planificación fiscal y más.",
    url: "https://estudioscerbo.com.ar/otros-servicios",
    images: [
      {
        url: "/logo-removebg.png",
        width: 1200,
        height: 630,
        alt: "Otros Servicios Contables - Estudio Scerbo",
      },
    ],
  },
  alternates: {
    canonical: "https://estudioscerbo.com.ar/otros-servicios",
  },
};

export default function OtrosServiciosPage() {
  return <OtherServicesList />;
}