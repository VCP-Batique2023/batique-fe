import { useContext, useState, useEffect, createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { auth } from '@/modules/firebase_config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sessionMode = () => {
    setPersistence(auth, browserSessionPersistence)
  }

  const userSignOut = () => {
    return signOut(auth);
  };

  const userResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsloading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    userSignIn,
    userSignUp,
    userSignOut,
    userResetPassword,
    sessionMode,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
