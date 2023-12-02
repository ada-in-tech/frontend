// src/components/cards/EventCard.js
import React from 'react';
import '../../styles/card.css';

const EventCard = ({ title, date }) => {
    return (
        <div className="event-card">
            <h3 className="event-title">{title}</h3>
            <p className="event-date">{date}</p>
        </div>
    );
};

export default EventCard;
