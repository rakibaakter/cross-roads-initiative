// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChM6w07puaETbg6zxCyPvKERGjzW0osec",
  authDomain: "cross-road-initiative.firebaseapp.com",
  projectId: "cross-road-initiative",
  storageBucket: "cross-road-initiative.appspot.com",
  messagingSenderId: "682481964606",
  appId: "1:682481964606:web:408553a7cd3e619bbee36f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
