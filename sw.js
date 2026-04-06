// Service Worker básico para permitir la instalación de la PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // No cacheamos nada por ahora para asegurar datos frescos
});