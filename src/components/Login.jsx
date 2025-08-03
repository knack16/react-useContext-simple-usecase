import React, { useState,useContext } from 'react';
import UserContext from '../context/UserContext'

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    // Add your login logic here
    e.preventDefault()
    setUser({userName, password})
    setUserName('');
    setPassword('');
  };

  return (
    <div style={{
      maxWidth: '90%',
      width: '320px',
      margin: '10vh auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#fff',
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontSize: '1.5rem'
      }}>
        Login
      </h2>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '15px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          boxSizing: 'border-box'
        }}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          boxSizing: 'border-box'
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
