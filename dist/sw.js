/// adding event listener
// self inside service worker refere to service worker itself
self.addEventListener('install', event => {
  console.log('service worker has been installed')
})
