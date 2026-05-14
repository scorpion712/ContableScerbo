import Image from 'next/image';

export function NosAdaptamosSection() {
  return (
    <section className="min-h-screen py-24 lg:py-32 bg-gradient-to-br from-[#F8F4FC] via-white to-[#FDFCFE] flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Image from original website */}
        <div className="mb-12 lg:mb-16 flex justify-center">
          <Image
            src="https://static.wixstatic.com/media/58aa70_d18ac4adf6094c41a8bf9163e68c2b63~mv2.jpg/v1/fill/w_71,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/58aa70_d18ac4adf6094c41a8bf9163e68c2b63~mv2.jpg"
            alt="Nos adaptamos a tus necesidades"
            width={200}
            height={170}
            className="rounded-xl shadow-lg"
            unoptimized
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e2e74] mb-6 lg:mb-8">
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
    </section>
  );
}