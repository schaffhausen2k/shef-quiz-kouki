// Legacy PWA support: always try the network first so new releases are visible.
const CACHE_NAME = "kouki-quiz-cache-network-v2";
self.addEventListener("install", event => { self.skipWaiting(); });
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("kouki-quiz-cache") && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  // App shell and question data must never be served from an obsolete PWA cache.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
