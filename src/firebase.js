import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_XXiH366bJpot34Du_rByvjbnjckG9Mw",
  authDomain: "chatapp3-bda88.firebaseapp.com",
  projectId: "chatapp3-bda88",
  storageBucket: "chatapp3-bda88.appspot.com",
  messagingSenderId: "563678926959",
  appId: "1:563678926959:web:190e8b304c5bd8e909959a",
  measurementId: "G-EB012SS9HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };