export interface Service {
  id: string;
  title: string;
  description: string;
  descriptionDetailed?: string;
  features?: string[];
  image?: string;
  icon: string;
  href: string;
}

export interface OtherService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  nombre: string;
  apellido: string;
  email: string;
  mensaje: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface AboutProfile {
  name: string;
  title: string;
  degree: string;
  university: string;
  registration: string;
  cppcpba: string;
  specializations: string[];
  courses: string[];
}

export interface FooterData {
  name: string;
  tagline: string;
  email: string;
  address: string;
  instagram: string;
  linkedin: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
}

export interface WhyChooseUs {
  title: string;
  items: { title: string; description: string }[];
}

export interface SocialResponsibility {
  title: string;
  description: string;
}