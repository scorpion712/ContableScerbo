'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { FOOTER_DATA } from '@/lib/services';
import { cn } from '@/lib/utils';

interface ServiceDetailProps {
  title: string;
  descriptionDetailed: string;
  features: string[];
  image: string;
  previousServices: { title: string; href: string }[];
}

export function ServiceDetail({
  title,
  descriptionDetailed,
  features,
  image,
  previousServices,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        {/* Back Link */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Volver a servicios</span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Description */}
          <div className="mb-12 lg:mb-16">
            <p className="text-lg sm:text-xl lg:text-2xl text-[#2e2e74]/80 leading-relaxed max-w-4xl">
              {descriptionDetailed}
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e2e74] mb-8">
              ¿En qué te podemos ayudar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-4 p-6 rounded-xl',
                    'bg-[#F8F4FC] border border-[#B575D7]/10',
                    'hover:bg-[#B575D7]/10 hover:border-[#B575D7]/30',
                    'transition-all duration-300'
                  )}
                >
                  <div className="w-8 h-8 bg-[#9A4EC0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#6D3C97] font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Previous/Next Services Navigation */}
          {previousServices.length > 0 && (
            <div className="mb-16 lg:mb-20">
              <h3 className="text-lg font-semibold text-[#2e2e74] mb-4">
                Otros servicios que podrían interesarte
              </h3>
              <div className="flex flex-wrap gap-3">
                {previousServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className={cn(
                      'px-5 py-2.5 rounded-full text-sm font-medium',
                      'bg-[#8acce8]/20 text-[#2e2e74]',
                      'hover:bg-[#2e2e74] hover:text-white',
                      'transition-all duration-300'
                    )}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className={cn(
            'p-8 lg:p-12 rounded-2xl',
            'bg-gradient-to-br from-[#2e2e74] to-[#44216D]',
            'text-white'
          )}>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                ¿Necesitás más información?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Contáctanos y te asesoramos sobre el servicio que mejor se adapte a tus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="/contacto"
                  className={cn(
                    'inline-flex items-center justify-center',
                    'px-8 py-4 bg-white text-[#2e2e74] font-semibold rounded-xl',
                    'hover:bg-[#8acce8] hover:scale-105',
                    'transition-all duration-300'
                  )}
                >
                  Contactanos
                </a>
                <div className="flex items-center gap-6 text-white/80">
                  <a
                    href={`mailto:${FOOTER_DATA.email}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm">{FOOTER_DATA.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}