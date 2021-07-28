import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCUSYfQl_fCNwfiV9ELAtw4pezKKoXBM6Y",
    authDomain: "app-71b43.firebaseapp.com",
    projectId: "app-71b43",
    storageBucket: "app-71b43.appspot.com",
    messagingSenderId: "1089655153617",
    appId: "1:1089655153617:web:5109c17ad33a48575676f0",
    measurementId: "G-583YL1FD24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth};