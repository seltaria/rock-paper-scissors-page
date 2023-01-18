const staticCacheName = 'rps-app';
const assetUrls = [
  './index.html',
  './static/css/main.*.css',
  './static/js/main.*.js',
  // '../src/index.css',
  // '../src/index.js',
  // '../src/App.js',
  // '../src/store/reducers.js',
  // '../src/store/store-reducer.js',
  // '../src/components/Button.js',
  // '../src/components/Header.js',
  // '../src/components/Main.js',
  // '../src/components/Picked.js',
  // '../src/components/Rules.js',
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