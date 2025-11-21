import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {  Navigate } from 'react-router-dom';

const PrivateRoutus = ({ children }) => {
  const { User, loder } = useContext(AuthContext);
  if (loder) {
    
    return <span className="loading loading-dots loading-xl"></span>;
  }
  if (User) {
    
    return children
  }
  return (
 
      <Navigate to="/Login"></Navigate>
    
  );
};

export default PrivateRoutus;