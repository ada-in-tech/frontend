import React from 'react';
import '../../styles/card.css';

const Card = ({ item }) => {
    const { profilePicture, name, email, bio, skills, interests, linkedIn, github } = item.user || {};

    const defaultProfilePicture = 'https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg';
    const userProfilePicture = profilePicture || defaultProfilePicture; // Use default if not set


    const formatArray = (arr) => Array.isArray(arr) ? arr.join(', ') : '';

    return (
        <div className="card">
            <div className="p-4">
                <img src={userProfilePicture} alt={name} className="w-32 h-32 rounded-full mb-4" />
                <h3 className="card-title">{name}</h3>
                <p>{email}</p>
                <p>{bio}</p>
                <p>Skills: {formatArray(skills)}</p>
                <p>Interests: {formatArray(interests)}</p>
                {linkedIn && <p>LinkedIn: <a href={linkedIn}>{linkedIn}</a></p>}
                {github && <p>GitHub: <a href={github}>{github}</a></p>}
            </div>
        </div>
    );
};


export default Card;
