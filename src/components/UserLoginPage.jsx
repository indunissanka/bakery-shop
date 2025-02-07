import React, { useState } from 'react';
import './UserLoginPage.css';

function UserLoginPage() {
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [address, setAddress] = useState('');

  const handleLogin = () => {
    alert('Login initiated!\n\nEmail: ' + email + '\nTelephone: ' + tel + '\nAddress: ' + address);
  };

  return (
    <div className="user-login-page">
      <h2>User Login</h2>
      <div className="user-login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="user-login-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Telephone:</label>
          <input
            type="tel"
            id="tel"
            placeholder="Your Telephone Number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className="user-login-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="user-login-input"
          />
        </div>
        <button onClick={handleLogin} className="user-login-button">Login</button>
      </div>
    </div>
  );
}

export default UserLoginPage;
