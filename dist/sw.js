/// adding event listener
// self inside service worker refere to service worker itself
self.addEventListener('install', event => {
  console.log('service worker has been installed')
})

// listen for the activate event from service worker!
self.addEventListener('activate', event => {
  console.log('service worker has been activated')
})

// fetch event occure whenever we try to grab something from server
self.addEventListener('fetch', event => {
  console.log('fetch event', event)
})
