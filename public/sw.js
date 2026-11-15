const CACHE_NAME = "tic-tac-toe-v1";
const APP_ROOT = new URL("./", self.registration.scope);
const APP_SHELL = [
  APP_ROOT.href,
  new URL("manifest.webmanifest", APP_ROOT).href,
  new URL("icons/icon-192.png", APP_ROOT).href,
  new URL("icons/icon-512.png", APP_ROOT).href,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        await cache.addAll(APP_SHELL);
        const page = await cache.match(APP_ROOT.href);
        const html = await page.text();
        const appAssets = Array.from(
          html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g),
          ([, asset]) => new URL(asset, APP_ROOT).href,
        );
        await cache.addAll(appAssets);
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("tic-tac-toe-") && cacheName !== CACHE_NAME,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      if (request.mode === "navigate") {
        try {
          const response = await fetch(request);
          if (response.ok) await cache.put(request, response.clone());
          return response;
        } catch {
          return (
            (await cache.match(request)) ||
            (await cache.match(APP_ROOT.href))
          );
        }
      }

      const cachedResponse = await cache.match(request);
      if (cachedResponse) return cachedResponse;

      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })(),
  );
});
