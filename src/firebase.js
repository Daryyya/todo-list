import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCBuV9DKzsUvhSe6PG2TCg48EQHhntM37w",
  authDomain: "todo-list-9b1cf.firebaseapp.com",
  databaseURL: "https://todo-list-9b1cf-default-rtdb.firebaseio.com",
  projectId: "todo-list-9b1cf",
  storageBucket: "todo-list-9b1cf.appspot.com",
  messagingSenderId: "124562881801",
  appId: "1:124562881801:web:72b13ed757450814e627d8",
  measurementId: "G-1D0G40JFJ8"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebase);
