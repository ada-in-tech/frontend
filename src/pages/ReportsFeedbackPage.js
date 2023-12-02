import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Table from '../components/common/Table';
import '../styles/components.css';

const ReportsFeedbackPage = () => {
    const [reportsFeedback, setReportsFeedback] = useState([]);

    useEffect(() => {
        const fetchReportsFeedback = async () => {
            try {
                const response = await axios.get('/api/reports-feedback');
                setReportsFeedback(response.data);
            } catch (error) {
                console.error('Error fetching reports and feedback:', error.message);
                // Optionally, handle error (e.g., showing an error message)
            }
        };

        fetchReportsFeedback();
    }, []);

    return (
        <div className="auth-container">
            <h2 className="heading-2">Reports and Feedback</h2>
            <Table data={reportsFeedback} columns={['User', 'Issue', 'Status', 'Actions']} />
            {/* Add action buttons as needed */}
        </div>
    );
};

export default ReportsFeedbackPage;
