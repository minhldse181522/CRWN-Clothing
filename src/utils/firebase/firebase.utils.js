import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBOqgZL2_oxQ70DqjsDM9UZ4jigleeAjM",
  authDomain: "crwn-clothing-db-39cc0.firebaseapp.com",
  projectId: "crwn-clothing-db-39cc0",
  storageBucket: "crwn-clothing-db-39cc0.appspot.com",
  messagingSenderId: "700006163601",
  appId: "1:700006163601:web:d21aa77ae0ab933b8e8b30",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error at created user" + error.message);
    }
  }
  return userDocRef;
};
