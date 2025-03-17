// Importa las funciones necesarias desde los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Importa getDatabase para Realtime Database

// Configuración de Firebase
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
const analytics = getAnalytics(app);
const database = getDatabase(app); // Inicializa Realtime Database

// Exporta las instancias de Firebase para usarlas en otros archivos
export { app, analytics, database };