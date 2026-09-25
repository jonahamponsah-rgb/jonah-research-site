const assert = require('node:assert/strict');
const base = process.env.CHECK_BASE || 'http://127.0.0.1:3001';
const origin = 'https://jonahamponsah.com';
(async () => {
  async function get(path) { const r = await fetch(base + path); assert.equal(r.status, 200, path); return r; }
  const sitemap = await (await get('/sitemap.xml')).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(urls.length, 11);
  const internal = new Set(['/favicon.ico','/icon.svg','/apple-icon.png','/social/jonah-amponsah.png']);
  for (const url of urls) {
    assert.ok(url.startsWith(origin));
    const path = new URL(url).pathname;
    const html = await (await get(path)).text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    assert.equal(new URL(canonical).pathname, path);
    assert.equal(new URL(canonical).origin, origin);
    for (const name of ['og:title','og:description','og:url','og:image','twitter:card','twitter:title','twitter:description','twitter:image']) assert.ok(html.includes(`="${name}"`), `${path}: ${name}`);
    assert.ok(html.includes('summary_large_image'));
    const head = html.split('</head>')[0];
    assert.ok(!/localhost|127\.0\.0\.1|vercel\.app/.test(head), path + ': development URL in head');
    assert.ok(!/content="noindex/.test(head));
    for (const m of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) if (!m[1].startsWith('//')) internal.add(m[1].replace(/&amp;/g,'&'));
    if (path === '/') {
      const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1];
      assert.equal(JSON.parse(json)['@type'], 'Person');
      assert.equal(JSON.parse(json).url, origin);
    }
  }
  const robots = await (await get('/robots.txt')).text();
  assert.ok(robots.includes('Allow: /') && robots.includes(origin + '/sitemap.xml'));
  for (const path of internal) await get(path);
  const image = await get('/social/jonah-amponsah.png');
  assert.ok(image.headers.get('content-type').includes('image/png'));
  const resume = await get('/downloads/Jonah_Kwesi_Amponsah_Resume_Final.docx');
  assert.ok((await resume.arrayBuffer()).byteLength > 0);
  console.log(`PASS: ${urls.length} pages, ${internal.size} internal links/assets, canonical/OG/Twitter metadata, Person JSON-LD, sitemap, robots, icons, social image, and resume.`);
})().catch(e => { console.error(e); process.exit(1); });
