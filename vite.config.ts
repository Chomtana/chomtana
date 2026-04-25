import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { seo } from './src/lib/data'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'inject-seo',
      transformIndexHtml(html) {
        const lookup = Object.fromEntries(
          Object.entries(seo).map(([k, v]) => [k.toLowerCase(), v as string]),
        )
        return html.replace(/%SEO_(\w+)%/g, (_, key: string) => {
          const value = lookup[key.toLowerCase()]
          return value ? escapeHtml(value) : ''
        })
      },
    },
  ],
})
