importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDDHZF8hXlJ7JlI3jnw79MMt0wWLVUpMWc",
    authDomain: "flutter-fcm-71c08.firebaseapp.com",
    projectId: "flutter-fcm-71c08",
    storageBucket: "flutter-fcm-71c08.appspot.com",
    messagingSenderId: "247399280756",
    appId: "1:247399280756:web:8d885bee1288c6afa1e121",
    measurementId: "G-2L0PZD7YS8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});