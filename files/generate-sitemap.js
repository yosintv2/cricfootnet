const fetch = require('node-fetch');
const fs = require('fs');

async function generateSitemap() {
  try {
    const response = await fetch('https://yosintv-api.pages.dev/api/highlights.json');
    const matches = await response.json();
    const baseUrl = 'https://www.cricfoot.net/highlights.html?id=';
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.cricfoot.net/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>`;

    matches.forEach(match => {
      xml += `
  <url>
    <loc>${baseUrl}${match.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    xml += '\n</urlset>';

    fs.writeFileSync('sitemap.xml', xml);
    console.log('Sitemap generated successfully with ' + matches.length + ' matches.');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
