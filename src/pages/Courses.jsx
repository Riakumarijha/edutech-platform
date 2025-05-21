import React from 'react';
import '../styles/cards.css';

import { useNavigate } from 'react-router-dom';
//import courseList from './courseData';
import pythonImg from '../assets/python.png';
import javaImg from '../assets/java.png';
import webImg from '../assets/web.png';
import aiImg from '../assets/ai.png';
import coreJavaImg from '../assets/corejava.png';
import uiuxImg from '../assets/uiux.png';

const courseList = [
    {
        title: "Python Fullstack Development",
        image: pythonImg,
        description: "Learn to build web apps using Python, Django, and more."
    },
    {
        title: "Java Fullstack Development",
        image: javaImg,
        description: "Build enterprise apps using Java, Spring Boot, and frontend frameworks."
    },
    {
        title: "Web Development",
        image: webImg,
        description: "HTML, CSS, JavaScript, React and full frontend stack."
    },
    {
        title: "Python with AI and ML",
        image: aiImg,
        description: "Apply Python for machine learning and AI projects."
    },
    {
        title: "Core Java",
        image: coreJavaImg,
        description: "Build strong Java fundamentals and OOP concepts."
    },
    {
        title: "UI/UX Designing",
        image: uiuxImg,
        description: "Design user-friendly interfaces using Figma & Adobe tools."
    }
];

const Courses = () => {
    const navigate = useNavigate();

    const handleViewDetails = (index) => {
        navigate(`/courses/${index}`);
    };

    return (
        <div className="courses-container">
            <h2 className="section-title">Courses We Provide</h2>
            <div className="courses-grid">
                {courseList.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-content">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className="rating-price">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="price">$ 360</span>
                            </div>
                            <button className="details-btn" onClick={() => handleViewDetails(index)}>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;