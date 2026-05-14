import type { Metadata } from "next";
import { ServicesList } from "@/components/services-list";

export const metadata: Metadata = {
  title: "Nuestros Servicios Contables | Estudio Contable Scerbo",
  description: "Descubre nuestros servicios contables: monotributistas, responsables inscriptos, sociedades comerciales, cooperativas, asociaciones civiles, empleados y más en General Pirán, Buenos Aires.",
  keywords: [
    "servicios contables",
    "monotributista",
    "responsable inscripto",
    "sociedades comerciales",
    "cooperativas",
    "asociaciones civiles",
    "liquidación de impuestos",
    "contabilidad",
    "asesoramiento fiscal",
    "auditoría externa",
  ],
  openGraph: {
    title: "Nuestros Servicios Contables | Estudio Contable Scerbo",
    description: "Descubre nuestros servicios contables: monotributistas, responsables inscriptos, sociedades comerciales, cooperativas y más.",
    url: "https://estudioscerbo.com.ar/servicios",
    images: [
      {
        url: "/logo-removebg.png",
        width: 1200,
        height: 630,
        alt: "Servicios Contables - Estudio Scerbo",
      },
    ],
  },
  alternates: {
    canonical: "https://estudioscerbo.com.ar/servicios",
  },
};

export default function ServiciosPage() {
  return <ServicesList />;
}