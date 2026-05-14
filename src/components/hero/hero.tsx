import { HERO_SECTION } from '@/lib/services';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-linear-vto-br from-[#F8F4FC] via-[#FDFCFE] to-[#F5EEF8] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2e2e74] leading-tight">
              {HERO_SECTION.title}
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-[#2e2e74]/80 max-w-2xl mx-auto lg:mx-0">
              Asesoramiento contable integral personalizado para tu negocio. 
              Precisión, puntualidad y conocimiento a tu servicio.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="/servicios"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#2e2e74] text-white font-semibold rounded-xl hover:bg-[#2e2e74] transition-all duration-300 hover:scale-105 text-lg"
              >
                Ver Servicios
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#2e2e74] font-semibold rounded-xl border-2 border-[#8acce8] hover:bg-[#8acce8]/10 transition-all duration-300 text-lg"
              >
                Contactanos
              </a>
            </div>
          </div>

          {/* Logo - Hero */}
          <div className="hidden lg:flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/logo-removebg.png"
                alt="Estudio Contable Scerbo"
                width={500}
                height={500}
                className="object-contain drop-shadow-2xl rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-[#8acce8]/20 blur-3xl -z-10 rounded-full" />
            </div>
          </div>

          {/* Mobile Image 1 */}
          <div className="lg:hidden flex items-center justify-center order-1 mb-8">
            <Image
              src="/1.jpg"
              alt="Estudio Contable Scerbo"
              width={250}
              height={250}
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}