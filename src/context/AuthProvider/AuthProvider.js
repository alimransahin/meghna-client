import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        localStorage.removeItem('secret_token');
        return signOut(auth);
    }
    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const authInfo = { createUser, signInUser, signOutUser, googleSignIn, user, loading, error, setError, setLoading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;