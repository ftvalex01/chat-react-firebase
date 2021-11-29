
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAsN6EOPztZcd5E7QpcvzNKJqw9-zk24NE",
  authDomain: "chat-react-97fc9.firebaseapp.com",
  projectId: "chat-react-97fc9",
  storageBucket: "chat-react-97fc9.appspot.com",
  messagingSenderId: "647909376484",
  appId: "1:647909376484:web:651030b61c8593fa54c7f1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db,auth,provider} 