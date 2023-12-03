import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import Table from '../../components/common/Table';
import Chart from '../../components/common/Chart';
import './adminDashboard.css';
import '../../styles/components.css';
import Card from '../../components/cards/Card';
import ReportDetailsModal from '../../components/modals/ReportDetailsModal';
import { decodeToken } from '../../utils/helper';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [content, setContent] = useState([]);
    const [reports, setReports] = useState([]);
    const [analyticsData, setAnalyticsData] = useState([]);
    const [events, setEvents] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [collaborations, setCollaborations] = useState([]);
    const [financials, setFinancials] = useState(null);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await axios.get('/api/users');
                setUsers(usersResponse.data);
                const contentResponse = await axios.get('/api/content');
                setContent(contentResponse.data);
                const reportsResponse = await axios.get('/api/reports');
                setReports(reportsResponse.data);
                // Fetch other data similarly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Decode the token to get the admin's user ID
    const token = localStorage.getItem('token');
    const adminId = decodeToken(token)?.userId;

    const handleAction = async (reportId, action, notes) => {
        if (!adminId) {
            console.error('Error: Admin ID is not available.');
            return;
        }

        try {
            const adminActions = {
                reviewedBy: adminId, // Use the admin ID here
                reviewedAt: new Date(),
                actionTaken: action,
                notes: notes,
                // Include any other details you wish to send
            };
            const response = await axios.post(`/api/reports/${reportId}/review`, { adminActions }, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the authorization header
                }
            });
            // Refresh the reports list or update the state to reflect the changes
            setReports(reports.map(report => report._id === reportId ? response.data : report));
        } catch (error) {
            console.error('Error updating report:', error);
        }
    };

    // When a row in the report table is clicked, this function will be called
    const showReportDetails = (report) => {
        setSelectedReport(report);
    };

    // Close the details modal and clear the selected report
    const closeReportDetails = () => {
        setSelectedReport(null);
    };

    return (
        <div className="admin-dashboard">
            <section className="user-management-section">
                <h2 className="section-title">Users</h2>
                <Table data={users} columns={['Name', 'Role', 'Email']} className="user-table" />
            </section>
            <section className="report-management-section">
                <h2 className="section-title">Bias Reports</h2>
                <Table
                    data={reports}
                    columns={['User', 'Description', 'Date Reported', 'Status']}
                    className="report-table"
                    onRowClick={showReportDetails} // Add this prop to Table component to handle row clicks
                />
            </section>
            <section className="content-moderation-section">
                <h2 className="section-title">Content Moderation</h2>
                <Table data={content} columns={['Title', 'Status']} className="content-table" />
            </section>
            <section className="analytics-section">
                <h2 className="section-title">Analytics</h2>
                <Chart data={analyticsData} className="analytics-chart" />
            </section>
            <section className="event-management-section">
                <h2 className="section-title">Events</h2>
                <Table data={events} columns={['Title', 'Date']} className="event-table" />
            </section>
            <section className="feedback-support-section">
                <h2 className="section-title">Feedback</h2>
                <Table data={feedbacks} columns={['User', 'Content']} className="feedback-table" />
            </section>
            <section className="collaboration-management-section">
                <h2 className="section-title">Collaborations</h2>
                {collaborations.map(collaboration => (
                    <Card key={collaboration.id} item={collaboration} />
                ))}
            </section>
            <section className="financial-management-section">
                <h2 className="section-title">Financials</h2>
                {financials && (
                    <Card
                        item={{
                            title: "Financial Overview",
                            content: `Total Revenue: $${financials.totalRevenue}`
                        }}
                    />
                )}
            </section>
            <section className="settings-section">
                <h2 className="section-title">Settings</h2>
                {/* Settings form */}
            </section>
            {/* Modal for viewing and updating report details */}
            {selectedReport && (
                <ReportDetailsModal
                    report={selectedReport}
                    onClose={closeReportDetails}
                    onAction={handleAction}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
