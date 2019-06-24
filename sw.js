if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "3fe3ccb7c83938a7e37264c5da657c27"
  },
  {
    "url": "logo.png",
    "revision": "d0cccd2cc17ed98c08d4367243c2551b"
  },
  {
    "url": "precache-manifest.9f4a8ffec0a3590efb9d6e07771ef264.js",
    "revision": "9f4a8ffec0a3590efb9d6e07771ef264"
  },
  {
    "url": "pwa.png",
    "revision": "334bdfc100e1362ccd8ab38f782dcc1d"
  },
  {
    "url": "pwa120.png",
    "revision": "beb90fa2d8c5e3c3c3cb93b4de9c89f5"
  },
  {
    "url": "pwa144.png",
    "revision": "1f665244d10b185f776bbf9e8e707e8a"
  },
  {
    "url": "pwa152.png",
    "revision": "4b338f4f69289031ec93c70f710b051e"
  },
  {
    "url": "pwa167.png",
    "revision": "2aec3f7507e423cd914376c4fcc6f553"
  },
  {
    "url": "pwa180.png",
    "revision": "9c8bed7a84a4cadda63f454520328330"
  },
  {
    "url": "pwa192.png",
    "revision": "7f21fc009369df9cf36f9dc21e134ff8"
  },
  {
    "url": "pwa512.png",
    "revision": "69fa8cf5fbdabb278d31d45961e5d539"
  },
  {
    "url": "service-worker.js",
    "revision": "59eb8db263c83cd7951a0c8410aa004b"
  },
  {
    "url": "static/css/main.34de6062.chunk.css",
    "revision": "d4920c6f452b98a23976e5f89e35158e"
  },
  {
    "url": "static/js/2.4d7aa1b9.chunk.js",
    "revision": "27060c4d6089f65bf53b6f50d5b26550"
  },
  {
    "url": "static/js/main.ef22ca41.chunk.js",
    "revision": "e6760b8acfa2a9d36fe2d2915f9f1429"
  },
  {
    "url": "static/js/runtime~main.95f38d26.js",
    "revision": "528e84532d8b7e59a8d34befbbfcf30e"
  }
]);
  
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
  
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }