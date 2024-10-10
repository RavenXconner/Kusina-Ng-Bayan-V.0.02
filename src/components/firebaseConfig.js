// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication module
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV_AlUie9EXTB45HUCecr5iB65v5zJAIc",
  authDomain: "kusinangbayan-v-2.firebaseapp.com",
  projectId: "kusinangbayan-v-2",
  storageBucket: "kusinangbayan-v-2.appspot.com",
  messagingSenderId: "837132062073",
  appId: "1:837132062073:web:16df7004a14b1bc7cf33a8",
  measurementId: "G-DGYF1Z6XJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
