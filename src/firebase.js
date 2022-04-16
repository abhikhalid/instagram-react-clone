import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBED9yMDt1Yjv1ztgzl8Je02fuqTvlZmeA",
    authDomain: "instagram-clone-1b07d.firebaseapp.com",
    projectId: "instagram-clone-1b07d",
    storageBucket: "instagram-clone-1b07d.appspot.com",
    messagingSenderId: "1095924831810",
    appId: "1:1095924831810:web:a6939490010c565bcdffdb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth,storage };

// export default db;