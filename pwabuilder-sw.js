const CACHE_NAME = 'julisha-cache-v2';

// 1. Files to Cache for Offline Support
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/script.js',
  '/papers.json',
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => console.log("Offline and resource not cached."))
  );
});

// ==========================================
// 2. BACKGROUND SYNC
// ==========================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    console.log('Background Sync triggered! Internet connection restored.');
    // Logic to send failed contact form submissions would go here
  }
});

// ==========================================
// 3. PUSH NOTIFICATIONS
// ==========================================
self.addEventListener('push', (event) => {
  console.log('Push notification received!');
  
  // Default message if the server doesn't send a specific payload
  let body = 'New revision papers have been added to Julisha Library!';
  if (event.data) {
    body = event.data.text();
  }

  const options = {
    body: body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100],
    data: { url: '/' },
    actions: [
      { action: 'open_app', title: 'Open Library' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('📚 Julisha Library', options)
  );
});

// Handles what happens when the user taps the notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  // Opens the app when clicked
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, open a new window
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
