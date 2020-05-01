import firebase from 'firebase/app'
import 'firebase/database'

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ7dHP4cc4-xMfetx21dWN532lFrJgnmk",
    authDomain: "noteapp-ac5ae.firebaseapp.com",
    databaseURL: "https://noteapp-ac5ae.firebaseio.com",
    projectId: "noteapp-ac5ae",
    storageBucket: "noteapp-ac5ae.appspot.com",
    messagingSenderId: "331562649080",
    appId: "1:331562649080:web:f724d970bdc7c9d8da420d"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase