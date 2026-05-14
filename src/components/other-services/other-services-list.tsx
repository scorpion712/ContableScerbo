import Link from 'next/link';
import { Calculator, FileSignature, DollarSign, Lightbulb, BarChart, ShieldCheck, PieChart, Globe, Award, ChevronRight, MessageCircle } from 'lucide-react';
import { OTHER_SERVICES } from '@/lib/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  FileSignature,
  DollarSign,
  Lightbulb,
  BarChart,
  ShieldCheck,
  PieChart,
  Globe,
  Award,
};

export function OtherServicesList() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2e2e74]">Otros servicios</h1>
          <p className="mt-4 text-[#2e2e74]/80 max-w-2xl mx-auto">
            Servicios profesionales adicionales para satisfacer todas tus necesidades contables y fiscales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OTHER_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Calculator;
            return (
              <div
                key={service.id}
                className="flex items-start gap-6 p-6 bg-[#F8F4FC] rounded-2xl hover:bg-[#8acce8]/15 transition-colors border border-[#8acce8]/10"
              >
                <div className="w-14 h-14 bg-[#8acce8] rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#2e2e74] mb-2">{service.title}</h2>
                  <p className="text-[#2e2e74]/80 text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-[#F8F4FC] rounded-2xl p-8 sm:p-10 text-center border border-[#8acce8]/20">
          <div className="w-16 h-16 bg-[#8acce8] rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#2e2e74] mb-3">
            ¿Necesitás más información?
          </h2>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2e2e74] text-white font-medium rounded-lg hover:bg-[#2e2e74]/90 transition-colors"
          >
            Contáctanos <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}