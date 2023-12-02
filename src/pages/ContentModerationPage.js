import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Table from '../components/common/Table';
import '../styles/components.css';

const ContentModerationPage = () => {
    const [contentToModerate, setContentToModerate] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get('/api/content');
                setContentToModerate(response.data);
            } catch (error) {
                console.error('Error fetching content:', error.message);
            }
        };

        fetchContent();
    }, []);

    return (
        <div className="auth-container">
            <h2 className="heading-2">Content Moderation</h2>
            <Table data={contentToModerate} columns={['Title', 'Author', 'Status', 'Actions']} />
            {/* Add action buttons as needed */}
        </div>
    );
};

export default ContentModerationPage;
