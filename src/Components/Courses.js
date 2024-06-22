// src/components/Courses.js
import React from 'react';
import Sidebar from './Sidebar';
import './Courses.css';

const courses = [
  {
    id: 1,
    title: 'Project Management',
    description: 'This is a brief description of Course 1.',
    image: './images/pm.jpg',
  },
  {
    id: 2,
    title: 'Business Management',
    description: 'This is a brief description of Course 2.',
    image: './images/bm.jpg',
  },
  {
    id: 3,
    title: 'Agile',
    description: 'This is a brief description of Course 3.',
    image: './images/agile.jpg',
  },
  {
    id: 4,
    title: 'Machine Learning',
    description: 'This is a brief description of Course 4.',
    image: './images/ml.jpg',
  },
  {
    id: 5,
    title: 'Artificial Intelligence',
    description: 'This is a brief description of Course 5.',
    image: './images/ai.jpg',
  },
  {
    id: 6,
    title: 'Java',
    description: 'This is a brief description of Course 6.',
    image: './images/java.jpg',
  },
  {
    id: 7,
    title: 'JavaScript',
    description: 'This is a brief description of Course 7.',
    image: './images/js.png',
  },
  {
    id: 8,
    title: 'Python',
    description: 'This is a brief description of Course 8.',
    image: './images/python.png',
  },
];

const Courses = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h2 style={{color:"#8949FF"}}>Courses</h2>
        <div className="courses-container">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="course-button">View Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
