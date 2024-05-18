import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fasttype-424ac.firebaseapp.com",
  projectId: "fasttype-424ac",
  storageBucket: "fasttype-424ac.appspot.com",
  messagingSenderId: "574704424291",
  appId: "1:574704424291:web:5b45c08bbf99050b19af56"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()