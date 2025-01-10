import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.init";
import useAxiosSecure from "../hooks/useAxiosSecure";


export const AuthContext = createContext();

const auth = getAuth(app);

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

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
        // setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            
            if (userEmail) {
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                })
            }else{
                axiosSecure.post('/logout', {})
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    })
            }
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