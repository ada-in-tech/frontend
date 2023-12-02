// CourseCard.js
import React from 'react';
import '../../styles/card.css';

const CourseCard = ({ title, description, imageUrl }) => {
    const defaultImage = 'path/to/default/image.jpg'; // Replace with actual path to default image

    return (
        <div className="card course-card">
            <img src={imageUrl || defaultImage} alt={title} className="course-image" />
            <div className="p-4">
                <h3 className="card-title">{title}</h3>
                <p className="card-body">{description}</p>
            </div>
        </div>
    );
};

export default CourseCard;
