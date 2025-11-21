import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../../../firebase-init';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loder,setLoder] = useState(true)
  const name = 'Abdur Rahman';
  const createUset = (email, password) => {
    setLoder(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const sineInfo = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singOutUser = () => {
    setLoder(true)
     return signOut(auth)

 }


  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, curentUser => {
  //     console.log('Current User : ', curentUser);
  //     setUser(curentUser);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  const signWitheGoogle = () => {
  

    return signInWithPopup(auth, provider);
}


  useEffect((() => {
    const unSubscribe = onAuthStateChanged(auth, curentUser => {
      
      console.log("Currenet User : ", curentUser);
      setUser(curentUser),
        setLoder(false)
    })
    return () => {
      unSubscribe();

    }

  }),[])

  const AuthInfo = {
    name,
    loder,
    User,
    createUset,
    sineInfo,
    singOutUser,
    signWitheGoogle,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
