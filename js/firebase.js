//Configuração REAL do Firebase:
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
