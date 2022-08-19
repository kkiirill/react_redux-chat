import "firebase/auth";
import "firebase/compat/firestore";
import { getFirestore, updateDoc, doc, setDoc } from "@firebase/firestore";
import { app } from "../firebase";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const googlePopup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    if (result) {
      setDoc(doc(db, "users", result.user?.uid), {
        savedItems: []
      })
    }

    return result;
  } catch (err) {
    alert(err);
  }
};

export const addUserToFirestore = async (user: any) => { 
  const res = await 
}