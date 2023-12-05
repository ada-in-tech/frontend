import React, { useState } from 'react';
import axios from '../../services/api';
import { decodeToken } from '../../utils/helper';

const JobListingCard = ({ jobListing }) => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const message = `Hello, I am interested in your job listing: ${jobListing.title}. Here is my CV.`;

    const handleSubmit = async () => {
        // Retrieve the sender's user ID and information from localStorage
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        console.log(decoded);
        const senderId = decoded ? decoded.userId : null;
        const senderName = decoded ? decoded.name : '';

        if (!senderId) {
            // Handle error: User ID not found
            console.error('Error: Sender ID is not available.');
            setAlertMessage('Sender identification is required to send a message.');
            setAlertType('error');
            return;
        }

        try {
            if (!jobListing.company) {
                // Handle error: Company information not found
                console.error('Error: Company information is not available.');
                setAlertMessage('Company identification is required to send a message.');
                setAlertType('error');
                return;
            }

            // Make an API call to send the message
            await axios.post('/api/users/send-message', {
                recipientId: jobListing.company._id,
                message: message,
                senderId: senderId, // The sender's user ID obtained from the token
                subject: `Job Application from ${senderName}`
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the header
                }
            });

            // Handle success: Show a success message
            setAlertMessage('Application message sent.');
            setAlertType('success');


        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('Failed to send application. Please try again.');
            setAlertType('error');
        }
    };

    const renderAlertMessage = () => {
        if (!alertMessage) return null;

        // You can adjust the class based on the alertType for different styles
        const alertClass = alertType === 'success' ? 'alert-success' : 'alert-error';

        return (
            <div className={alertClass}>
                {alertMessage}
            </div>
        );
    };

    return (
        <div className="card">
            <div className="p-4">
                <img src={jobListing.company?.profilePicture || 'https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg'} alt={jobListing.title} className="w-32 h-32 rounded-full mb-4" />
                <h3 className="card-title">{jobListing.company?.name || 'Unknown'}</h3>
                <h2 className="card-title">{jobListing.title}</h2>
                <p>{jobListing.description}</p>
                <button className="button" onClick={handleSubmit}>
                    Apply
                </button>
            </div>
            {renderAlertMessage()}
        </div>
    );
};

export default JobListingCard;
