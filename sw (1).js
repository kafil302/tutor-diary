 const cacheName = 'tutor-diary-v2'; // ভার্সন পরিবর্তন করুন (v1 থেকে v2)
const assets = [
  '/',
  '/index-3.html',
  '/index-4.html',
  '/manifest.json'
  // আপনার অন্যান্য CSS বা JS ফাইল থাকলে এখানে যোগ করুন
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// পুরনো ক্যাশ ডিলিট করার কোড (এটি খুব জরুরি)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});
