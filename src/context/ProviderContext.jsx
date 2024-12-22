import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
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

    const authInfo = {
        user,
        loading,
        setLoading,
        handleEmailRegister,
        setNameAndPhoto
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default ProviderContext;