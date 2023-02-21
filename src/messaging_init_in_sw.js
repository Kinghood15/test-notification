import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
import { toast } from 'react-toastify';

const firebaseConfig = {
  // apiKey: "AIzaSyAaMVUNQ96DWvir9kqpqYNZEh93x7SFz3A",
  // authDomain: "test-notification-80d1d.firebaseapp.com",
  // projectId: "test-notification-80d1d",
  // storageBucket: "test-notification-80d1d.appspot.com",
  // messagingSenderId: "456487913471",
  // appId: "1:456487913471:web:a24bfc441e570bc5d7c9ca",
  // measurementId: "G-DY5P73B4ZY"
  apiKey : "AIzaSyDDHZF8hXlJ7JlI3jnw79MMt0wWLVUpMWc" , 
  authDomain : "flutter-fcm-71c08.firebaseapp.com" , 
  projectId : "flutter-fcm-71c08" , 
  storageBucket : "flutter-fcm-71c08.appspot.com" , 
  messagingSenderId : "247399280756" , 
  appId : "1:247399280756:web:fc3e9dc658e1e0b6a1e121" , 
  measurementId : "G-BFDKWKBMRX" 
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const messaging = getMessaging(app);
      console.log("analytics", analytics)
      getToken(messaging, {
        vapidKey:
          "BATbow-QkimfB_D1T1N6kMJHPzQFtAP3lbdEoAvJKvCm5p9Ey5lIY-BJKneOD5y2aOOIQf10kBOzNPOV11MEEv0",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}
const CustomToast = ({ title, content }) => (
  <div>
    <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</div>
    <div>{content}</div>
  </div>
);

function receiveMessage() {
  // [START messaging_receive_message]
  // Handle incoming messages. Called when:
  // - a message is received while the app has focus
  // - the user clicks on an app notification created by a service worker
  //   `messaging.onBackgroundMessage` handler.
  const { getMessaging, onMessage } = require("firebase/messaging");
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    toast.info(<CustomToast title={payload.notification.title} content={payload.notification.body} />, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // toast("I cannot be duplicated !", {
    //   toastId: 13
    // });
    // ...
  });
  // [END messaging_receive_message]
}
requestPermission();
receiveMessage();