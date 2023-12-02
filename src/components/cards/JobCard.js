import React from 'react';
import '../../styles/card.css';

const JobCard = ({ title, company, location }) => {
    return (
        <div className="job-card">
            <h3 className="job-title">{title}</h3>
            <p className="job-company">{company}</p>
            <p className="job-location">{location}</p>
        </div>
    );
};

export default JobCard;
