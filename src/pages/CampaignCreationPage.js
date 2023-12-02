import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css'; // Assuming existing styles

const CampaignCreationPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        targetDate: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/campaigns', formData);
            console.log(response.data);
            // Handle response, e.g., redirect or show success message
        } catch (error) {
            console.error('Error creating campaign:', error.message);
            // Optionally, show error to the user
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="campaign-creation-container">
            <h2>Create a New Campaign</h2>
            <form className="campaign-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Campaign Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter campaign title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter campaign description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="input-field">
                    <label>Target Date</label>
                    <input
                        type="date"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Campaign</button>
                </div>
            </form>
        </div>
    );
};

export default CampaignCreationPage;
