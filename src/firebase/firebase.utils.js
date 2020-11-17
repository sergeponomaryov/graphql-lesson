import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9f4EosLcG5B-K9j3B7JAWdvA26zIgicc",
    authDomain: "crwn-db-3a435.firebaseapp.com",
    databaseURL: "https://crwn-db-3a435.firebaseio.com",
    projectId: "crwn-db-3a435",
    storageBucket: "crwn-db-3a435.appspot.com",
    messagingSenderId: "523397237305",
    appId: "1:523397237305:web:db95c008424c0ca6c39be8"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
