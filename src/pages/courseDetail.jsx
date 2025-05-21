import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courseData from './courseData';
import '../styles/courseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const course = courseData[id];

    const [activeDropdowns, setActiveDropdowns] = useState({});

    const toggleDropdown = (module) => {
        setActiveDropdowns((prev) => ({
            ...prev,
            [module]: !prev[module],
        }));
    };

    if (!course) return <p>Course not found</p>;


    const courseModules = {
        HTML: ['Structure of HTML', 'Basic Tags', 'Lists', 'Links and Anchors', 'Tables', 'Forms'],
        CSS: ['Selectors', 'Box Model', 'Flexbox'],
        JavaScript: ['Selectors', 'Box Model', 'Flexbox'],
        JQuery: ['Selectors', 'Box Model', 'Flexbox'],
        'React JS': ['Selectors', 'Box Model', 'Flexbox'],
        SQL: ['Selectors', 'Box Model', 'Flexbox'],
        Bootstrap: ['Selectors', 'Box Model', 'Flexbox'],
        SASS: ['Selectors', 'Box Model', 'Flexbox'],
        Python: ['Selectors', 'Box Model', 'Flexbox'],
        Django: ['Selectors', 'Box Model', 'Flexbox'],
        Git: ['Selectors', 'Box Model', 'Flexbox'],
        GitHub: ['Selectors', 'Box Model', 'Flexbox'],
        'Practice Test': ['Selectors', 'Box Model', 'Flexbox'],
        'Solving Questions': ['Selectors', 'Box Model', 'Flexbox']
    };

    return (
        <div>
            <header>
                <div className="header-container">
                    <a href="/components/internships.html" className="back-link">← Course Details</a>
                    <div className="header-buttons">
                        <button className="enroll">Enroll Now</button>
                        <button className="start">Start Course</button>
                    </div>
                </div>
            </header>

            <main className="main-container">
                <section className="course-info">
                    <img
                        src={course.image}
                        alt="Course Hero"
                        className="hero-img"
                    />
                    <h1>{course.title}</h1>
                    <div className="tags">
                        {['HTML', 'CSS', 'Javascript', 'Jquery', 'Bootstrap', 'SQL', 'Django', 'SASS', 'Git', 'GitHub'].map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    <p className="duration">📅 3 Months 15 Days — Starts from May 1st, 2025</p>
                    <div className="description">
                        <p>
                            A Python Full Stack course equips learners with the skills needed to develop both front-end and back-end web applications using Python and related technologies. The course typically begins with core Python programming concepts and gradually moves on to web development frameworks like Django or Flask...
                        </p>
                        <ul>
                            <li>Core Python Programming – Data types, loops, function, OOP, error handling, and file handling.</li>
                            <li>Front-End Development – HTML, CSS, JavaScript, and frameworks like Bootstrap or React.</li>
                            <li>Back-End Development – Using Python frameworks like Django or Flask to build server-side logic.</li>
                            <li>Database Management – SQL, PostgreSQL, or MySQL, and ORM tools like Django ORM or SQLAlchemy.</li>
                            <li>Version Control – Using Git and GitHub.</li>
                            <li>Authentication and Authorization – Login, registration, secure access.</li>
                            <li>Deployment – Platforms like Heroku, AWS, or Vercel.</li>
                            <li>Testing and Debugging – Writing unit tests, debugging tools, maintaining clean code.</li>
                            <li>Real-World Projects – Blogs, dashboards, or e-commerce sites.</li>
                        </ul>
                    </div>
                </section>

                <aside className="sidebar">
                    <div className="hed">
                        <h2>Course Overview</h2>
                    </div>
                    <div className="p-20">
                        {Object.entries(courseModules).map(([module, topics]) => (
                            <div className={`dropdown ${activeDropdowns[module] ? 'active' : ''}`} key={module}>
                                <div
                                    className="dropdown-header purple"
                                    onClick={() => toggleDropdown(module)}
                                >
                                    {module} <span className="arrow">▶</span>
                                </div>
                                {activeDropdowns[module] && (
                                    <div className="dropdown-content">
                                        <ul>
                                            {topics.map((topic, index) => (
                                                <li key={index}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>
            </main>

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

export default CourseDetail;
