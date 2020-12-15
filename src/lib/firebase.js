import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAaZ2IrYgPoF0IiKvSQlwP_R3jwB2GBwCw",
  authDomain: "btc-testdev-20201202.firebaseapp.com",
  databaseURL: "https://btc-testdev-20201202.firebaseio.com",
  projectId: "btc-testdev-20201202",
  storageBucket: "btc-testdev-20201202.appspot.com",
  messagingSenderId: "91043337675",
  appId: "1:91043337675:web:a8b635d108b2c8b4aa124e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
