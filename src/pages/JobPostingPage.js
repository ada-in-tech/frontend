import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const JobPostingPage = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        description: '',
        requirements: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jobs', formData);
            // Handle post success, e.g., show success message or redirect
        } catch (error) {
            console.error('Error posting job:', error.message);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    return (
        <div className="job-posting-container">
            <h2>Create a Job Posting</h2>
            <form className="job-posting-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Job Title</label>
                    <input
                        type="text"
                        placeholder="Enter job title"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea
                        placeholder="Enter job description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="input-field">
                    <label>Requirements</label>
                    <textarea
                        placeholder="List job requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Post Job</button>
                </div>
            </form>
        </div>
    );
};

export default JobPostingPage;
