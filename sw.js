self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('ia-pro-v1').then(function (cache) {
      return cache.addAll(['/', '/index.html', '/manifest.json', '/favicon.svg']);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
