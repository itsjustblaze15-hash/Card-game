const CACHE="golden-pulls-v8-boss-team-turns";
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener("message",e=>{if(e.data&&e.data.type==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 const u=new URL(e.request.url);
 if(e.request.mode==="navigate"||u.pathname.endsWith("index.html")||u.pathname.endsWith("version.json")){
   e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));return;
 }
 e.respondWith((async()=>{const c=await caches.open(CACHE);const hit=await c.match(e.request);if(hit)return hit;const r=await fetch(e.request);if(r.ok&&u.origin===location.origin)c.put(e.request,r.clone());return r})());
});