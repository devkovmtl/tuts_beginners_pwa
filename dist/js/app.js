// register the service worker
// check if the browser support service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/dist/sw.js') // register the service worker
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err))
}
