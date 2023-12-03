import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Table from '../components/common/Table';
import ReportDetailsModal from '../components/modals/ReportDetailsModal';
import '../styles/components.css';

const ReportsFeedbackPage = () => {
    const [reportsFeedback, setReportsFeedback] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        const fetchReportsFeedback = async () => {
            try {
                const response = await axios.get('/api/reports');
                setReportsFeedback(response.data);
            } catch (error) {
                console.error('Error fetching reports and feedback:', error.message);
            }
        };

        fetchReportsFeedback();
    }, []);

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    const handleCloseModal = () => {
        setSelectedReport(null);
    };

    const handleUpdateReport = async (reportId, updatedData) => {
        try {
            // API call to update the report
            await axios.post(`/api/reports/${reportId}/update`, updatedData);
            // Refresh the reports list
            const updatedReports = reportsFeedback.map(report =>
                report._id === reportId ? { ...report, ...updatedData } : report
            );
            setReportsFeedback(updatedReports);
            handleCloseModal();
        } catch (error) {
            console.error('Error updating report:', error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2 className="heading-2">Reports and Feedback</h2>
            <Table
                data={reportsFeedback}
                columns={['User', 'Issue', 'Status', 'Actions']}
                onRowClick={handleReportClick} // Assuming Table supports onRowClick
            />
            {selectedReport && (
                <ReportDetailsModal
                    report={selectedReport}
                    onClose={handleCloseModal}
                    onUpdate={handleUpdateReport}
                />
            )}
        </div>
    );
};

export default ReportsFeedbackPage;
