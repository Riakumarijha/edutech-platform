import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CreateAccount.css';
import signupImage from '../../assets/signup-banner.png';
import partnersImage from '../../assets/partners.png';

const CreateAccount = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={signupImage} alt="signup" />
      </div>
      <div className="right-section">
        <div className="form-box">
          <img src={partnersImage} alt="Partner" />
          <h2>Create New Account</h2>
          <br />
          <br />
          <form>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your Email Address"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              required
            />
            <button type="submit">Sign Up</button>
            <p className="signup">
              Already have an account?{' '}
              <Link to="/login">Login Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;


