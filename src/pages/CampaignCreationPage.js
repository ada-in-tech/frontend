import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const CampaignCreationPage = () => {
    const [campaignData, setCampaignData] = useState({
        title: '',
        description: '',
        link: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const campaignWithCreatedBy = { ...campaignData, createdBy: userId };

        try {
            const response = await axios.post('/api/campaigns', campaignWithCreatedBy);
            setCampaignData({ title: '', description: '', link: '' });
            setSuccessMessage('Campaign created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating campaign:', error.message);
            setSuccessMessage('');
        }
    };


    const handleChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    return (
        <div className="resource-creation-container">
            <h2>Create a New Campaign</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form className="campaign-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Campaign Title</label>
                    <input type="text" name="title" value={campaignData.title} onChange={handleChange} placeholder="Enter campaign title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea name="description" value={campaignData.description} onChange={handleChange} placeholder="Enter campaign description"></textarea>
                </div>
                <div className="input-field">
                    <label>Campaign Link</label>
                    <input type="text" name="link" value={campaignData.link} onChange={handleChange} placeholder="Where can we find more info?" />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Post Campaign</button>
                </div>
            </form>
        </div>
    );
};

export default CampaignCreationPage;
