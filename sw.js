const CACHE_NAME = 'mygrad-v1';
const assets = ['./', './index.html', './style.css', './app.js'];

// Instala o Service Worker e armazena os arquivos principais em cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde às requisições usando o cache se o usuário estiver offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});