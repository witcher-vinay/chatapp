// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAdEctsV7dOxvI78WDAJBuF6INFDGs-cek",
    authDomain: "whats-app-clone-361e3.firebaseapp.com",
    projectId: "whats-app-clone-361e3",
    storageBucket: "whats-app-clone-361e3.appspot.com",
    messagingSenderId: "443032867047",
    appId: "1:443032867047:web:79bd6d83ac73d5093ad242",
    measurementId: "G-PST12K2KD3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;