import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIO7MvdR-BDmtWEHD6ejmww2m21dylRE",
  authDomain: "firbase-react-8a1d1.firebaseapp.com",
  databaseURL: "https://firbase-react-8a1d1-default-rtdb.firebaseio.com",
  projectId: "firbase-react-8a1d1",
  storageBucket: "firbase-react-8a1d1.appspot.com",
  messagingSenderId: "149226226669",
  appId: "1:149226226669:web:4883ace496eb90f8eddde4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;