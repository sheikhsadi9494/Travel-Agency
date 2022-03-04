import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.cofig";


const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeFirebase;