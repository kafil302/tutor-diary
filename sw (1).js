const CACHE_NAME = 'tutor-diary-v2';

// সব দরকারি ফাইল cache করো
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ইনস্টলের সময় সব ফাইল cache করো
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// পুরনো cache মুছো, নতুনটা চালু করো
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Cache-first strategy:
// আগে cache থেকে দাও, না পেলে network থেকে আনো এবং cache করো
self.addEventListener('fetch', e => {
  // শুধু GET request handle করো
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      // cache-এ আছে?
      const cached = await cache.match(e.request);
      if (cached) {
        // background-এ নতুন version আনার চেষ্টা করো
        fetch(e.request).then(fresh => {
          if (fresh && fresh.ok) cache.put(e.request, fresh.clone());
        }).catch(() => {});
        return cached; // cache থেকেই দাও (অফলাইনেও কাজ করবে)
      }

      // cache-এ নেই — network থেকে আনো
      try {
        const fresh = await fetch(e.request);
        if (fresh && fresh.ok) cache.put(e.request, fresh.clone());
        return fresh;
      } catch {
        // network-ও নেই — index.html দাও
        return cache.match('./index.html');
      }
    })
  );
});

// Background sync: অনলাইন হলে cache রিফ্রেশ করো
self.addEventListener('sync', e => {
  if (e.tag === 'cache-refresh') {
    e.waitUntil(
      caches.open(CACHE_NAME).then(cache =>
        Promise.all(ASSETS.map(url =>
          fetch(url).then(r => { if (r.ok) cache.put(url, r); }).catch(() => {})
        ))
      )
    );
  }
});
