import * as firebase from 'firebase/firebase'

const settings = {timestapsInSnapshot:true};

var firebaseConfig = {
  apiKey: "AIzaSyDyS0pCwaXHlfWzHH-MfhHsRVx-6rcGQu4",
  authDomain: "vuefire-9f5aa.firebaseapp.com",
  projectId: "vuefire-9f5aa",
  storageBucket: "vuefire-9f5aa.appspot.com",
  messagingSenderId: "653534321114",
  appId: "1:653534321114:web:06a4ca2b611dd63e7c08e3",
  measurementId: "G-MPVE1VCPFG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase;

    