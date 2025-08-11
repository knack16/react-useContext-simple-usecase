import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import '../App.css'; // Import CSS file

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
    setUserName('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        className="login-input"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
      />

      <button
        onClick={handleSubmit}
        className="login-button"
      >
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
