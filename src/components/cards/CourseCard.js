import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    // Function to handle card click
    const handleCardClick = () => {
        navigate(`/courses/${course._id}`); // Navigate to detailed course page
    };

    return (
        <div className="course-card" onClick={handleCardClick}>
            <img src={course.image || 'https://clipart-library.com/2023/63da55c5bd9e6f4fb250f465_Blue20Modern20Blog20Banner20Business20(10).png'} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>By: {course.instructor?.name || 'Unknown'}</p>
        </div>
    );
};

export default CourseCard;
