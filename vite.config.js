import { defineConfig } from 'vite'

// Pinta el HTML a partir de src/data.js (ver src/render.js).
const renderFromData = {
  name: 'render-from-data',
  transformIndexHtml: {
    order: 'pre',
    async handler(html, ctx) {
      const mod = ctx.server
        ? await ctx.server.ssrLoadModule('/src/render.js')
        : await import('./src/render.js')
      return mod.renderPage(html)
    },
  },
  handleHotUpdate({ file, server }) {
    if (/src[\/](data|render)\.js$/.test(file)) {
      server.ws.send({ type: 'full-reload' })
      return []
    }
  },
}

export default defineConfig({ plugins: [renderFromData] })
