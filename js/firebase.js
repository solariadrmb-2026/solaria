// IMPORTS FIREBASE
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

//Configuração REAL do Firebase:
// IMPORTS FIREBASE
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdL9LRgnuHn2jvzf8jL9wnoEaahs50j2w",
  authDomain: "solaria-smt.firebaseapp.com",
  projectId: "solaria-smt",
  storageBucket: "solaria-smt.firebasestorage.app",
  messagingSenderId: "546948445297",
  appId: "1:546948445297:web:d6cf54da562197b43cd7d0"
};

//Inicialização do Firebase:
const app = initializeApp(firebaseConfig);

//Serviços usados no projeto:
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

//Exporta para todo o site:
export { auth, db, storage };
