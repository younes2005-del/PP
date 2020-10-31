import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSxYwFlPOLNpa29H2GKnw6gIO7ZDFXTy0",
    authDomain: "petit-pinceau.firebaseapp.com",
    databaseURL: "https://petit-pinceau.firebaseio.com",
    projectId: "petit-pinceau",
    storageBucket: "petit-pinceau.appspot.com",
    messagingSenderId: "780641979921",
    appId: "1:780641979921:web:1717910ad043c75425abb0",
    measurementId: "G-75DEM3MRV6"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()




export {db, auth, storage};