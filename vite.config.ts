import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { seo } from './src/lib/data'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const absolute = (urlOrPath: string) =>
  /^https?:\/\//.test(urlOrPath) ? urlOrPath : new URL(urlOrPath, seo.url).toString()

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'inject-seo',
      transformIndexHtml(html) {
        const lookup: Record<string, string> = Object.fromEntries(
          Object.entries(seo).map(([k, v]) => [k.toLowerCase(), v as string]),
        )
        // og:image must be absolute
        lookup.image = absolute(seo.image)

        return html.replace(/%SEO_(\w+)%/g, (_, key: string) => {
          const value = lookup[key.toLowerCase()]
          return value ? escapeHtml(value) : ''
        })
      },
    },
  ],
})
