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
            <img src={course.image || 'https://designwizard.com/blog/famous-graphic-designers/resize/awardsBaitBannerImage_1650363716109_resize.jpg'} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>By: {course.instructor?.name || 'Unknown'}</p>
        </div>
    );
};

export default CourseCard;
