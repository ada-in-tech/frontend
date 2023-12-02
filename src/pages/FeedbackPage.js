import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const FeedbackPage = () => {
    const [feedbackData, setFeedbackData] = useState({
        type: 'general',
        content: '',
        email: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback', feedbackData);
            // Handle success (e.g., showing a success message)
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    const handleChange = (e) => {
        setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
    };

    return (
        <div className="feedback-page">
            <h1>Feedback</h1>
            <form onSubmit={handleSubmit}>
                <select name="type" onChange={handleChange} value={feedbackData.type}>
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                </select>
                <textarea name="content" placeholder="Your feedback" onChange={handleChange} value={feedbackData.content} />
                <input type="email" name="email" placeholder="Your email (optional)" onChange={handleChange} value={feedbackData.email} />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackPage;
