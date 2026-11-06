// Genera el HTML de la página a partir de src/data.js en tiempo de build
// (y en cada recarga en desarrollo). Así la web carga ya pintada, sin
// esperar a JavaScript, y sigue teniendo un único archivo de datos.
import * as d from './data.js'

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const euro = (n) => `${Number.isInteger(n) ? n : n.toFixed(2).replace('.', ',')} €`

export const waLink = () =>
  `https://wa.me/${d.business.whatsapp}?text=${encodeURIComponent(d.business.whatsappMessage)}`

const icons = {
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.2 6.2 0 1 0 5.3 6.2V8.6a7.9 7.9 0 0 0 4.4 1.3V6.6a4.5 4.5 0 0 1-4.4-4.6Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9Z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 5-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 5 7 7-7 7"/></svg>',
}

const sectionHead = (num, title, subtitle) => `
      <header class="section-head reveal">
        <span class="section-num">${num}</span>
        <h2>${esc(title)}</h2>
        ${subtitle ? `<p>${esc(subtitle)}</p>` : ''}
      </header>`

const serviceRow = (s) => `
          <li class="service">
            <div class="service-top">
              <h4>${esc(s.name)}</h4>
              <span class="dots" aria-hidden="true"></span>
              <span class="price">${s.oldPrice ? `<s>${euro(s.oldPrice)}</s> ` : ''}${euro(s.price)}</span>
            </div>
            <p>${esc(s.desc)} <span class="duration">· ${s.duration} min</span></p>
          </li>`

function head() {
  const { site, business } = d
  return `
    <title>${esc(site.title)}</title>
    <meta name="description" content="${esc(site.description)}" />
    <meta name="theme-color" content="${esc(site.themeColor)}" />
    <link rel="canonical" href="${esc(site.url)}/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="${esc(business.name)}" />
    <meta property="og:title" content="${esc(site.title)}" />
    <meta property="og:description" content="${esc(site.description)}" />
    <meta property="og:url" content="${esc(site.url)}/" />
    <meta property="og:image" content="${esc(site.ogImage)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(site.title)}" />
    <meta name="twitter:description" content="${esc(site.description)}" />
    <meta name="twitter:image" content="${esc(site.ogImage)}" />
    <link rel="preload" as="image" href="${esc(business.heroImage)}" fetchpriority="high" />`
}

function body() {
  const { business: b, nav, buttons, services, gallery, team, reviews, contact, socials, footer } = d
  const wa = esc(waLink())
  const m = contact.map
  const bbox = [m.lon - m.zoomBox, m.lat - m.zoomBox / 2, m.lon + m.zoomBox, m.lat + m.zoomBox / 2].join('%2C')
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${m.lat}%2C${m.lon}`
  const mapsLink = `https://www.openstreetmap.org/?mlat=${m.lat}&mlon=${m.lon}#map=17/${m.lat}/${m.lon}`
  const socialLinks = socials
    .map((s) => `<a class="social" href="${esc(s.href)}" aria-label="${esc(s.name)} (enlace de ejemplo)">${icons[s.icon]}</a>`)
    .join('')

  return `
  <a class="skip" href="#main">Saltar al contenido</a>

  <header class="topbar" data-topbar>
    <div class="wrap topbar-inner">
      <a class="logo" href="#inicio" aria-label="${esc(b.name)}, inicio">
        <span class="logo-mark" aria-hidden="true">F</span>
        <span class="logo-text">${esc(b.shortName)}</span>
      </a>
      <nav class="nav" aria-label="Principal">
        ${nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join('')}
      </nav>
      <a class="btn btn-gold btn-sm" href="${wa}" target="_blank" rel="noopener">${esc(buttons.book)}</a>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="inicio">
      <img class="hero-img" src="${esc(b.heroImage)}" alt="${esc(b.heroImageAlt)}" fetchpriority="high" decoding="async" />
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="wrap hero-content">
        <p class="eyebrow hero-in" style="--d:0">${esc(b.eyebrow)}</p>
        <h1 class="hero-title hero-in" style="--d:1">
          <span class="hero-small">Barbería</span>
          <span class="hero-big">${esc(b.shortName)}</span>
        </h1>
        <p class="hero-slogan hero-in" style="--d:2">${esc(b.slogan)}</p>
        <p class="hero-intro hero-in" style="--d:3">${esc(b.intro)}</p>
        <div class="hero-cta hero-in" style="--d:4">
          <a class="btn btn-gold" href="${wa}" target="_blank" rel="noopener">${icons.whatsapp}<span>${esc(buttons.book)}</span></a>
          <a class="btn btn-ghost" href="#servicios">${esc(buttons.services)}</a>
        </div>
        <p class="hero-meta hero-in" style="--d:5">${icons.pin}<span>${esc(b.city)}</span></p>
      </div>
    </section>

    <section class="section" id="servicios">
      <div class="wrap">
        ${sectionHead('01', services.title, services.subtitle)}
        <div class="services-grid">
          ${services.groups
            .map(
              (g) => `
          <div class="service-group reveal">
            <h3>${esc(g.name)}</h3>
            <ul>${g.items.map(serviceRow).join('')}
            </ul>
          </div>`
            )
            .join('')}
        </div>
        <h3 class="packs-title reveal">${esc(services.packs.name)}</h3>
        <ul class="packs">
          ${services.packs.items
            .map(
              (p) => `
          <li class="pack reveal${p.featured ? ' pack-featured' : ''}">
            ${p.featured ? '<span class="badge">El más pedido</span>' : ''}
            <h4>${esc(p.name)}</h4>
            <p>${esc(p.desc)}</p>
            <div class="pack-bottom">
              <span class="pack-price">${euro(p.price)}</span>
              ${p.oldPrice ? `<s>${euro(p.oldPrice)}</s>` : ''}
              <span class="duration">${p.duration} min</span>
            </div>
          </li>`
            )
            .join('')}
        </ul>
        <div class="center reveal">
          <a class="btn btn-gold" href="${wa}" target="_blank" rel="noopener">${icons.whatsapp}<span>${esc(buttons.book)}</span></a>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="galeria">
      <div class="wrap">
        ${sectionHead('02', gallery.title, gallery.subtitle)}
        <ul class="gallery">
          ${gallery.items
            .map(
              (g, i) => `
          <li class="reveal">
            <button class="gallery-item" type="button" data-index="${i}" data-full="${esc(g.full)}" aria-label="Ampliar: ${esc(g.alt)}">
              <img src="${esc(g.thumb)}" alt="${esc(g.alt)}" width="600" height="600" loading="lazy" decoding="async" />
              <span class="tag">${esc(g.tag)}</span>
            </button>
          </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <section class="section" id="equipo">
      <div class="wrap">
        ${sectionHead('03', team.title, team.subtitle)}
        <ul class="team">
          ${team.members
            .map(
              (t) => `
          <li class="member reveal">
            <div class="member-photo"><img src="${esc(t.photo)}" alt="Retrato de ${esc(t.name)}" width="600" height="720" loading="lazy" decoding="async" /></div>
            <div class="member-info">
              <span class="member-role">${esc(t.role)}</span>
              <h3>${esc(t.name)}</h3>
              <p>${esc(t.specialty)}</p>
            </div>
          </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <!-- OPINIONES: DATOS DE DEMOSTRACIÓN (no son reseñas reales). Ver src/data.js -->
    <section class="section section-alt" id="opiniones" data-demo="true">
      <div class="wrap">
        ${sectionHead('04', reviews.title, reviews.subtitle)}
        <ul class="reviews">
          ${reviews.items
            .map(
              (r) => `
          <li class="review reveal"${r.demo ? ' data-demo="true"' : ''}>
            <div class="stars" role="img" aria-label="${r.rating} de 5 estrellas">${Array.from({ length: 5 }, (_, i) => `<span class="${i < r.rating ? 'on' : ''}">${icons.star}</span>`).join('')}</div>
            <blockquote>“${esc(r.text)}”</blockquote>
            <cite>${esc(r.name)}</cite>
          </li>`
            )
            .join('')}
        </ul>
        <p class="demo-note">${esc(reviews.demoNotice)}</p>
      </div>
    </section>

    <section class="section" id="contacto">
      <div class="wrap">
        ${sectionHead('05', contact.title)}
        <div class="contact-grid">
          <div class="contact-info reveal">
            <h3>${icons.clock}<span>Horario</span></h3>
            <table class="hours">
              <tbody>
                ${contact.hours
                  .map(
                    (h) => `<tr data-day="${h.day}"><th scope="row">${esc(h.label)}</th><td${h.time === 'Cerrado' ? ' class="closed"' : ''}>${esc(h.time)}</td></tr>`
                  )
                  .join('\n                ')}
              </tbody>
            </table>
            <h3>${icons.pin}<span>Dirección</span></h3>
            <address>
              ${esc(b.address)}<br />${esc(b.postalCode)} ${esc(b.city)}<br />${esc(b.region)}
            </address>
            <p class="small-note">${esc(contact.addressNote)}</p>
            <h3>${icons.phone}<span>Teléfono</span></h3>
            <p><a class="link" href="tel:+${esc(b.whatsapp)}">${esc(b.phoneDisplay)}</a> <span class="small-note">(de ejemplo)</span></p>
            <div class="contact-cta">
              <a class="btn btn-gold" href="${wa}" target="_blank" rel="noopener">${icons.whatsapp}<span>${esc(buttons.book)}</span></a>
              <a class="btn btn-ghost" href="${esc(mapsLink)}" target="_blank" rel="noopener">${esc(buttons.directions)}</a>
            </div>
          </div>
          <div class="map reveal">
            <iframe title="Mapa de ejemplo de la ubicación" src="${esc(mapSrc)}" loading="lazy" referrerpolicy="no-referrer"></iframe>
            <span class="map-label">Mapa de ejemplo</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <a class="logo" href="#inicio" aria-label="${esc(b.name)}, volver arriba">
        <span class="logo-mark" aria-hidden="true">F</span>
        <span class="logo-text">${esc(b.shortName)}</span>
      </a>
      <div class="socials" aria-label="Redes sociales (de ejemplo)">${socialLinks}</div>
      <p class="credit">${esc(footer.credit)} <a href="${esc(footer.creditUrl)}" target="_blank" rel="noopener">${esc(footer.creditName)}</a></p>
      <p class="disclaimer">${esc(footer.disclaimer)}</p>
    </div>
  </footer>

  <a class="wa-float" href="${wa}" target="_blank" rel="noopener" aria-label="${esc(buttons.whatsappFloat)}">${icons.whatsapp}</a>

  <dialog class="lightbox" data-lightbox aria-label="Imagen ampliada">
    <img alt="" />
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Cerrar">${icons.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="prev" aria-label="Anterior">${icons.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="next" aria-label="Siguiente">${icons.next}</button>
  </dialog>`
}

export function renderPage(html) {
  return html
    .replace('<html lang="es">', `<html lang="${d.site.lang}">`)
    .replace('<!--head-->', head())
    .replace('<!--app-->', body())
}
