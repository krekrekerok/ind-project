// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKrWAHlmRnVil8p1H4efXpeDVZnaZu6zE",
  authDomain: "final-hackathon-ec891.firebaseapp.com",
  projectId: "final-hackathon-ec891",
  storageBucket: "final-hackathon-ec891.appspot.com",
  messagingSenderId: "615486148541",
  appId: "1:615486148541:web:34c49f11d0e3a28b930cd4",
  measurementId: "G-Z4BE5DCRHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getFirestore()