import React from 'react';
import '../styles/cards.css';

import uiuxImg from '../assets/uiux.png';
import coreJavaImg from '../assets/corejava.png';
import webImg from '../assets/web.png';
import javaImg from '../assets/java.png';
import aiImg from '../assets/ai.png';

const internships = [
    {
        title: 'UI/UX Designing',
        description: 'Design user-friendly websites and mobile apps using Figma, XD, Sketch.',
        image: uiuxImg
    },
    {
        title: 'Core Java',
        description: 'Master OOP, collections, multithreading, and more in Java.',
        image: coreJavaImg
    },
    {
        title: 'Web Development',
        description: 'Learn full-stack web development including HTML, CSS, JS, and React.',
        image: webImg
    },
    {
        title: 'Java Fullstack Development',
        description: 'Build enterprise apps using Java, Spring Boot, and frontend frameworks.',
        image: javaImg
    },
    {
        title: 'Python with AI and ML',
        description: 'Work on real-time projects in Machine Learning using Python.',
        image: aiImg
    }
];

const Internships = () => {
    return (
        <div className="courses-container">
            <h2 className="section-title">Internships We Provide</h2>
            <div className="courses-grid">
                {internships.map((item, index) => (
                    <div className="course-card" key={index}>
                        <img src={item.image} alt={item.title} className="course-image" />
                        <div className="course-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="rating-price">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="price">$ 360</span>
                            </div>
                            <button className="details-btn">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Internships;
