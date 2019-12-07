import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArZo_2H9WMcgTUPg9NmVwBWMas7IVGUGQ",
    authDomain: "e-commerce-test-da0f2.firebaseapp.com",
    databaseURL: "https://e-commerce-test-da0f2.firebaseio.com",
    projectId: "e-commerce-test-da0f2",
    storageBucket: "e-commerce-test-da0f2.appspot.com",
    messagingSenderId: "747100360633",
    appId: "1:747100360633:web:9c85747dfdc3f659b8f068",
    measurementId: "G-8BWE28ETJT"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const  createdAt = new Date();

        try { 
            await userRef.set({     
                displayName,
                email,
                createdAt,
                ...additionalData})
           
        }catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
