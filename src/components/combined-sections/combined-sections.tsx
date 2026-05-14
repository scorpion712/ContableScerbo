import { SOCIAL_RESPONSIBILITY } from '@/lib/services';
import Image from 'next/image';

export function CombinedSections() {
  return (
    <section className="min-h-screen py-24 lg:py-32 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Modern 2x2 Grid Layout - Seamless Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#8acce8]/20">
          
          {/* Top Left - Social Responsibility Text */}
          <div className="bg-gradient-to-br from-white to-[#F8F4FC] p-10 lg:p-14 flex flex-col justify-center order-1">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2e2e74] mb-6 lg:mb-8 leading-tight">
                {SOCIAL_RESPONSIBILITY.title}
              </h2>
              <p className="text-xl lg:text-2xl text-[#2e2e74]/80 mb-4">{SOCIAL_RESPONSIBILITY.description}</p>
            </div>
          </div>

          {/* Top Right - Image 1 */}
          <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#F8F4FC] to-[#E8D8F0] p-8 lg:p-0 order-2 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/1.jpg"
                alt="Responsabilidad Social Empresarial"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bottom Left - Image 2 */}
          <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#F8F4FC] to-[#E8D8F0] p-8 lg:p-0 order-3 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/2.jpg"
                alt="Nos adaptamos a tus necesidades"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bottom Right - Nos Adaptamos Text */}
          <div className="bg-gradient-to-br from-white to-[#F8F4FC] p-10 lg:p-14 flex flex-col justify-center order-4">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2e2e74] mb-6 lg:mb-8 leading-tight">
                NOS ADAPTAMOS A TUS NECESIDADES
              </h2>
              <p className="text-xl lg:text-2xl text-[#2e2e74]/80 mb-4">
                <span className="font-bold text-[#2e2e74]">Nuestro pilar: la calidad del servicio</span>
              </p>
              <p className="text-xl lg:text-2xl text-[#2e2e74]/80 leading-relaxed">
                En nuestro estudio nos enfocamos en tus necesidades específicas, brindamos un servicio especializado, 
                teniendo en cuenta tus objetivos y poder cumplirlos obteniendo los mayores beneficios posibles.
                Nos basamos en la actualización constante y en la comunicación y confianza con nuestros clientes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}