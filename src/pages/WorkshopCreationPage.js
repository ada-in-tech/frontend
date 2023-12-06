import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const WorkshopCreationPage = () => {
    const [workshopData, setWorkshopData] = useState({
        title: '',
        description: '',
        content: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        const userId = decoded ? decoded.userId : null;

        const workshopWithInstructor = { ...workshopData, instructor: userId };

        try {
            const response = await axios.post('/api/workshops', workshopWithInstructor);
            setWorkshopData({ title: '', description: '', content: '' });
            setSuccessMessage('Workshop created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating workshop:', error.message);
            setSuccessMessage('');
        }
    };


    const handleChange = (e) => {
        setWorkshopData({ ...workshopData, [e.target.name]: e.target.value });
    };

    return (
        <div className="workshop-creation-container">
            <h2 className="h1">Create a New Workshop</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form className="workshop-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Workshop Title</label>
                    <input type="text" name="title" value={workshopData.title} onChange={handleChange} placeholder="Enter workshop title" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea name="description" value={workshopData.description} onChange={handleChange} placeholder="Enter workshop description"></textarea>
                </div>
                <div className="input-field">
                    <label>Workshop Details</label>
                    <textarea name="content" value={workshopData.content} onChange={handleChange} placeholder="Outline the workshop details"></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Create Workshop</button>
                </div>
            </form>
        </div>
    );
};

export default WorkshopCreationPage;
