const C='operator-8d0a941184',SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png','icon-maskable-512.png','ph-bag.jpg','ph-bench.jpg','ph-cover.jpg','ph-gear.jpg','ph-guard.jpg','ph-medit.jpg','ph-pads.jpg','ph-range.jpg','ph-run.jpg','ph-spar.jpg','ph-team.jpg','ph-wraps.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
  if(u.origin===location.origin){e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(n=>{const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp));return n})).catch(()=>caches.match('index.html')));return}
  if(u.hostname==='i.ytimg.com'){e.respondWith(caches.open(C+'-img').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(n=>{c.put(e.request,n.clone());return n}))));}});
