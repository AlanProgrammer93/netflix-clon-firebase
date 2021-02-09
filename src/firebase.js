import firebase from 'firebase';

const firebaseConfig = {
  // AQUI DEBES PONER TUS CREDENCIALES DE FIREBASE
  // ESTAS CREDENCIALES PUEDEN SER ELIMINADAS
    apiKey: "AIzaSyCwRgxCDad8_INquo_MD8lzBTa5p_xCOHY",
    authDomain: "netflix-firebase-73ed6.firebaseapp.com",
    projectId: "netflix-firebase-73ed6",
    storageBucket: "netflix-firebase-73ed6.appspot.com",
    messagingSenderId: "248054789566",
    appId: "1:248054789566:web:063a6448358f0a775a75ef"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
  