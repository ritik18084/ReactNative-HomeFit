import firebase from "firebase";
import Config from "./config/keys";

const firebaseConfig = Config.firebaseConfig;
let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
