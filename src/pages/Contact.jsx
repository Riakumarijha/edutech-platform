import React from 'react';
import '../styles/contact.css';

import aiCTELogo from '../assets/aicte.png';
import iitLogo from '../assets/iit.png';
import startupIndia from '../assets/startup.png';
import wadhwani from '../assets/wadhwani.png';
import msme from '../assets/msme.png';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="collaboration-section">
                <h2>We Have Collaborated With</h2>
                <div className="partner-logos">
                    <img src={aiCTELogo} alt="AICTE" />
                    <img src={iitLogo} alt="IIT" />
                    <img src={startupIndia} alt="Startup India" />
                    <img src={wadhwani} alt="Wadhwani Foundation" />
                    <img src={msme} alt="MSME" />
                </div>
            </section>

            <section className="connect-section">
                <h2>Connect With Us</h2>
                <form className="contact-form">
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <textarea rows="4" placeholder="Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
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
                    <p> <i className="fas fa-phone-alt"></i> +91 6303251526</p>
                    <p><i className="fas fa-envelope"></i> example@gmail.com</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
