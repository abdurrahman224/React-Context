import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {

const { User } = useContext(AuthContext);

  return (
    <div>
      <h2>My Profile</h2>
      <h2>{User&& <h2> MY Name  :  { User?.displayName}</h2> }</h2>
    </div>
  );
};

export default Profile;<h2>My Pro</h2>