import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Table from '../components/common/Table';
import ReportDetailsModal from '../components/modals/ReportDetailsModal';
import '../styles/components.css';
import { decodeToken } from '../utils/helper';

const ReportsFeedbackPage = () => {
    const [reportsFeedback, setReportsFeedback] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    const token = localStorage.getItem('token');
    const adminId = decodeToken(token)?.userId;

    useEffect(() => {
        const fetchReportsFeedback = async () => {

            try {
                const response = await axios.get('/api/reports', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setReportsFeedback(response.data);
            } catch (error) {
                console.error('Error fetching reports and feedback:', error);
                // Handle error, e.g., by setting an error state or showing a message to the user
            }
        };

        fetchReportsFeedback();
    }, [token]);

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    const handleCloseModal = () => {
        setSelectedReport(null);
    };

    const handleUpdateReport = async (reportId, actionTaken, actionNotes) => {
        try {
            const adminActions = {
                reviewedBy: adminId, // Pass the admin ID
                actionTaken: actionTaken,
                notes: actionNotes,
                reviewedAt: new Date(), // Add other details as needed
            };

            // Call the backend to update the report
            await axios.post(`/api/reports/${reportId}/review`, { adminActions }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Refresh the reports list
            const updatedReports = reportsFeedback.map(report =>
                report._id === reportId ? { ...report, adminReview: adminActions, resolved: actionTaken === 'resolve' } : report
            );
            setReportsFeedback(updatedReports);
            handleCloseModal();
        } catch (error) {
            console.error('Error updating report:', error.message);
        }
    };

    return (
        <div className="reports-feedback-page">
            <h2>Reports and Feedback</h2>
            <Table
                data={reportsFeedback}
                onRowClick={handleReportClick}
            />
            {selectedReport && (
                <ReportDetailsModal
                    report={selectedReport}
                    onClose={handleCloseModal}
                    onAction={handleUpdateReport}
                />
            )}
        </div>
    );
};

export default ReportsFeedbackPage;
