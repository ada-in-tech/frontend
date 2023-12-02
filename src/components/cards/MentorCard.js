// src/components/cards/MentorCard.js
import React from 'react';
import '../../styles/card.css';

const MentorCard = ({ name, expertise }) => {
    return (
        <div className="mentor-card">
            <h3 className="mentor-name">{name}</h3>
            <p className="mentor-expertise">{expertise}</p>
        </div>
    );
};

export default MentorCard;
