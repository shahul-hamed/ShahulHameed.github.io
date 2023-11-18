'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "1a1de9684175f20e94ec9aabb49dcdd1",
"assets/AssetManifest.smcbin": "21a9c56c8c6857650a7f54d572671478",
"assets/assets/font/poppins/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/font/poppins/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/font/poppins/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/font/poppins/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/font/poppins/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/images/about_me.png": "7e7f3be19e068208eace579f6e145acd",
"assets/assets/images/backend_dev.png": "fe56e2a36c868b8a91dbb468c0cc34bd",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/briefcase.png": "11da72f7a45ce3ee1ff3c5e767e1153f",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/freelancer.png": "ca0527a05bdbb840ba6305561d81e25c",
"assets/assets/images/frontend_dev.png": "9687a703fdda4a9ef0c2bd226b433777",
"assets/assets/images/header.png": "1eb775b988825688567b627312c6f40e",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/india.png": "04e90a60d2928388827cde3ad5bb248d",
"assets/assets/images/portfolio_01.jpg": "cb14c36145dfa51d7f24bf20d158af64",
"assets/assets/images/portfolio_02.jpg": "6c94ff5afc8935e2f4ede9a51aeca5ba",
"assets/assets/images/portfolio_03.jpg": "2001238db9a88d79c0c470fbf1c4dd5b",
"assets/assets/images/portfolio_04.png": "8301758e14260552837237aefbce3a8c",
"assets/assets/images/portfolio_05.jpg": "6cfb0f20b57a93fb0178c3f1db2e4a47",
"assets/assets/images/portfolio_06.jpg": "821fe0bf622259eb5f627d8093fb4cfb",
"assets/assets/images/portfolio_07.jpeg": "4415c446f1aedfae73f48c01d8d7bf62",
"assets/assets/images/portfolio_08.jpg": "9e8610be920bfa2ded9bd53e30bc808a",
"assets/assets/images/portfolio_09.jpg": "9f4e74e7c71965b93de90d540ce203d6",
"assets/assets/shahul_hameed_cv.pdf": "0e245c8c3c8f8f336d3e7e9c1f5250f3",
"assets/FontManifest.json": "347255c1ebf68081f99589205128e8ee",
"assets/fonts/MaterialIcons-Regular.otf": "ddb2392469ca686eaf2ff53bd7571745",
"assets/NOTICES": "0432bdc85001687738d4d50844193976",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/feather_icons/fonts/feather.ttf": "b5f4566bdaa6dfa10fad3bedb22f7ecf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d8d4306237845212974af924b1ab33d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8e0542a7d7eec9dbada78c8605db3ccd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/loader.gif": "dafa4436fac90d439006f6080703fcd8",
"icons/logo.png": "11da72f7a45ce3ee1ff3c5e767e1153f",
"icons/logo1.png": "1dcb780b91dde71f6dc0a9d7d628d94e",
"index.html": "1c206e9a6c0aa1d3ce2ce3cdb7468226",
"/": "1c206e9a6c0aa1d3ce2ce3cdb7468226",
"main.dart.js": "df58a12d132105eda61acf70b3f8948d",
"manifest.json": "cc42d444be5c7328b7ea47176e64b22f",
"version.json": "e5c3a2e7c6ad8ca9d4b1da1be392d211"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
