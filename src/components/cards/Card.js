import React, { useState } from 'react';
import axios from '../../services/api';
import ContactModal from '../modals/ContactModal';

const Card = ({ item }) => {
    // Check if 'item' has a nested 'user' object; if not, use 'item' directly
    const userData = item.user || item;

    const {
        profilePicture,
        name,
        email,
        bio,
        skills,
        interests,
        linkedIn,
        github,
        role,
        _id
    } = userData;

    const [showContactModal, setShowContactModal] = useState(false);
    const [message, setMessage] = useState('');

    console.log(item);


    const handleSendMessage = async () => {
        // Send email to the user
        await axios.post('/api/send-message', { to: email, message });
        // Add to collaborations
        await axios.post('/api/collaborations', { userId: _id });
        setShowContactModal(false);
    };

    const defaultProfilePicture = 'https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg';
    const userProfilePicture = profilePicture || defaultProfilePicture;

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
                <p>Role: {role}</p>
                {linkedIn && <p>LinkedIn: <a href={linkedIn}>{linkedIn}</a></p>}
                {github && <p>GitHub: <a href={github}>{github}</a></p>}
                <button className="button" onClick={() => setShowContactModal(true)}>Send Message</button>
            </div>
            {showContactModal && (
                <ContactModal
                    user={item.user}
                    onClose={() => setShowContactModal(false)}
                    onSend={handleSendMessage}
                />
            )}
        </div>
    );
};

export default Card;
