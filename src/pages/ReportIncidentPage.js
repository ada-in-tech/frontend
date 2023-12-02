import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';

const ReportIncidentPage = () => {
    const [reportData, setReportData] = useState({
        description: '',
        date: '',
        file: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', reportData.description);
        formData.append('date', reportData.date);
        if (reportData.file) {
            formData.append('file', reportData.file);
        }

        try {
            const response = await axios.post('/api/reports', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Report submitted:', response.data);
            // Optionally, handle successful submission (e.g., showing a success message)
        } catch (error) {
            console.error('Error submitting report:', error.message);
            // Optionally, handle error (e.g., showing an error message)
        }
    };

    const handleChange = (e) => {
        setReportData({ ...reportData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setReportData({ ...reportData, file: e.target.files[0] });
    };

    return (
        <div className="report-incident-page">
            <h1>Report Incident</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Describe the incident"
                    name="description"
                    value={reportData.description}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="date"
                    value={reportData.date}
                    onChange={handleChange}
                />
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                />
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default ReportIncidentPage;
