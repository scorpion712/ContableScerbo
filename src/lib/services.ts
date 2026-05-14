import type { Service, OtherService, NavItem, HeroSection, WhyChooseUs, SocialResponsibility, FooterData, AboutProfile } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Otros servicios', href: '/otros-servicios' },
  { label: 'Información', href: '/informacion' },
  { label: 'Contacto', href: '/contacto' },
];

export const SERVICES: Service[] = [
  {
    id: 'monotributistas',
    title: 'Monotributistas',
    description: 'Servicio completo para monotributistas',
    descriptionDetailed: 'Nuestro servicio de monotributistas te permite despreocuparte de todos los aspectos tributarios y administrativos. Nos ocupamos de que tu situación fiscal esté siempre al día, para que puedas enfocarte en hacer crecer tu negocio.',
    features: [
      'Alta, baja y modificación de datos como monotributista',
      'Alta en ingresos brutos general, simplificado o convenio multilateral (según tu conveniencia y obligación)',
      'Facturación',
      'Presentación de DDJJ mensuales y anuales de ingresos brutos',
      'Asesoramiento permanente y actualización de novedades'
    ],
    image: '/3.jpg',
    icon: 'Briefcase',
    href: '/servicios/monotributistas',
  },
  {
    id: 'responsables-inscriptos',
    title: 'Responsables Inscriptos',
    description: 'Servicio mensual completo a Responsables inscriptos',
    descriptionDetailed: 'Brindamos un servicio integral y personalizado para responsables inscriptos, covering todos los impuestos y obligaciones que tu negocio necesita. Nuestro equipo te acompaña mensualmente para garantizar el cumplimiento fiscal adecuado.',
    features: [
      'Alta, baja y modificaciones de datos como Responsable inscripto',
      'Alta de impuestos según obligación y necesidad del cliente',
      'Facturación',
      'Presentación de impuestos mensuales: IVA, Libro de IVA Digital, Sueldos, Ingresos brutos (provincial o convenio multilateral), tasas municipales',
      'Presentación de impuestos anuales: Impuesto a las Ganancias, Impuesto a los Bienes personales, Impuesto cedular, Ingresos brutos, impuestos específicos según actividad',
      'Asesoramiento y actualización permanente'
    ],
    image: '/4.jpg',
    icon: 'FileText',
    href: '/servicios/responsables-inscriptos',
  },
  {
    id: 'sociedades-comerciales',
    title: 'Sociedades Comerciales',
    description: 'Servicio completo para sociedades comerciales',
    descriptionDetailed: 'Ofrecemos un servicio completo para sociedades comerciales que incluye desde la constitución hasta la gestión contable diaria. Nuestro equipo de profesionales te asesora para optimizar la estructura societaria y cumplir con todas las obligaciones fiscales.',
    features: [
      'Constitution de sociedades comerciales',
      'Alta, modificación y baja de datos e impuestos correspondientes',
      'Asesoramiento sobre conveniencia de tipo de sociedad según tu necesidad y actividad',
      'Asientos contables diarios',
      'Elaboración de balances comerciales certificados',
      'Auditoría externa',
      'Liquidación de impuestos mensuales: IVA, Libro de IVA Digital, Sueldos, Regímenes de información',
      'Liquidación de impuestos anuales: Impuesto a las Ganancias, Bs Acciones y Participaciones, demás específicos'
    ],
    image: '/5.jpg',
    icon: 'Building2',
    href: '/servicios/sociedades-comerciales',
  },
  {
    id: 'entidades-cooperativas',
    title: 'Entidades Cooperativas',
    description: 'Servicio completo para cooperativas',
    descriptionDetailed: 'Somos especialistas en entidades cooperativas, con conocimiento profundo de la legislación específica que rige a estas organizaciones. Te acompañamos en cada etapa, desde la constitución hasta la presentación de estados contables.',
    features: [
      'Constitución de cooperativas',
      'Alta, baja y modificación de datos',
      'Asesoramiento sobre legislación específica de cooperativas',
      'Auditoría externa (inscripta en INAES)',
      'Presentación de DDJJ mensuales y anuales: IVA, Libro de IVA Digital, Ingresos brutos, FONEDU, regímenes de información',
      'Elaboración de balances contables cooperativos',
      'Asesoramiento permanente y actualización de novedades'
    ],
    image: '/6.jpeg',
    icon: 'Users',
    href: '/servicios/entidades-cooperativas',
  },
  {
    id: 'empleados',
    title: 'Empleados en relación de dependencia',
    description: 'Servicio personalizado para empleados',
    descriptionDetailed: 'Si sos empleado en relación de dependencia, te ayudamos a optimizar tu situación fiscal. Realizamos el asesoramiento y confección de todas las declaraciones juradas para que puedas aprovechar al máximo las deducciones disponibles.',
    features: [
      'Asesoramiento y confección de F572 Web SIRADIG',
      'Asesoramiento en cuanto a deducciones aplicables para el impuesto a las ganancias según cada caso',
      'Confección de DDJJ de Impuesto a las Ganancias e Impuesto a los Bienes Personales (informativas o determinativas)',
      'Asesoramiento permanente y actualización de novedades'
    ],
    image: '/7.jpg',
    icon: 'UserCheck',
    href: '/servicios/empleados',
  },
  {
    id: 'flujos-fondos',
    title: 'Flujos de Fondos Proyectados',
    description: 'Confección de Flujos de fondos para determinar viabilidad de nuevos proyectos',
    descriptionDetailed: 'Te ayudamos a tomar decisiones informadas sobre nuevos proyectos mediante el análisis de flujos de fondos proyectados. Determinamos la viabilidad, el tiempo de recupero de inversión y las mejores estrategias para maximizar los beneficios.',
    features: [
      'Análisis de ventas, costos, gastos e inversión inicial del proyecto a concretar',
      'Determinación de viabilidad o no del proyecto',
      'Determinación de recupero de inversión inicial del mismo',
      'Asesoramiento para toma de decisiones que permita obtener mayores beneficios'
    ],
    image: '/8.avif',
    icon: 'TrendingUp',
    href: '/servicios/flujos-fondos',
  },
  {
    id: 'importadores-exportadores',
    title: 'Importadores - Exportadores',
    description: 'Servicio de trámites de importación y exportación',
    descriptionDetailed: 'Gestionamos todos los aspectos tributarios relacionados con tu actividad de comercio internacional. Te acompañamos desde el alta como importador o exportador hasta la presentación de declaraciones juradas anuales.',
    features: [
      'Alta como importador - exportador',
      'Modificaciones de datos',
      'Presentación de impuestos mensuales correspondientes',
      'Presentación de impuestos anuales correspondientes',
      'Asesoramiento permanente en cuanto a la actividad y necesidad del cliente'
    ],
    image: '/9.jpg',
    icon: 'Plane',
    href: '/servicios/importadores-exportadores',
  },
  {
    id: 'asociaciones-civiles',
    title: 'Asociaciones Civiles',
    description: 'Servicio completo para asociaciones civiles (clubes, cooperadoras, etc.)',
    descriptionDetailed: 'Brindamos un servicio integral para asociaciones civiles, clubes, cooperadoras y otras entidades sin fines de lucro. Te acompañamos en la constitución, alta en impuestos y cumplimiento de todas las obligaciones fiscales.',
    features: [
      'Constitución de Asociaciones civiles',
      'Alta, baja y modificación de datos',
      'Alta en los impuestos correspondientes',
      'Presentación de declaraciones correspondientes según tipo de entidad',
      'Solicitudes de exenciones según corresponda',
      'Asesoramiento permanente y actualización de novedades'
    ],
    image: '/2.jpg',
    icon: 'HeartHandshake',
    href: '/servicios/asociaciones-civiles',
  },
];

export const OTHER_SERVICES: OtherService[] = [
  {
    id: 'liquidacion-impuestos',
    title: 'Liquidación de impuestos',
    description: 'Mensuales y anuales según tu necesidad y conveniencia.',
    icon: 'Calculator',
  },
  {
    id: 'constitucion-sociedades',
    title: 'Constitución de sociedades',
    description: 'Asesoramiento sobre conveniencia y pasos a seguir para sociedades comerciales.',
    icon: 'FileSignature',
  },
  {
    id: 'liquidacion-sueldos',
    title: 'Liquidación de sueldos',
    description: 'Administración de nómina y liquidación de salarios.',
    icon: 'DollarSign',
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento y actualización permanente',
    description: 'Comprendemos sus necesidades específicas.',
    icon: 'Lightbulb',
  },
  {
    id: 'conocimiento-mercado',
    title: 'Conocimiento del mercado',
    description: 'Brindamos las herramientas y la orientación que necesita según su actividad específica.',
    icon: 'BarChart',
  },
  {
    id: 'auditoria',
    title: 'Auditoría externa de estados contables',
    description: 'Verificación y certificación de estados financieros.',
    icon: 'ShieldCheck',
  },
  {
    id: 'planificacion-fiscal',
    title: 'Planificación fiscal',
    description: 'Estrategias para optimizar la carga tributaria.',
    icon: 'PieChart',
  },
  {
    id: 'tribucion-internacional',
    title: 'Tributación internacional',
    description: 'Asesoramiento en matters de impuestos internacionales.',
    icon: 'Globe',
  },
  {
    id: 'certificaciones',
    title: 'Certificaciones contables',
    description: 'Certificaciones profesionales y legales.',
    icon: 'Award',
  },
];

export const HERO_SECTION: HeroSection = {
  title: 'Servicios contables y consultoría empresarial.',
  subtitle: 'Nuestros servicios',
};

export const WHY_CHOOSE_US: WhyChooseUs = {
  title: '¿POR QUÉ ELEGIRNOS?',
  items: [
    {
      title: 'Precisión, puntualidad y conocimiento',
      description:
        'Ponemos como prioridad sus necesidades específicas y la actualización constante en materia tributaria, contable y societaria.',
    },
    {
      title: 'Excelente comunicación',
      description:
        'Nos basamos en la excelente comunicación con nuestros clientes en plena confianza, para obtener así mejores rendimientos de sus actividades.',
    },
    {
      title: 'Claridad en objetivos',
      description:
        'Comprendemos claramente sus objetivos para cumplirlos.',
    },
  ],
};

export const SOCIAL_RESPONSIBILITY: SocialResponsibility = {
  title: 'La importancia de la RESPONSABILIDAD SOCIAL EMPRESARIAL',
  description:
    'Somos un estudio que acompaña, evoluciona y apuesta por un futuro más consciente. Porque creemos que la contabilidad puede ser una herramienta de transformación positiva.',
};

export const FOOTER_DATA: FooterData = {
  name: 'Estudio Scerbo',
  tagline: 'Contabilidad & Consultoría',
  email: 'scerbopaula@gmail.com',
  address: 'General Pirán, Provincia de Buenos Aires, Argentina',
  instagram: 'https://www.instagram.com/cdrapaulascerbo/',
  linkedin: 'https://www.linkedin.com/in/paula-scerbo-12162618a/',
};

export const ABOUT_PROFILE: AboutProfile = {
  name: 'Paula Scerbo',
  title: 'Contadora Pública Nacional',
  degree: 'Contadora Pública Nacional',
  university: 'Universidad Nacional de Mar del Plata (UNMDP)',
  registration: 'Matriculada en Provincia de Buenos Aires',
  cppcpba: 'T°170 F°116 Legajo N° 44202/0 C.P.C.P.B.A.',
  specializations: [
    'Contabilidad Cooperativa (CGCyM)',
    'Responsabilidad Social Empresarial (RSE)',
    'Actividad Agropecuaria (IPIT)',
  ],
  courses: [
    'Curso de posgrado: Tributación en Sede Aduanera (FAECyS)',
    'Maestría en Gestión Empresaria de Negocios Internacionales (UBA)',
  ],
};