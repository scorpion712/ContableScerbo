import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Local images mapping for services (3-9)
const serviceImages: Record<string, string> = {
  monotributistas: '/3.jpg',
  'responsables-inscriptos': '/4.jpg',
  'sociedades-comerciales': '/5.jpg',
  'entidades-cooperativas': '/6.jpeg',
  empleados: '/7.jpg',
  'flujos-fondos': '/8.avif',
  'importadores-exportadores': '/9.jpg',
  'asociaciones-civiles': '/2.jpg',
};

export function ServicesGrid() {
  return (
    <section className="min-h-screen py-24 lg:py-32 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e2e74]">Nuestros servicios</h2>
          <p className="mt-4 sm:mt-6 text-lg lg:text-xl text-[#2e2e74]/80 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios contables y de consultoría adaptados a tus necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const serviceImage = serviceImages[service.id];
            return (
              <Link
                key={service.id}
                href={service.href}
                className={cn(
                  'group relative rounded-2xl overflow-hidden border-2 border-[#8acce8]/20',
                  'hover:border-[#2e2e74] hover:shadow-2xl hover:shadow-[#8acce8]/25',
                  'transition-all duration-300 flex flex-col min-h-[320px]'
                )}
              >
                {/* Background Image - Full Card, No Padding, Bottom Aligned */}
                {serviceImage && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={serviceImage}
                      alt={service.title}
                      fill
                      className="object-cover object-bottom"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>
                )}
                
                {/* Content - On top of image */}
                <div className="relative z-10 mt-auto p-6 flex flex-col h-full justify-end">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">{service.title}</h3>
                  <p className="text-white/90 text-sm lg:text-base line-clamp-2 drop-shadow-md">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-base font-medium text-white mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Leer más <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}