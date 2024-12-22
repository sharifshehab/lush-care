import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.init";


export const AuthContext = createContext();

const auth = getAuth(app);

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const handleEmailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const setNameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const handleEmailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            // Sign-out successful.
            console.log('user log-out successfully');
        }).catch((error) => {
            // An error happened.
            console.log('there was an error while log-out');
        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        handleEmailRegister,
        setNameAndPhoto,
        handleEmailLogin,
        handleGoogleSignIn,
        handleLogOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default ProviderContext;