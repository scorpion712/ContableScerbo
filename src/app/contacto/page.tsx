import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contacto | Estudio Contable Scerbo",
  description: "Contáctanos para asesoramiento contable personalizado. Estudio contable en General Pirán, Buenos Aires. Email, Instagram o formulario de contacto.",
  keywords: ["contacto", "estudio contable", "asesoramiento", "email", "consulta contable", "General Pirán"],
  openGraph: {
    title: "Contacto | Estudio Contable Scerbo",
    description: "Contáctanos para asesoramiento contable personalizado en General Pirán, Buenos Aires.",
    url: "https://estudioscerbo.com.ar/contacto",
  },
  alternates: {
    canonical: "https://estudioscerbo.com.ar/contacto",
  },
};

export default function ContactoPage() {
  return <ContactContent />;
}