import React from 'react';
import '../../styles/card.css';

const CompanyProfileCard = ({ name, description, location, imageUrl }) => {
    return (
        <div className="card company-profile-card">
            {imageUrl && <img src={imageUrl} alt={name} className="company-logo" />}
            <div className="p-4">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-location">{location}</p>
            </div>
        </div>
    );
};

export default CompanyProfileCard;
