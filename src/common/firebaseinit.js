import firebase from 'firebase'
import firebaseConfig from './fb'
firebase.initializeApp(firebaseConfig);
export const defaultDatabase = firebase.database();