import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/CreateAccount.css';
import '../../styles/Login.css';
import { useAuth } from '../../context/AuthContext';
import loginImage from '../../assets/login-banner.png';
//import partnersImage from '../../assets/partners.png';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        login(); 
        navigate('/'); 
    };

    return (        
        <div className="auth-wrapper">
            <div className="auth-image-section">
                <img src={loginImage} alt="Login Visual" />
            </div>

            <div className="auth-form-section">
                <h2>Login to Explore Courses</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your Email Address" required />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password" required />

                    <div className="auth-remember">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>

                    <button type="submit">Login</button>

                    <div className="auth-footer">
                        <Link to="/signup">Don’t have an account? Create One</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;