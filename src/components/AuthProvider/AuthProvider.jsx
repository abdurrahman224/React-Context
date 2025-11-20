import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { createContext } from "react";
import { auth } from "../../../firebase-init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

  const name = "Abdur Rahman"
    const createUset =(email,password) =>{

   return createUserWithEmailAndPassword(auth,email,password)
}
  
  const AuthInfo = {
    name,
    createUset
  };



  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
