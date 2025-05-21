import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';
import { useAuth } from '../../context/AuthContext';
import signupImage from '../../assets/signup-banner.png';
import partnersImage from '../../assets/partners.png';

const Signup = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        //const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Signup successful!");

        login();
        navigate('/');
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-image-section">
                <img src={signupImage} alt="Signup Banner" />
            </div>

            <div className="auth-form-section">
                <div className="partner-section">
                    <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>We Have Collaborated With</h3>
                    <img src={partnersImage} alt="Partner Logos" className="partners-image" />
                </div>

                <h2>Create New Account</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter your Email Address" required />

                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your Password" required />

                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="Enter your Password Again" required />

                    <button type="submit">Create</button>

                    <p style={{ marginTop: '15px' }}>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default Signup;