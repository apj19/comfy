import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5cAQmmb7Ci3YcsaGCcZn4KvLMiot7uo8",
  authDomain: "comfy-962f2.firebaseapp.com",
  projectId: "comfy-962f2",
  storageBucket: "comfy-962f2.appspot.com",
  messagingSenderId: "384861772820",
  appId: "1:384861772820:web:553a68e6a03d3a84f8db01",
  measurementId: "G-R04K0Z6YEP",
};

const firebaseapp = initializeApp(firebaseConfig);

export {firebaseapp};