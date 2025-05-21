import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import partner from '../assets/partners.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={partner} alt="Partner Logo" className="navbar-img" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* This is the ☰ symbol */}
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
