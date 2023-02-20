import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = { 
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

      const messaging = getMessaging(app);
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

requestPermission();
