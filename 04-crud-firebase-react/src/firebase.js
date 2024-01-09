import { initializeApp } from "firebase/app";
// import "firebase/firestore";
import "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJJNuU3QAOdzeGNgstUp9LtGxtg3WRwt0",
  authDomain: "sandwich-app-808be.firebaseapp.com",
  projectId: "sandwich-app-808be",
  storageBucket: "sandwich-app-808be.appspot.com",
  messagingSenderId: "986105410238",
  appId: "1:986105410238:web:1bbde6781349d4fb4364ef",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const firestore = firebaseApp.firestore();

export { auth };
