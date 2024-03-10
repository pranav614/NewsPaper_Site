// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIEOQbAaFxe3ggkjUqpdFWj68YFtHYlg4",
  authDomain: "newspaper-site-2e012.firebaseapp.com",
  projectId: "newspaper-site-2e012",
  storageBucket: "newspaper-site-2e012.appspot.com",
  messagingSenderId: "396818040999",
  appId: "1:396818040999:web:923fbd1fe7351ce3e77382",
  measurementId: "G-M3QHFVFS5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();