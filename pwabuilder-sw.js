
// 2. Cache Name (Fixed the capital 'C' and updated to v5)
const CACHE_NAME = 'julisha-cache-v5';

// 3. Essential Files to Cache
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/script.js',
  '/papers.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});

// 4. The strict Offline Fallback PWABuilder needs
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});

// 5. Background Sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    console.log('Background Sync triggered! Internet connection restored.');
  }
});

// 6. Periodic Sync
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-papers') {
    console.log('Periodic Sync triggered! Fetching new papers...');
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.add('/papers.json'))
    );
  }
});
