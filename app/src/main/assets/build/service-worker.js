"use strict";var precacheConfig=[["./index.html","0bb27224485b9b768a145449ca593f33"],["./static/css/main.2942f616.css","f930d2e3b372654ee83f5a351f96d054"],["./static/js/main.354a228a.js","d88444c01e5790e23af006bb89f3d74f"],["./static/media/MaterialIcons-Regular.012cf6a1.woff","012cf6a10129e2275d79d6adac7f3b02"],["./static/media/MaterialIcons-Regular.570eb838.woff2","570eb83859dc23dd0eec423a49e147fe"],["./static/media/MaterialIcons-Regular.a37b0c01.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["./static/media/NotoSans-cryllic-ext.06fb67f3.woff2","06fb67f36720a4fe42e552b98ec2d12b"],["./static/media/NotoSans-cryllic.e9a31c60.woff2","e9a31c6077df38a9586caf99eb41c8d7"],["./static/media/NotoSans-devanagari.216ed13d.woff2","216ed13d07b5ef41d15fbd3d9109abe7"],["./static/media/NotoSans-greek-ext.a54e5ea5.woff2","a54e5ea565e7e746d334d0e6e458da58"],["./static/media/NotoSans-greek.429e1edc.woff2","429e1edc269c1bdb979787c08a59a06c"],["./static/media/NotoSans-latin-ext.3b3ad513.woff2","3b3ad513d5a7cebc9b982340e1fdeef1"],["./static/media/NotoSans-latin.85486c16.woff2","85486c163ae98867f1372ca48442a118"],["./static/media/NotoSans-vietnamese.31f24e03.woff2","31f24e0386f9500100ea4d3bb6f3a8ef"],["./static/media/adminAudio.d1e40a11.webm","d1e40a1172fe4462d515c9f3f2c9df19"],["./static/media/default.977a94c0.jpg","977a94c01483ca96f4414945914fae4a"],["./static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["./static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["./static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["./static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["./static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["./static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["./static/media/internet_error.cf87055c.png","cf87055ccfb4df5848f95d769a022aa8"],["./static/media/jas_Sketch_Medium.b44df297.jpg","b44df297f1f28062c9e57e4f47c68225"],["./static/media/jhn_Picker.279e880c.jpg","279e880c3f11bf0e1f7f09792f26dd6b"],["./static/media/jhn_Sketch_Medium.ef16fb6c.jpg","ef16fb6cf8dfbd4b71688d0533cb2315"],["./static/media/loadingRing.16fc90df.svg","16fc90dfdea83c4e4eaddaaee848ebcd"],["./static/media/luk_Picker.bafa053d.jpg","bafa053d94df56a472a10616b62e5a3f"],["./static/media/luk_Sketch_Medium.79d13fc6.jpg","79d13fc6c292d31fbf486b5880cfc72c"],["./static/media/mat_Sketch_Medium.0e9d6b0f.jpg","0e9d6b0f5147041e00b8797f39fa22ac"],["./static/media/mrk_Picker.5c594613.jpg","5c594613b7299b707c6c349d72037f52"],["./static/media/mrk_Sketch_Medium.cb6a6e50.jpg","cb6a6e50f13b18bbad8fa9a167152c83"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});