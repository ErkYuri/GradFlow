const CACHE_NAME = 'mygrad-v2.2'; // Toda vez que mudar o código, mude essa versão!
const assets = [
  './', 
  './index.html', 
  './style.css', 
  './app.js',
  './manifest.json', 
  './icon.png'        
];

// Instala o Service Worker e armazena os arquivos principais em cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    }).then(() => {
      // Força o SW novo a ativar imediatamente sem ficar esperando
      return self.skipWaiting(); 
    })
  );
});

// Limpa os caches antigos automaticamente do celular do usuário
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Faz o SW assumir o controle de todas as abas abertas imediatamente
      return self.clients.claim();
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