import React, { useContext, useState, useEffect } from 'react';
import * as Auth from 'firebase/auth';
import { auth } from "../firebase";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        Auth.createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return Auth.signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return Auth.signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = Auth.onAuthStateChanged(auth, user => {
          setCurrentUser(user);
          setLoading(false);
        });

        return unsubscribe;
    }, []);
    
    const value = {
        currentUser,
        signup,
        login,
        logout
    };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
