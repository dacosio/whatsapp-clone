import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApw1vk8CMazxp6e72v9jWRUv6ejXrM-eQ",
    authDomain: "whatasapp-mern.firebaseapp.com",
    databaseURL: "https://whatasapp-mern.firebaseio.com",
    projectId: "whatasapp-mern",
    storageBucket: "whatasapp-mern.appspot.com",
    messagingSenderId: "881161140560",
    appId: "1:881161140560:web:a0cd9a6cba8ed52109d455"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;