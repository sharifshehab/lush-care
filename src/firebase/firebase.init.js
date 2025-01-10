// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
    /*     apiKey: "AIzaSyCG49vy5aASDShqIglAjvgUB-4-pQ1P0pQ",
        authDomain: "lush-care-f2f32.firebaseapp.com",
        projectId: "lush-care-f2f32",
        storageBucket: "lush-care-f2f32.firebasestorage.app",
        messagingSenderId: "202004003816",
        appId: "1:202004003816:web:512600c0af5e842b04c25d"
        ------ */
    
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
