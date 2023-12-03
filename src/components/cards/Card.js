import React from 'react';
import '../../styles/card.css';

const Card = ({ item }) => {
    // Destructuring properties that might be present in item
    const { user, goals, challenges, areasOfExpertise, certifications } = item;

    // Determine card content based on the item's properties
    const renderCardContent = () => {
        if (areasOfExpertise || certifications) {
            // Professional card layout
            return (
                <>
                    <h3 className="card-title">{user}</h3>
                    <ul>
                        {areasOfExpertise && areasOfExpertise.map((expertise, index) => <li key={index}>{expertise}</li>)}
                        {certifications && certifications.map((certification, index) => <li key={index}>{certification}</li>)}
                    </ul>
                </>
            );
        } else {
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
