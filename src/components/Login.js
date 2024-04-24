import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    const { email, password } = formData;

    if (existingUsers[email] && existingUsers[email].password === password) {
      // Store the logged-in user's information in local storage
      localStorage.setItem('loggedInUser', JSON.stringify(existingUsers[email]));
      setLoginSuccess(true);
      setTimeout(() => {
        // Redirect to account-setting page after 2 seconds
        window.location.href = '/account';
      }, 1000);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Sign in to your PopX account</h2>
      <p>Enter your information below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="input-label"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
      {loginSuccess && (
        <div className="alert">Login successful! Redirecting to account setting page...</div>
      )}
    </div>
  );
};

export default Login;
