import React, { useState } from 'react';
import axios from '../services/api';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const ReportIncidentPage = () => {
    const [reportData, setReportData] = useState({
        description: '',
        dateReported: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const token = localStorage.getItem('token');
    const decoded = decodeToken(token);
    const userId = decoded ? decoded.userId : null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            setSubmitError('User identification is required to submit a report.');
            return;
        }

        setSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError('');

        try {
            const response = await axios.post('/api/reports', {
                user: userId,
                description: reportData.description,
                dateReported: reportData.dateReported,
            });
            setReportData({ description: '', dateReported: '' });
            console.log('Report submitted:', response.data);
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error submitting report:', error);
            setSubmitError('Error submitting report. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setReportData({ ...reportData, [e.target.name]: e.target.value });
    };

    return (
        <div className="report-incident-page">
            <h1 className="h1">Report Incident</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Describe the incident"
                    name="description"
                    value={reportData.description}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="dateReported" // Changed from 'date' to 'dateReported'
                    value={reportData.dateReported}
                    onChange={handleChange}
                />
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Report'}
                </button>
            </form>
            {submitSuccess && <p className="success-message">Report submitted successfully.</p>}
            {submitError && <p className="error-message">{submitError}</p>}
        </div>
    );
};

export default ReportIncidentPage;
