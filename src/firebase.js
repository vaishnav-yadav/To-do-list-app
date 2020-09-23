// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAfyO7mRG1rlCj843O--oPDQM7OpAOMoKg",
//     authDomain: "todo-app-vy.firebaseapp.com",
//     databaseURL: "https://todo-app-vy.firebaseio.com",
//     projectId: "todo-app-vy",
//     storageBucket: "todo-app-vy.appspot.com",
//     messagingSenderId: "220793508741",
//     appId: "1:220793508741:web:27731a8e27e8410f45aaec",
//     measurementId: "G-T6HD5C847K"
//   };

import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

//connecting our project with firesbase
const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyAfyO7mRG1rlCj843O--oPDQM7OpAOMoKg",
    authDomain: "todo-app-vy.firebaseapp.com",
    databaseURL: "https://todo-app-vy.firebaseio.com",
    projectId: "todo-app-vy",
    storageBucket: "todo-app-vy.appspot.com",
    messagingSenderId: "220793508741",
    appId: "1:220793508741:web:27731a8e27e8410f45aaec",
    measurementId: "G-T6HD5C847K"
 

});

const db = firebaseApp.firestore();

export default db;

