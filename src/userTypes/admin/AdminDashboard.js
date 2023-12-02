import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import Table from '../../components/common/Table';
import Chart from '../../components/common/Chart';
import './adminDashboard.css';
import '../../styles/components.css';
import Card from '../../components/cards/Card';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [content, setContent] = useState([]);
    const [analyticsData, setAnalyticsData] = useState([]);
    const [events, setEvents] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [collaborations, setCollaborations] = useState([]);
    const [financials, setFinancials] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await axios.get('/api/users');
                setUsers(usersResponse.data);
                const contentResponse = await axios.get('/api/content');
                setContent(contentResponse.data);
                // Fetch other data similarly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="admin-dashboard">
            <section className="user-management-section">
                <h2 className="section-title">Users</h2>
                <Table data={users} columns={['Name', 'Role', 'Email']} className="user-table" />
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
        </div>
    );
};

export default AdminDashboard;
