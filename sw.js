const VERSION = 'v1.9.2-pwa-20261106-1';
const PREFIX = 'samsun-fc-goal-timer:' + self.registration.scope + ':';
const CACHE = PREFIX + VERSION;
const ASSETS = ['./', './index.html', './style.css', './app.js', './pwa.js', './manifest.webmanifest', './icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE).then(cache => cache.addAll(ASSETS.map(path => new Request(new URL(path, self.registration.scope), {cache: 'reload'}))))
));
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => event.waitUntil((async () => {
  const legacy = 'samsun-goal-v1-9-20261104';
  for (const key of await caches.keys()) {
    if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
    // Only remove the known old cache when it belongs to this exact scope.
    if (key === legacy) {
      const old = await caches.open(key);
      const entries = await old.keys();
      if (entries.length && entries.every(r => r.url.startsWith(self.registration.scope))) await caches.delete(key);
    }
  }
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  const key = event.request.mode === 'navigate' ? new URL('./index.html', self.registration.scope).href : event.request;
  event.respondWith(caches.open(CACHE).then(async cache => (await cache.match(key)) || fetch(event.request)));
});
