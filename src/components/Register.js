import React, { useState } from 'react';
import './Register.css'; // Import CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phoneNumber');

    if (
      Object.values(formData).every(value => value.trim() !== '') &&
      emailInput.checkValidity() &&
      phoneInput.checkValidity()
    ) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
      if (existingUsers[formData.email]) {
        alert('Email already exists');
      } else {
        existingUsers[formData.email] = formData;
        localStorage.setItem('users', JSON.stringify(existingUsers));
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          password: '',
          companyName: '',
          isAgency: ''
        });
        setRegistrationSuccess(true);
        setTimeout(() => {
          setRegistrationSuccess(false);
          window.location.href = '/';
        }, 1000);
      }
    } else {
      if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address');
      } else if (!phoneInput.checkValidity()) {
        alert('Please enter a valid phone number');
      } else {
        alert('Please fill out all fields');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Create Your PopX Account</h2>
      <form onSubmit={handleSubmit}>
        
        
        
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}" // Pattern for 10-digit phone number
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>





        <div className="form-group">
          <label>Are you an agency?</label>
          <div>
            <label>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      {registrationSuccess && (
        <div className="alert">Registration successful! Redirecting to home page...</div>
      )}
    </div>
  );
};

export default Register;
