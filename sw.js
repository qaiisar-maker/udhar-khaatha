// Home Khaata v6 — Service Worker
const CACHE = 'home-khaata-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
];

// Install: cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS).catch(() => {
        // Fonts may fail offline — ignore
        return cache.addAll(['./','./index.html','./manifest.json']);
      });
    })
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache first, then network
self.addEventListener('fetch', e => {
  // Skip non-GET and chrome-extension requests
  if (e.request.method !== 'GET') return;
  if (e.request.url.startsWith('chrome-extension')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback
        return caches.match('./index.html');
      });
    })
  );
});
