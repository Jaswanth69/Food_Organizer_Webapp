console.log('Service Worker loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log("push received...");
    self.registration.showNotification(data.title, {
        body: 'Notified...',
        icon: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    });
});