import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { FOOTER_DATA, NAV_ITEMS } from '@/lib/services';

// Custom SVG icons for Instagram and LinkedIn
function InstagramIcon({ size = 22 }: { size?: number }) {
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

function LinkedInIcon({ size = 22 }: { size?: number }) {
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2e2e74] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand with Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              {/* Local Logo Image - High Quality with padding */}
              <div className="relative w-20 h-20 overflow-hidden rounded-full bg-white p-2">
                <Image
                  src="/logo.png"
                  alt="Estudio Scerbo Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">{FOOTER_DATA.name}</span>
                <span className="text-sm text-white/60">{FOOTER_DATA.tagline}</span>
              </div>
            </Link>
            
            {/* Social Media Icons with hover */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={FOOTER_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-[#8acce8] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={22} />
              </a>
              <a
                href={FOOTER_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-[#8acce8] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white/60">
              Navegación
            </h3>
            <ul className="space-y-4">
              {NAV_ITEMS.filter((item) => item.href !== '#').map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white/60">
              Servicios
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/servicios"
                  className="text-lg text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center"
                >
                  Monotributistas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-lg text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center"
                >
                  Responsables Inscriptos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-lg text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center"
                >
                  Sociedades Comerciales
                </Link>
              </li>
              <li>
                <Link
                  href="/otros-servicios"
                  className="text-lg text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center"
                >
                  Otros Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact with inline address and icon */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white/60">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 text-[#8acce8] flex-shrink-0" />
                <a
                  href={`mailto:${FOOTER_DATA.email}`}
                  className="text-lg text-white/80 hover:text-white transition-colors"
                >
                  {FOOTER_DATA.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-[#8acce8] flex-shrink-0" />
                <span className="text-lg text-white/80">
                  {FOOTER_DATA.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - Only copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base text-white/60">
              ©{currentYear} {FOOTER_DATA.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}