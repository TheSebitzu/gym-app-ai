// service-worker.js

// Cache version
const CACHE_NAME = 'release-v1';

// Files to cache
const CACHE_ASSETS = [
  '/gym-app-ai/common/workout.css',
  '/gym-app-ai/common/manifest.json',
  '/gym-app-ai/common/index.js',
  '/gym-app-ai/common/icon-192x192.png',
  '/gym-app-ai/common/icon-512x512.png',
  '/gym-app-ai/ex.js',
  '/gym-app-ai/index.html',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files...');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', event => {
  // Remove old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old cache...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
