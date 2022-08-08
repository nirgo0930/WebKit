import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD9NkA2OgB6BxXwRiQbiADxJRi_ZYawm_Y",
    authDomain: "webkit-44cf8.firebaseapp.com",
    projectId: "webkit-44cf8",
    storageBucket: "webkit-44cf8.appspot.com",
    messagingSenderId: "805334426042",
    appId: "1:805334426042:web:c6b837751601bfc1233d83",
    measurementId: "G-0JCH1LF2LS"
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const storageService = firebase.storage();
export const dbService = firebase.firestore();