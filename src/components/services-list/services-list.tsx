import Link from 'next/link';
import { Briefcase, FileText, Building2, Users, UserCheck, TrendingUp, Plane, HeartHandshake, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/lib/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  FileText,
  Building2,
  Users,
  UserCheck,
  TrendingUp,
  Plane,
  HeartHandshake,
};

export function ServicesList() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2e2e74]">Nuestros servicios</h1>
          <p className="mt-4 text-[#2e2e74]/80 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios contables y de consultoría adaptados a tus necesidades específicas.
          </p>
        </div>

        <div className="space-y-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 bg-[#F8F4FC] rounded-2xl hover:bg-[#8acce8]/20 transition-colors border border-[#8acce8]/20"
              >
                <div className="w-16 h-16 bg-[#2e2e74] rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#2e2e74] mb-2">{service.title}</h2>
                  <p className="text-[#2e2e74]/80">{service.description}</p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2e2e74] hover:text-[#8acce8] mt-4 sm:mt-0"
                >
                  Más info <ChevronRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-[#2e2e74] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contamos con servicios adicionales que pueden adaptarse a tus necesidades. No dudes en consultarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/otros-servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2e2e74] font-medium rounded-lg hover:bg-[#8acce8] transition-colors"
            >
              Ver más servicios <ChevronRight size={18} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8acce8] text-[#2e2e74] font-medium rounded-lg hover:bg-[#8acce8]/80 transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}