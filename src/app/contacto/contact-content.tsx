'use client';

import { Mail, MapPin } from 'lucide-react';

// Custom SVG icons for Instagram and LinkedIn (same as Footer)
function InstagramIcon({ size = 22, color = "" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 22, color = "" }: { size?: number, color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
    </svg>
  );
}

import { ContactForm } from '@/components/contact-form';
import { FOOTER_DATA } from '@/lib/services';
import Image from 'next/image';

export function ContactContent() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2e2e74]">Contáctanos</h1>
          <p className="mt-4 text-[#2e2e74]/80 max-w-2xl mx-auto">
            Estamos ubicados en General Pirán, Buenos Aires. Envíanos un email, inbox a través de Instagram o completa el formulario.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-[#F8F4FC] rounded-2xl p-8 border border-[#8acce8]/20">
              <h2 className="text-xl font-semibold text-[#2e2e74] mb-6">Información de contacto</h2>
              
              {/* Logo without background */}
              <div className="mb-6">
                <div className="relative w-32 h-32">
                  <Image
                    src="/logo-removebg.png"
                    alt="Estudio Scerbo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8acce8] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#2e2e74] font-medium">Dirección</p>
                    <p className="text-[#2e2e74]/80">{FOOTER_DATA.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8acce8] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#2e2e74] font-medium">Email</p>
                    <a
                      href={`mailto:${FOOTER_DATA.email}`}
                      className="text-[#2e2e74]/80 hover:text-[#8acce8]"
                    >
                      {FOOTER_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                  <a
                    href={FOOTER_DATA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[#8acce8]/30 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20}color={"#8acce8"}  />
                  </a>
                  <a
                    href={FOOTER_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[#8acce8]/30  transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={20} color={"#8acce8"} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#F8F4FC] rounded-2xl p-8 border border-[#8acce8]/20">
              <h2 className="text-xl font-semibold text-[#2e2e74] mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}