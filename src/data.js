/**
 * ============================================================
 *  ARCHIVO ÚNICO DE DATOS — Barbería El Filo (web de demostración)
 * ============================================================
 *  Todos los textos, precios, horarios, imágenes y enlaces de la web
 *  salen de aquí. Para adaptarla a un negocio real, basta con editar
 *  este archivo (y sustituir las fotos de ejemplo por fotos propias).
 *
 *  ⚠ Negocio, dirección, teléfono, equipo y opiniones son FICTICIOS.
 * ============================================================
 */

// Ayuda para imágenes de Unsplash (licencia libre de Unsplash).
const unsplash = (id, w = 800, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`

export const site = {
  // URL pública final (se usa en Open Graph). Cambiar tras desplegar.
  url: 'https://demo-barberia.vercel.app',
  lang: 'es',
  title: 'Barbería El Filo · Cortes y afeitado clásico en Santa Cruz de Tenerife',
  description:
    'Barbería El Filo: cortes, degradados, arreglo de barba y afeitado clásico con toalla caliente en Santa Cruz de Tenerife. Pide tu cita por WhatsApp.',
  ogImage: unsplash('1503951914875-452162b0f3f1', 1200, 630),
  themeColor: '#0e0e0f',
}

export const business = {
  name: 'Barbería El Filo',
  shortName: 'El Filo',
  eyebrow: 'Barbería · Desde 2014',
  slogan: 'Cortes con carácter. Afeitado con oficio.',
  intro:
    'Navaja, tijera y buena conversación en pleno centro. Sin prisas, sin plantillas: cada corte se hace a tu medida.',
  city: 'Santa Cruz de Tenerife',
  // Dirección inventada (no corresponde a ningún local real).
  address: 'Calle de la Navaja, 12',
  postalCode: '38001',
  region: 'Tenerife, España',
  phoneDisplay: '+34 600 000 000', // teléfono de ejemplo
  whatsapp: '34600000000', // número en formato internacional, sin "+" ni espacios
  whatsappMessage:
    'Hola, Barbería El Filo 👋 Me gustaría pedir cita. ¿Qué huecos tenéis disponibles esta semana?',
  heroImage: unsplash('1503951914875-452162b0f3f1', 1600),
  heroImageAlt: 'Barbero perfilando una barba con navaja en un ambiente oscuro',
}

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

export const buttons = {
  book: 'Pedir cita',
  services: 'Ver servicios',
  whatsappFloat: 'Pedir cita por WhatsApp',
  directions: 'Cómo llegar',
}

// Precios de ejemplo (€). "duration" en minutos.
export const services = {
  title: 'Servicios y precios',
  subtitle: 'Precios orientativos con IVA incluido. Productos de acabado incluidos en todos los servicios.',
  groups: [
    {
      name: 'Cortes',
      items: [
        { name: 'Corte', desc: 'Lavado, corte a tijera o máquina y peinado.', price: 15, duration: 30 },
        { name: 'Degradado', desc: 'Skin fade, low, mid o high fade con acabado a navaja.', price: 17, duration: 40 },
        { name: 'Corte infantil', desc: 'Hasta 12 años. Con paciencia y sin sustos.', price: 12, duration: 25 },
      ],
    },
    {
      name: 'Barba',
      items: [
        { name: 'Arreglo de barba', desc: 'Perfilado, rebaje y aceite hidratante.', price: 10, duration: 20 },
        { name: 'Afeitado clásico', desc: 'Toalla caliente, navaja y bálsamo after shave.', price: 15, duration: 30 },
      ],
    },
  ],
  packs: {
    name: 'Packs',
    items: [
      { name: 'Corte + barba', desc: 'El combo de siempre, sin esperas entre servicios.', price: 23, oldPrice: 25, duration: 50 },
      { name: 'El Filo completo', desc: 'Degradado + afeitado clásico con toalla caliente.', price: 28, oldPrice: 32, duration: 70, featured: true },
      { name: 'Padre e hijo', desc: 'Corte adulto + corte infantil, a la vez.', price: 24, oldPrice: 27, duration: 45 },
    ],
  },
}

export const gallery = {
  title: 'Galería',
  subtitle: 'Algunos trabajos recientes y el rincón donde los hacemos.',
  // Fotos de ejemplo de Unsplash: sustituir por fotos propias del negocio.
  items: [
    { id: '1593702275687-f8b402bf1fb5', alt: 'Degradado bajo terminado con máquina', tag: 'Corte' },
    { id: '1585747860715-2ba37e788b70', alt: 'Interior de la barbería con sillones clásicos y pared de ladrillo', tag: 'El local' },
    { id: '1517832606299-7ae9b720a186', alt: 'Arreglo de barba con tijera', tag: 'Barba' },
    { id: '1622286342621-4bd786c2447c', alt: 'Corte texturizado en la parte superior', tag: 'Corte' },
    { id: '1512690459411-b9245aed614b', alt: 'Sillón de barbero de cuero marrón', tag: 'El local' },
    { id: '1532710093739-9470acff878f', alt: 'Afeitado clásico con brocha y espuma', tag: 'Afeitado' },
    { id: '1567894340315-735d7c361db0', alt: 'Barbero perfilando un degradado', tag: 'Corte' },
    { id: '1560066984-138dadb4c035', alt: 'Puestos de trabajo luminosos con grandes ventanales', tag: 'El local' },
  ].map((g) => ({ ...g, thumb: unsplash(g.id, 600, 600), full: unsplash(g.id, 1400) })),
}

// Equipo ficticio (fotos de stock).
export const team = {
  title: 'El equipo',
  subtitle: 'Tres pares de manos, una misma obsesión por el detalle.',
  members: [
    { name: 'Marcos Delgado', role: 'Fundador', specialty: 'Degradados y diseños a navaja', photo: unsplash('1506794778202-cad84cf45f1d', 600, 720) },
    { name: 'Iván Rosales', role: 'Barbero', specialty: 'Barba y afeitado clásico', photo: unsplash('1507003211169-0a1dd7228f2d', 600, 720) },
    { name: 'Dani Herrera', role: 'Barbero', specialty: 'Cortes clásicos e infantiles', photo: unsplash('1503443207922-dff7d543fd0e', 600, 720) },
  ],
}

// ────────────────────────────────────────────────────────────
//  OPINIONES: DATOS DE DEMOSTRACIÓN. No son reseñas reales.
//  Sustituir por reseñas reales (con permiso) o eliminar la sección.
// ────────────────────────────────────────────────────────────
export const reviews = {
  title: 'Opiniones',
  subtitle: 'Lo que dicen los clientes.',
  demoNotice: 'Opiniones de ejemplo para esta demostración.',
  items: [
    { demo: true, name: 'Javier M.', rating: 5, text: 'El mejor degradado que me han hecho en años. Marcos se toma su tiempo y se nota.' },
    { demo: true, name: 'Óscar T.', rating: 5, text: 'El afeitado clásico con toalla caliente es otro nivel. Salí como nuevo.' },
    { demo: true, name: 'Laura P.', rating: 5, text: 'Llevo a mi hijo de 6 años y siempre sale contento. Mucha paciencia con los peques.' },
    { demo: true, name: 'Adrián G.', rating: 4, text: 'Buen ambiente, buena música y puntuales con la cita. Repetiré seguro.' },
  ],
}

export const contact = {
  title: 'Horario y ubicación',
  // day: 0 = domingo … 6 = sábado (para resaltar el día de hoy)
  hours: [
    { day: 1, label: 'Lunes', time: '10:00 – 20:00' },
    { day: 2, label: 'Martes', time: '10:00 – 20:00' },
    { day: 3, label: 'Miércoles', time: '10:00 – 20:00' },
    { day: 4, label: 'Jueves', time: '10:00 – 20:00' },
    { day: 5, label: 'Viernes', time: '10:00 – 21:00' },
    { day: 6, label: 'Sábado', time: '09:30 – 14:30' },
    { day: 0, label: 'Domingo', time: 'Cerrado' },
  ],
  todayLabel: 'Hoy',
  addressNote: 'Dirección ficticia · mapa de ejemplo',
  // Coordenadas del mapa de ejemplo (centro de Santa Cruz de Tenerife).
  map: { lat: 28.4682, lon: -16.2546, zoomBox: 0.006 },
}

// Redes de ejemplo: sustituir "#" por los perfiles reales.
export const socials = [
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'TikTok', icon: 'tiktok', href: '#' },
  { name: 'Facebook', icon: 'facebook', href: '#' },
]

export const footer = {
  credit: 'Web de demostración creada por',
  creditName: 'Rafael Rivero Dev',
  creditUrl: 'https://rafaelriverodev.com',
  disclaimer: 'Barbería El Filo es un negocio ficticio. Fotos de Unsplash.',
}
