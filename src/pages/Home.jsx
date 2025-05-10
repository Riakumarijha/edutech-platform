import React from 'react';
import '../styles/home.css';
import heroImg from '../assets/hero-illustration.png'; // use your actual image

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-left">
                <h1>Choose your path. Grow your career.</h1>
                <p>
                    Expert-led programs. Job-ready certification.<br />
                    10,000+ ways to Grow
                </p>
                <div className="home-buttons">
                    <button className="btn-enroll">Enroll Now</button>
                    <button className="btn-outline">Explore Courses</button>
                </div>
            </div>
            <div className="home-right">
                <img src={heroImg} alt="Learning Illustration" />
            </div>
        </div>
    );
};

export default Home;
