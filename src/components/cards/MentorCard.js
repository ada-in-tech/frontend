// src/components/cards/MentorCard.js
import React from 'react';
import '../../styles/card.css';

const MentorCard = ({ user, areasOfExpertise }) => {
    // Combining areas of expertise into a string
    const expertiseString = areasOfExpertise.join(', ');

    return (
        <div className="card">
            <div className="p-4">
                <h3 className="card-title">{user}</h3>
                <p className="card-body">{expertiseString}</p>
            </div>
        </div>
    );
};

export default MentorCard;
