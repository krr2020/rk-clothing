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
	measurementId: "G-MVBVKWLSF5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	try {
		return await batch.commit();
	} catch (error) {
		console.log(error.message);
	}
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
