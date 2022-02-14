// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNhFzuQbtNxewnLEFmkoqeFMbFbvbM1zk",
  authDomain: "rk-clothing.firebaseapp.com",
  projectId: "rk-clothing",
  storageBucket: "rk-clothing.appspot.com",
  messagingSenderId: "1045482053093",
  appId: "1:1045482053093:web:d07a8c46aad2730ac4e30c",
  measurementId: "G-MVBVKWLSF5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, addData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addData
      })
    } catch (error) {
      console.log('error while creating user', error.message)
    }

    return userRef;
  }
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

