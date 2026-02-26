/**
 * Generates public/sitemap.xml from the central data file.
 *
 * Must be run AFTER the SSR build step but BEFORE SSR cleanup.
 * Add to package.json build script between vite build --ssr and prerender.
 *
 * Usage: node scripts/generate-sitemap.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function generateSitemap() {
    const ssrPath = path.resolve(__dirname, '../dist-ssr/entry-server.js')

    if (!fs.existsSync(ssrPath)) {
        console.error('SSR build not found. Run "vite build --ssr" first.')
        process.exit(1)
    }

    const { getAllSitemapEntries } = await import(ssrPath)
    const entries = getAllSitemapEntries()

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map(
        (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
  </url>`
    )
    .join('\n')}
</urlset>
`

    const publicPath = path.resolve(__dirname, '../public/sitemap.xml')
    fs.writeFileSync(publicPath, xml)

    // Also write to dist/ so the deployed file matches what was just generated.
    // vite build copies public/ to dist/ before this script runs, so without
    // this second write the deployed sitemap would be one build behind.
    const distPath = path.resolve(__dirname, '../dist/sitemap.xml')
    if (fs.existsSync(path.dirname(distPath))) {
        fs.writeFileSync(distPath, xml)
        console.log(`  Generated sitemap.xml with ${entries.length} URLs → public/ and dist/`)
    } else {
        console.log(`  Generated sitemap.xml with ${entries.length} URLs → public/ only (dist/ not found)`)
    }
}

generateSitemap().catch((err) => {
    console.error('Sitemap generation failed:', err)
    process.exit(1)
})
