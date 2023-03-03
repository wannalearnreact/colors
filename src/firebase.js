// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC6VdWnLyRMYEpuWsxpCf9WOxjHBlhK4Hs',
    authDomain: 'colors-ae32f.firebaseapp.com',
    projectId: 'colors-ae32f',
    storageBucket: 'colors-ae32f.appspot.com',
    messagingSenderId: '133008487064',
    appId: '1:133008487064:web:e771c2d30eafe3987496ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
