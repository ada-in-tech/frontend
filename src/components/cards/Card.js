import React from 'react';
import '../../styles/card.css';

const Card = ({ item }) => {
    // Destructuring properties that might be present in item
    const { user, goals, challenges, title, description, imageUrl, company, location, name, expertise } = item;

    // Determine card content based on the item's properties
    const renderCardContent = () => {
        if (user) {
            // Newcomer card layout
            return (
                <>
                    <h3 className="card-title">{user}</h3>
                    <ul>
                        {goals && goals.map((goal, index) => <li key={index}>{goal}</li>)}
                        {challenges && challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
                    </ul>
                </>
            );
        } else {
            // General card layout (for courses, workshops, etc.)
            return (
                <>
                    {imageUrl && <img src={imageUrl} alt={title || name} className="card-image" />}
                    <h3 className="card-title">{title || name}</h3>
                    <p className="card-description">{description || expertise}</p>
                    {company && <p className="card-company">{company}</p>}
                    {location && <p className="card-location">{location}</p>}
                </>
            );
        }
    };

    return (
        <div className="card">
            <div className="p-4">
                {renderCardContent()}
            </div>
        </div>
    );
};

export default Card;
