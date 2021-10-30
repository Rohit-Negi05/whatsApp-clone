import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBjh_BZ0VCJoM6qXpebQSoMpU0QriQhcZ0",
    authDomain: "whats-app-clone-d85a5.firebaseapp.com",
    projectId: "whats-app-clone-d85a5",
    storageBucket: "whats-app-clone-d85a5.appspot.com",
    messagingSenderId: "1095250001910",
    appId: "1:1095250001910:web:8f65df2a373ddeb16d11d7",
    measurementId: "G-HXYEPME2KP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;