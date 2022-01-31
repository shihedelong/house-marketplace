// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHaeMrIPJUSDv9fkmhFlg1JJqXwmXZo-w',
  authDomain: 'house-marketplace-app-32af3.firebaseapp.com',
  projectId: 'house-marketplace-app-32af3',
  storageBucket: 'house-marketplace-app-32af3.appspot.com',
  messagingSenderId: '27998412461',
  appId: '1:27998412461:web:e3a7a8cd6805e39b20b024',
}

// Initialize Firebase
export const db = getFirestore()
