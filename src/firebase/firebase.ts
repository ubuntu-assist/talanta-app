import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDMSgFjFjadOGkizFBbbJ0WhhRAsFUpGHg',
  authDomain: 'talantachain.firebaseapp.com',
  databaseURL: 'https://talantachain-default-rtdb.firebaseio.com',
  projectId: 'talantachain',
  storageBucket: 'talantachain.appspot.com',
  messagingSenderId: '102478035960',
  appId: '1:102478035960:web:880f773852a4fbafe3f40d',
  measurementId: 'G-7M74JL6M21',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { app, auth }
