// CACHES NAMES
const staticCacheName = 'site-static'

// our array of assets
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/css/materialize.min.js',
  '/css/styles.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family="Material+Icons"'
]

/// adding event listener
// self inside service worker refere to service worker itself
self.addEventListener('install', event => {
  // console.log('service worker has been installed')
  // we are going to cache asset that we are not going to fetch too much and that are not going to change so much
  // wait until the promise is resolved
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Caching shell assets')
      // add item to the cache
      cache.addAll(assets)
    })
  )
})

// listen for the activate event from service worker!
self.addEventListener('activate', event => {
  console.log('service worker has been activated')
})

// fetch event occure whenever we try to grab something from server
self.addEventListener('fetch', event => {
  console.log('fetch event', event)
})
