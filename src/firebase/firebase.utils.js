import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1t3JfG17PvwcNmsL6o0nIZiiuKxyRi10",
    authDomain: "crwn-db-6f850.firebaseapp.com",
    databaseURL: "https://crwn-db-6f850.firebaseio.com",
    projectId: "crwn-db-6f850",
    storageBucket: "crwn-db-6f850.appspot.com",
    messagingSenderId:"1099223194740",
    appId: "1:1099223194740:web:6ceea2ca3c1f99d3744521",
    measurementId: "G-8JS1N0H6PC"
  };
 
  firebase.initializeApp(config);
 
  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  
export default firebase;