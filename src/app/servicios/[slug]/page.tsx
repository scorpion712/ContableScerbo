import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { ServiceDetail } from '@/components/service-detail';
import { SERVICES } from '@/lib/services';

const SITE_URL = "https://estudioscerbo.com.ar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | Estudio Contable Scerbo',
    };
  }

  return {
    title: `${service.title} | Estudio Contable Scerbo`,
    description: service.description,
    keywords: [service.title, "servicio contable", "asesoramiento", "contable"],
    openGraph: {
      title: `${service.title} | Estudio Contable Scerbo`,
      description: service.description,
      url: `${SITE_URL}/servicios/${slug}`,
      images: [
        {
          url: service.image || "/logo-removebg.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/servicios/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Get other services for navigation (excluding current one)
  const otherServices = SERVICES.filter((s) => s.id !== slug).map((s) => ({
    title: s.title,
    href: s.href,
  }));

  return (
    <ServiceDetail
      title={service.title}
      descriptionDetailed={service.descriptionDetailed || service.description}
      features={service.features || []}
      image={service.image || '/1.jpg'}
      previousServices={otherServices}
    />
  );
}