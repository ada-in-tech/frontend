import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const ResourceCreationPage = () => {
    const [resourceData, setResourceData] = useState({
        title: '',
        description: '',
        type: '',
        link: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const resourceWithSharer = { ...resourceData, sharer: userId };

        try {
            const response = await axios.post('/api/resources', resourceWithSharer);
            setResourceData({ title: '', description: '', type: '', link: '' });
            setSuccessMessage('Resource created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating resource:', error.message);
            setSuccessMessage('');
        }
    };


    const handleChange = (e) => {
        setResourceData({ ...resourceData, [e.target.name]: e.target.value });
    };

    return (
        <div className="resource-creation-container">
            <h2>Create a New Resource</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form className="resource-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Resource Title</label>
                    <input type="text" name="title" value={resourceData.title} onChange={handleChange} placeholder="Enter resource title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea name="description" value={resourceData.description} onChange={handleChange} placeholder="Enter resource description"></textarea>
                </div>
                <div className="input-field">
                    <label>Resource Type</label>
                    <textarea name="type" value={resourceData.type} onChange={handleChange} placeholder="Is it an article, video, tutorial, ebook, other"></textarea>
                </div>
                <div className="input-field">
                    <label>Resource Link</label>
                    <input type="text" name="link" value={resourceData.link} onChange={handleChange} placeholder="Enter the resource link" />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Share Resource</button>
                </div>
            </form>
        </div>
    );
};

export default ResourceCreationPage;
