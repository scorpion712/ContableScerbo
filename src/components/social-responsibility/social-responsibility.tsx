import { SOCIAL_RESPONSIBILITY } from '@/lib/services';
import Image from 'next/image';

export function SocialResponsibilitySection() {
  return (
    <section className="min-h-screen py-24 lg:py-32 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* More formal/professional image from original website */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="https://static.wixstatic.com/media/58aa70_79157f22eab744feac7afb4844ff5dd6~mv2.jpg/v1/fill/w_460,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Recurso%2020JPG%20CMYK.jpg"
              alt="Responsabilidad Social Empresarial"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl border-4 border-white"
              unoptimized
            />
            {/* Professional frame effect */}
            <div className="absolute -inset-6 border-2 border-[#8acce8]/20 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e2e74] mb-6 lg:mb-8">
              {SOCIAL_RESPONSIBILITY.title}
            </h2>
            <p className="text-xl lg:text-2xl text-[#2e2e74]/80 mb-4">{SOCIAL_RESPONSIBILITY.description}</p>
            <p className="text-xl lg:text-2xl text-[#2e2e74]/80">
              Porque creemos que la contabilidad puede ser una herramienta de transformación positiva para votre negocio y la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}