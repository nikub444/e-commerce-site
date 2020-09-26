import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBRhmbtL-NZAzMRpgzMkXAX1LQIaWyacXc",
  authDomain: "e-commerce-platform-db.firebaseapp.com",
  databaseURL: "https://e-commerce-platform-db.firebaseio.com",
  projectId: "e-commerce-platform-db",
  storageBucket: "e-commerce-platform-db.appspot.com",
  messagingSenderId: "1097584814160",
  appId: "1:1097584814160:web:414f53b1db50a15dd0c955",
  measurementId: "G-P2DZSM2XLH"
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
