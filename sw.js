const CACHE_NAME = 'kasir-cache-v3';
self.addEventListener('install', e => { 
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['./index.html', './manifest.json', './unnamed.png']))); 
});
self.addEventListener('fetch', e => { 
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))); 
});
