import React from 'react';
import '../../styles/card.css';

const WorkshopCard = ({ title, instructor, date, description }) => {
    return (
        <div className="card workshop-card">
            <div className="p-4">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{`Instructor: ${instructor}`}</p>
                <p className="card-date">{`Date: ${date}`}</p>
                <p className="card-body">{description}</p>
            </div>
        </div>
    );
};

export default WorkshopCard;
