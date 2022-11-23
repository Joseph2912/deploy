import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDd7B1b7wRtqAl9NqyS3S7z26IPgfv-23g",
  authDomain: "aut-cabc5.firebaseapp.com",
  projectId: "aut-cabc5",
  storageBucket: "aut-cabc5.appspot.com",
  messagingSenderId: "684288096454",
  appId: "1:684288096454:web:700cf574e7d0cd540cffc7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const LogoutGoogle = () => {
  
    signOut(auth);
    <div>
    <h1>{localStorage.clear("name")}</h1>
    <h1>{localStorage.clear("email")}</h1>
    <img src={localStorage.clear("profilePic")} />
    
    </div>
    console.log("la sesion termino")
  };
  export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  export function logout() {
    return signOut(auth);
  }
  
  // Custom Hook
  export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }
