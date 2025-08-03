import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: '20vh',
        fontSize: '1.2rem',
        color: '#fff',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        Please login to continue.
      </div>
    );
  }

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '20vh',
      fontSize: '1.5rem',
      fontWeight: '500',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      Welcome, {user.userName}!
    </div>
  );
}

export default Profile;
