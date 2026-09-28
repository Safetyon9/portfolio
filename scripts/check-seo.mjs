import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { JSDOM } from 'jsdom';

// Inspect the deployed HTML without executing JavaScript: crawlers must get real content.
const output = new URL('../dist/portfolio/browser/', import.meta.url);
const read = (path) => readFileSync(new URL(path, output), 'utf8');
const document = new JSDOM(read('index.html')).window.document;
assert.equal(document.querySelectorAll('h1').length, 1);
assert.match(document.querySelector('h1').textContent, /Vincenzo Russo/);
assert.match(document.title, /Vincenzo Russo.*Full-Stack Developer/);
assert.ok(document.querySelector('meta[name="description"]')?.content);
assert.equal(document.querySelector('link[rel="canonical"]')?.href, 'https://vincenzorusso.me/');
for (const section of ['about', 'experience', 'projects', 'contact']) {
  assert.ok(document.querySelector(`#${section} h2`), `Missing heading: ${section}`);
}
assert.ok(document.querySelectorAll('#projects article').length >= 6, 'Projects are missing from static HTML');
assert.match(document.querySelector('#about').textContent, /Spring Boot/);
assert.match(document.querySelector('#contact').textContent, /vinrusso.dev@proton.me/);
const profile = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
assert.equal(profile.mainEntity.name, 'Vincenzo Russo');
assert.equal(profile.url, 'https://vincenzorusso.me/');
const sitemap = new JSDOM(read('sitemap.xml'), { contentType: 'text/xml' }).window.document;
assert.deepEqual([...sitemap.querySelectorAll('loc')].map((node) => node.textContent), [
  'https://vincenzorusso.me/',
  'https://vincenzorusso.me/privacy.html'
]);
assert.match(read('robots.txt'), /Sitemap: https:\/\/vincenzorusso\.me\/sitemap\.xml/);
assert.equal(read('CNAME').trim(), 'vincenzorusso.me');
const privacy = new JSDOM(read('privacy.html')).window.document;
assert.equal(privacy.querySelector('link[rel="canonical"]')?.href, 'https://vincenzorusso.me/privacy.html');
for (const image of document.querySelectorAll('img[src]')) {
  assert.ok(existsSync(new URL(image.getAttribute('src').replace(/^\//, ''), output)), 'Missing image asset');
  assert.ok(image.getAttribute('alt'), 'Missing image description');
}
console.log('SEO checks passed: prerendered content, metadata, structured data, sitemap and public assets.');
