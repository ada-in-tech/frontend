import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import { decodeToken } from '../../utils/helper';

const DashboardPage = () => {
    const [userName, setUserName] = useState('Guest');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const decoded = decodeToken(token);
            const userId = decoded ? decoded.userId : null;
            if (!token) return;

            try {
                // Assuming your API has an endpoint that returns the logged-in user's data
                const response = await axios.get(`/api/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserName(response.data.name); // Update this path based on your API response structure
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="dashboard-container">
            <div className="welcome-message">
                Welcome, {userName}!
            </div>
        </div>
    );
};

export default DashboardPage;
