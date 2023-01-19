const staticCacheName = 'rps-app';
const assetUrls = [
  '/',
  './index.html',
  './static/css/',
  './static/js/',
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetUrls);
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? await fetch(request);
}