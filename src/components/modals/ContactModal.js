import React, { useState } from 'react';
import axios from '../../services/api';
import { decodeToken } from '../../utils/helper';

const ContactModal = ({ user, onClose, onSend }) => {
    const [message, setMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleSubmit = async () => {
        // Retrieve the sender's user ID and information from localStorage
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        console.log(decoded);
        const senderId = decoded ? decoded.userId : null;
        const senderName = decoded ? decoded.name : '';
        const senderRole = decoded ? decoded.role : '';

        if (!senderId) {
            // Handle error: User ID not found
            console.error('Error: Sender ID is not available.');
            setAlertMessage('Sender identification is required to send a message.');
            setAlertType('error');
            return;
        }

        try {
            // Make an API call to send the message
            await axios.post('/api/users/send-message', {
                recipientId: user._id, // The recipient's ID passed from the modal's props
                message: message,
                senderId: senderId, // The sender's user ID obtained from the token
                subject: `New message from ${senderName} a ${senderRole}`
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the header
                }
            });

            // Attempt to create a collaboration
            const collabResponse = await axios.post('/api/collaborations', {
                sender: senderId,
                receiver: user._id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Check if the collaboration was already existing
            if (collabResponse.status === 200 && collabResponse.data.message === 'Collaboration already exists') {
                setAlertMessage('Message sent. You already have an existing collaboration with this user.');
                setAlertType('info');
            } else {
                setAlertMessage('Message sent and new collaboration created.');
                setAlertType('success');
            }

            onClose(); // Close the modal after sending message and creating collaboration
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('Failed to send message. Please try again.');
            setAlertType('error');
        }
    };

    return (
        <div className="contact-modal">
            <div className="modal-content">
                <h2>Send a Message to {user.name}</h2>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here"
                />
                <button className="button" onClick={handleSubmit}>Send</button>
                <button className="button" onClick={onClose}>Close</button>
                {/* Alert message */}
                {alertMessage && (
                    <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-error'}`}>
                        {alertMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
