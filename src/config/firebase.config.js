import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCB8qX3KwKTkQM7EAd3pg-tV9CMx3MitYQ",
  authDomain: "loja-525a3.firebaseapp.com",
  projectId: "loja-525a3",
  storageBucket: "loja-525a3.appspot.com",
  messagingSenderId: "624299768130",
  appId: "1:624299768130:web:6e4826b14bc29262f030db"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
