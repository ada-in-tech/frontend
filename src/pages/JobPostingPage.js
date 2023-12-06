import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const JobPostingPage = () => {
    const [jobListingData, setJobListingData] = useState({
        title: '',
        description: '',
        location: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const jobListingWithCompany = { ...jobListingData, company: userId };

        try {
            const response = await axios.post('/api/joblistings', jobListingWithCompany);
            setJobListingData({ title: '', description: '', location: '' });
            setSuccessMessage('Job listing created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating job listing:', error.message);
            setSuccessMessage('');
        }
    };

    const handleChange = (e) => {
        setJobListingData({ ...jobListingData, [e.target.name]: e.target.value });
    };

    return (
        <div className="resource-creation-container">
            <h2 className="h1">Create a New Job Listing</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form className="joblisting-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Job Title</label>
                    <input type="text" name="title" value={jobListingData.title} onChange={handleChange} placeholder="Enter job title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea name="description" value={jobListingData.description} onChange={handleChange} placeholder="Enter job description"></textarea>
                </div>
                <div className="input-field">
                    <label>Location</label>
                    <textarea name="location" value={jobListingData.location} onChange={handleChange} placeholder="Enter job location"></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Post Job Listing</button>
                </div>
            </form>
        </div>
    );
};

export default JobPostingPage;