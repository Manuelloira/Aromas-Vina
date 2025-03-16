// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa Firebase Auth
import { getFirestore } from "firebase/firestore"; // Importa Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB_y89V7fseqKGz_PexDPRx94VqpwFOkI0",
  authDomain: "tienda-online-ee8e4.firebaseapp.com",
  databaseURL: "https://tienda-online-ee8e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tienda-online-ee8e4",
  storageBucket: "tienda-online-ee8e4.firebasestorage.app",
  messagingSenderId: "57373704538",
  appId: "1:57373704538:web:115651a4cfb02e2112f363",
  measurementId: "G-RZP86DERRH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Inicializa Firebase Auth
const db = getFirestore(app); // Inicializa Firestore

export { auth, app }; // Exporta las instancias
export { db }; // Exporta db para usarlo en otros archivos
