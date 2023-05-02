import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUserByGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const createUserByGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn =(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const logOut =()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUserByGoogle,
        createUserByGithub,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;