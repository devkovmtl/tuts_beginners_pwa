/// adding event listener
// self inside service worker refere to service worker itself
self.addEventListener('install', event => {
  console.log('service worker has been installed')
})

// listen for the activate event from service worker!
self.addEventListener('activate', event => {
  console.log('service worker has been activated')
})
