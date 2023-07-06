import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config.js";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ displayName: "tamanna" });
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true)

    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    setLoading(true)

    return signOut(auth);
  };
  const createUser = (email, password) => {
    setLoading(true)

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginEmailPass = (email, password) => {
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true)
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { user, googleLogin, logout, createUser, loginEmailPass, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
