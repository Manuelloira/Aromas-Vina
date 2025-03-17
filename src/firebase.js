import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuración de Firebase desde variables de entorno
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

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de la base de datos
const db  = getDatabase(app);

// Obtén la instancia de autenticación
const auth = getAuth(app);

// Configura el proveedor de Google
const googleProvider = new GoogleAuthProvider();

// Exporta las instancias y funciones necesarias
export { db, auth, googleProvider, signInWithPopup };