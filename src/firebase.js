
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCqMEjTsvgqhiDLxNN4KgmvaJbInZ8t9HE",
  authDomain: "review-system-74ce7.firebaseapp.com",
  projectId: "review-system-74ce7",
  storageBucket: "review-system-74ce7.appspot.com",
  messagingSenderId: "1056695688696",
  appId: "1:1056695688696:web:86a00c773d2f8ef188ca0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();