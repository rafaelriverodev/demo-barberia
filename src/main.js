// Interacciones mínimas: barra superior, aparición al hacer scroll,
// día de hoy en el horario y visor de la galería.

// Barra superior con fondo al hacer scroll
const topbar = document.querySelector('[data-topbar]')
const onScroll = () => topbar.classList.toggle('is-scrolled', window.scrollY > 40)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

// Aparición suave de bloques (se desactiva con prefers-reduced-motion en CSS)
const reveals = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal')
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  )
  reveals.forEach((el) => io.observe(el))
}

// Resaltar el día de hoy en el horario
const today = new Date().getDay()
const row = document.querySelector(`.hours tr[data-day="${today}"]`)
if (row) {
  row.classList.add('today')
  row.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="today-tag">Hoy</span>')
}

// Visor de imágenes de la galería
const dialog = document.querySelector('[data-lightbox]')
const items = [...document.querySelectorAll('.gallery-item')]
if (dialog && items.length && typeof dialog.showModal === 'function') {
  const img = dialog.querySelector('img')
  let current = 0
  const show = (i) => {
    current = (i + items.length) % items.length
    const src = items[current]
    img.src = src.dataset.full
    img.alt = src.querySelector('img').alt
  }
  items.forEach((btn, i) =>
    btn.addEventListener('click', () => {
      show(i)
      dialog.showModal()
    })
  )
  dialog.addEventListener('click', (e) => {
    const action = e.target.closest('[data-lb]')?.dataset.lb
    if (action === 'close' || e.target === dialog) dialog.close()
    if (action === 'prev') show(current - 1)
    if (action === 'next') show(current + 1)
  })
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1)
    if (e.key === 'ArrowRight') show(current + 1)
  })
  dialog.addEventListener('close', () => items[current].focus())
}
