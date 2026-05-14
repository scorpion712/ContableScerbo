import type { Metadata } from "next";
import { GraduationCap, Award, MapPin, Mail } from 'lucide-react';

// Custom SVG icons for Instagram and LinkedIn
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
    </svg>
  );
}

import { ABOUT_PROFILE, FOOTER_DATA } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sobre mí | Paula Scerbo - Contadora Pública Nacional",
  description: "Conoce a Paula Scerbo, Contadora Pública Nacional especializada en contabilidad cooperativa, responsabilidad social empresarial y actividad agropecuaria en General Pirán, Buenos Aires.",
  keywords: [
    "Paula Scerbo",
    "contadora pública",
    "contadora pública nacional",
    "matriculada",
    "CPCPBA",
    "contabilidad cooperativa",
    "responsabilidad social empresarial",
    "actividad agropecuaria",
    "UNMDP",
    "Universidad Nacional de Mar del Plata",
  ],
  openGraph: {
    title: "Sobre mí | Paula Scerbo - Contadora Pública Nacional",
    description: "Conoce a Paula Scerbo, Contadora Pública Nacional especializada en contabilidad cooperativa y responsabilidad social empresarial.",
    url: "https://estudioscerbo.com.ar/informacion",
    images: [
      {
        url: "/paula.png",
        width: 800,
        height: 600,
        alt: "Paula Scerbo - Contadora Pública Nacional",
      },
    ],
  },
  alternates: {
    canonical: "https://estudioscerbo.com.ar/informacion",
  },
};

export default function InformacionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#F8F4FC] via-[#FDFCFE] to-[#F5EEF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e2e74] pt-2">
              Sobre mí
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#2e2e74]/80 max-w-2xl mx-auto">
              Conoce a la profesional detrás del Estudio Contable Scerbo
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-12 lg:py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Profile Card with Image */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-xl border border-[#8acce8]/20 overflow-hidden sticky top-8">
                <div className="relative h-64 sm:h-80">
                  <Image
                    src="/1.jpg"
                    alt="Paula Scerbo"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{ABOUT_PROFILE.name}</h2>
                    <p className="text-white/90 text-lg">{ABOUT_PROFILE.title}</p>
                  </div>
                </div>
                
                {/* Quick Info in Card */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-[#2e2e74]/80">
                    <MapPin className="w-5 h-5 text-[#8acce8] shrink-0" />
                    <span className="text-sm">General Pirán, Buenos Aires</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#2e2e74]/80">
                    <Mail className="w-5 h-5 text-[#8acce8] shrink-0" />
                    <span className="text-sm">{FOOTER_DATA.email}</span>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={FOOTER_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-2 py-2 bg-[#2e2e74] text-white rounded-full hover:bg-[#0077B5]/70 transition-colors text-sm font-medium"
                    >
                      <LinkedInIcon size={16} />
                    </a>
                    <a
                      href={FOOTER_DATA.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-2 py-2 bg-[#2e2e74] text-white rounded-full hover:bg-[#0077B5]/70 transition-opacity text-sm font-medium"
                    >
                      <InstagramIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Professional Profile */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#8acce8]/20 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#2e2e74] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2e2e74] rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  Formación Académica
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="font-semibold text-[#2e2e74] min-w-[140px]">Universidad:</span>
                    <span className="text-[#2e2e74]/80">{ABOUT_PROFILE.university}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="font-semibold text-[#2e2e74] min-w-[140px]">Carrera:</span>
                    <span className="text-[#2e2e74]/80">{ABOUT_PROFILE.degree}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span className="font-semibold text-[#2e2e74] min-w-[140px]">Matrícula:</span>
                    <span className="text-[#2e2e74]/80">{ABOUT_PROFILE.registration}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-[#8acce8]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#8acce8] rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2e2e74]">CPCPBA</p>
                      <p className="text-[#2e2e74]/80 text-sm">{ABOUT_PROFILE.cppcpba}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#8acce8]/20 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#2e2e74] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2e2e74] rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Especializaciones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ABOUT_PROFILE.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="p-4 bg-[#F8F4FC] rounded-xl border border-[#8acce8]/20 hover:border-[#8acce8]/50 transition-colors"
                    >
                      <p className="text-[#2e2e74] font-medium text-center">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Training */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#8acce8]/20 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#2e2e74] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8acce8] rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  Formación Adicional
                </h3>
                <div className="space-y-4">
                  {ABOUT_PROFILE.courses.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#F8F4FC] rounded-xl"
                    >
                      <div className="w-3 h-3 bg-[#2e2e74] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-[#2e2e74]">{course}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-[#2e2e74] to-[#44216D] rounded-2xl p-6 sm:p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitás asesoramiento?</h3>
                  <p className="text-white/80 mb-6 max-w-xl mx-auto">
                    Estoy lista para ayudarte con tu situación contable. Coordinate conmigo para una consulta personalizada.
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2e2e74] font-semibold rounded-xl hover:bg-[#8acce8] hover:scale-105 transition-all duration-300"
                  >
                    Contactame
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}