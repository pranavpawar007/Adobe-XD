import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to PopX</h1>
      <p>Get started by creating an account or login if you already have one.</p>
      <div className="button-container">
        <Link to="/register">
          <button className="create-account-button">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="login-button">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
