import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const ResourceCreationPage = () => {
    const [resourceData, setResourceData] = useState({
        title: '',
        description: '',
        link: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/resources', resourceData);
            // Handle successful resource creation
            // e.g., Redirect or display a success message
        } catch (error) {
            console.error('Error creating resource:', error.message);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    const handleChange = (e) => {
        setResourceData({ ...resourceData, [e.target.name]: e.target.value });
    };

    return (
        <div className="resource-creation-container">
            <h2>Create a New Resource</h2>
            <form className="resource-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Resource Title</label>
                    <input type="text" name="title" placeholder="Enter resource title" value={resourceData.title} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea name="description" placeholder="Describe the resource" value={resourceData.description} onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <label>Resource Link</label>
                    <input type="text" name="link" placeholder="Enter link to the resource" value={resourceData.link} onChange={handleChange} />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Resource</button>
                </div>
            </form>
        </div>
    );
};

export default ResourceCreationPage;
