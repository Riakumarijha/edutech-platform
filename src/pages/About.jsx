import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>Empowering Students Through<br />Quality Education</h1>
                <p>
                    Welcome to Revipra Dynamics, your destination for high-quality, accessible online education.<br />
                    We are driven by a simple but powerful mission: to make learning easy, affordable, and impactful for everyone.
                    In a world that's rapidly changing, we believe learning should never stop.
                </p>
                <p>
                    Our platform offers a wide variety of online courses in technology, business, design, data science, and more.
                    Each course is carefully designed by experienced instructors and industry experts.
                </p>
                <p>
                    Whether you're a beginner starting from scratch or a professional upgrading your skills, we've got you covered.
                    Our content is interactive, practical, and real-world focused, helping you apply what you learn immediately.
                </p>
                <p>
                    We provide hands-on projects, quizzes, and assignments to reinforce learning through doing.
                    With flexible scheduling, you can study on your own schedule—anytime, anywhere.
                </p>
                <p>
                    We prioritize student success with personalized support, mentorship, and career-focused resources.
                    Your courses are regularly updated to match industry standards and employer expectations.
                </p>
                <p>
                    We believe in affordable education that doesn’t compromise on quality.
                    That’s why our pricing is transparent, with no hidden fees or subscriptions.
                </p>
                <p>
                    Over the years, thousands of students have trusted us to build their skills and transform their careers.
                    Many of our learners have gone on to land new jobs, promotions, and freelance opportunities.
                </p>
            </section>

            <section className="location-section">
                <h2>Our Location</h2>
                <ul className="location-details">
                    <li>1st sector, HSR Layout, Bangalore  Karnataka 560102</li>
                    <li>Working Hours: 9 AM - 5 PM</li>
                    <li>+91 6303251526</li>
                    <li>example@gmail.com</li>
                </ul>
            </section>

            <footer className="footer">
                <div className="footer-left">
                    <h3>Start Your Career With Us</h3>
                    <p>Courses and Internships for aspiring tech Students</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <div className="footer-right">
                    <h4>Contact Details</h4>
                    <p>+91 6303251526</p>
                    <p>example@gmail.com</p>
                </div>
            </footer>
        </div>
    );
};

export default About;
