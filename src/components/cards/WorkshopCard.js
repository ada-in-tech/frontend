import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const WorkshopCard = ({ workshop }) => {
    const navigate = useNavigate();

    // Function to handle card click
    const handleCardClick = () => {
        navigate(`/workshops/${workshop._id}`); // Navigate to detailed workshop page
    };

    return (
        <div className="workshop-card" onClick={handleCardClick}>
            <img src={workshop.image || 'https://designwizard.com/blog/famous-graphic-designers/resize/awardsBaitBannerImage_1650363716109_resize.jpg'} alt={workshop.title} />
            <h3>{workshop.title}</h3>
            <p>{workshop.description}</p>
            <p>Organizer: {workshop.instructor?.name || 'Unknown'}</p>
        </div>
    );
};

export default WorkshopCard;
