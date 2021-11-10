import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb6L6DMkq8Jaj-Qi0VUQJXjf6CMrAp_Uc",
    authDomain: "team-voting-app-494c3.firebaseapp.com",
    databaseURL: "https://team-voting-app-494c3-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-494c3",
    storageBucket: "team-voting-app-494c3.appspot.com",
    messagingSenderId: "37871777346",
    appId: "1:37871777346:web:e9715d521e85e35383dfdb"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();