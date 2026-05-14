import { CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/services';
import Image from 'next/image';

export function WhyChooseUs() {
  return (
    <section className="min-h-screen py-24 lg:py-32 bg-gradient-to-br from-[#F8F4FC] via-[#FDFCFE] to-[#F5EEF8] flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e2e74]">{WHY_CHOOSE_US.title}</h2>
        </div>

        {/* Attention-grabbing cards with modern design - larger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {WHY_CHOOSE_US.items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl hover:shadow-[#8acce8]/30 border-2 border-transparent hover:border-[#2e2e74]/50 transition-all duration-300 hover:-translate-y-3 flex flex-col"
            >
              {/* Decorative gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8acce8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col h-full">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-[#2e2e74] to-[#2e2e74] rounded-2xl flex items-center justify-center mb-6 lg:mb-8 shadow-lg">
                  <CheckCircle2 className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2e2e74] mb-4">{item.title}</h3>
                <p className="text-[#2e2e74]/80 text-lg lg:text-xl leading-relaxed flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}